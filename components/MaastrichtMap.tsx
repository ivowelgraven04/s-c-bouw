export function MaastrichtMap() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="eyebrow">Werkgebied</span>
          <h2 className="h-section mt-4">Actief in Nederland &amp; België</h2>
          <p className="lede mt-5">
            Onze thuisbasis ligt in Maastricht en omgeving — we werken voor
            klanten in heel Zuid-Limburg en daarbuiten, in Nederland en België.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Werkgebied S&C Bouw — Maastricht en omgeving"
            src="https://www.openstreetmap.org/export/embed.html?bbox=5.27%2C50.65%2C6.10%2C51.05&layer=mapnik&marker=50.8514%2C5.6909"
            width="100%"
            height="480"
            style={{ border: 0, display: "block" }}
            loading="lazy"
          />
          <div className="border-t border-line bg-white px-5 py-3 text-xs text-muted">
            <a
              href="https://www.openstreetmap.org/?mlat=50.8514&mlon=5.6909#map=11/50.85/5.69"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Bekijk groter op OpenStreetMap →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
