#!/usr/bin/env node
// One-shot: download S&C Bouw assets from preview CDN to public/images/
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUB = join(ROOT, "public", "images");

const CDN = "https://assets.cdn.filesafe.space/VsiiyLuWIeAdlGvpDn5z/media";

const assets = [
  { src: "682305a99c2a11201a5e8298.png", out: "logo.png" },
  { src: "6823080b16cf72f2ab97fa91.jpeg", out: "hero-home.jpg" },
  { src: "68230ada75cc46797957627c.png", out: "about-cta.png" },
  { src: "6814a0d4eba7a38104192ccb.jpeg", out: "about-team.jpg" },
  { src: "bea0926f-4b76-4de9-b3a2-9b785951f8ef.jpeg", out: "emergency.jpg" },
  { src: "6812084333fee412cb498b61.png", out: "about-secondary.png" },
  { src: "694390119a634fd145cdb6b9.jpg", out: "service-dakwerken.jpg" },
  { src: "694390a69a634f561acdc4d3.jpg", out: "service-nieuwbouw.jpg" },
  { src: "69439338c8b4b27b20237c17.jpg", out: "service-renovatie.jpg" },
  { src: "69439700aca6ab55fe4567fe.jpg", out: "service-stellingbouw.jpg" },
  { src: "8578770f-1e68-4efe-98b2-14ca4b722b25.svg", out: "star.svg" },
  { src: "3ce179fb-de60-4025-903a-30a41a3a4f5c.svg", out: "icon-expertise.svg" },
  { src: "731dc678-898f-43b9-9e67-f69221a4da57.svg", out: "icon-betrouwbaarheid.svg" },
  { src: "7c971d6e-2486-4a78-899b-d774be6691ed.svg", out: "icon-veiligheid.svg" },
  { src: "9dabc931-bd8a-43b7-a0c6-e4d6311ba45f.svg", out: "icon-transparantie.svg" },
  { src: "c0b2f1a0-7d62-44ce-b974-35c4d309de65.svg", out: "icon-process-1.svg" },
  { src: "dadc42e7-c8c9-4ccc-a258-d2abd57a2f5f.svg", out: "icon-process-2.svg" },
  { src: "f34d73fa-161a-42fe-9316-e75388f43b45.svg", out: "icon-process-3.svg" },
];

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function downloadOne(srcName, outPath) {
  if (await exists(outPath)) {
    console.log(`  ✓ skip (exists) ${outPath.replace(ROOT + "/", "")}`);
    return;
  }
  const url = `${CDN}/${srcName}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`  ✗ FAIL ${url} → HTTP ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buf);
  console.log(`  ✓ ${outPath.replace(ROOT + "/", "")} (${buf.length} bytes)`);
}

async function main() {
  await mkdir(PUB, { recursive: true });
  await mkdir(join(PUB, "projects"), { recursive: true });

  console.log("⬇  Downloading core assets...");
  for (const a of assets) {
    await downloadOne(a.src, join(PUB, a.out));
  }

  // Try to find project images by paginating likely IDs
  // The /sc-vacatures-7620-4192 page references 20 project images.
  // We discover them by re-fetching that page server-side.
  console.log("\n⬇  Discovering project images from preview...");
  const projPage = await fetch(
    "https://preview.deprocesdesigners.nl/sc-vacatures-7620-4192",
  );
  const html = await projPage.text();
  // Project images live on storage.googleapis.com/msgsndr/VsiiyLuWIeAdlGvpDn5z/media/...
  const matches = Array.from(
    html.matchAll(
      /storage\.googleapis\.com\/msgsndr\/VsiiyLuWIeAdlGvpDn5z\/media\/[a-f0-9]+\.(?:jpe?g|png|webp)/g,
    ),
  ).map((m) => m[0]);
  const unique = Array.from(new Set(matches));

  console.log(`  → found ${unique.length} unique project URLs`);
  let i = 1;
  for (const u of unique.slice(0, 20)) {
    const n = String(i).padStart(2, "0");
    const ext = (u.match(/\.(jpe?g|png|webp)/i) || [, "jpg"])[1].toLowerCase();
    const out = join(PUB, "projects", `${n}.${ext === "jpeg" ? "jpg" : ext}`);
    if (await exists(out)) {
      console.log(`  ✓ skip projects/${n}`);
      i++;
      continue;
    }
    const res = await fetch(`https://${u}`);
    if (!res.ok) {
      console.error(`  ✗ FAIL ${u} → ${res.status}`);
      i++;
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(out, buf);
    console.log(
      `  ✓ projects/${n}.${ext === "jpeg" ? "jpg" : ext} (${buf.length} bytes)`,
    );
    i++;
  }

  console.log("\n✅ Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
