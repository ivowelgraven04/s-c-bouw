import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-wide max-w-2xl text-center">
        <span className="eyebrow">404</span>
        <h1 className="h-display mt-3">Pagina niet gevonden</h1>
        <p className="lede mt-5">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
