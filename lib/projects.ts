// Project gallery for /projecten — 20 project photos
export const projects: { src: string; alt: string }[] = Array.from(
  { length: 20 },
  (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/projects/${n}.jpg`,
      alt: `S&C Bouw project ${i + 1}`,
    };
  },
);
