import { useState } from "react";
import { D } from "../tokens";

export default function PdfCard({ title, url, comingSoon }) {
  const [hov, setHov] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = title.replace(/\s+/g, "_") + ".pdf";
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch(() => window.open(url, "_blank", "noopener,noreferrer"));
  };

  if (comingSoon) {
    return (
      <div style={{ border: `1px solid ${D.border}`, borderRadius: "4px", padding: "0.7rem", opacity: 0.6 }}>
        <div style={{ fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: "0.7rem", color: D.primary }}>Coming Soon</div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? D.primary : D.border}`,
        borderRadius: "4px", padding: "0.7rem",
        background: hov ? D.cardHov : D.card,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 500 }}>{title}</span>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a
            href={url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              background: url ? D.primaryDim : D.surface,
              color: url ? D.primary : D.sub,
              border: `1px solid ${url ? D.primary : D.border}`,
              borderRadius: "4px", padding: "0.2rem 0.6rem",
              fontSize: "0.75rem", fontWeight: 500,
              cursor: url ? "pointer" : "default",
              pointerEvents: url ? "auto" : "none",
            }}
          >
            Open
          </a>
          {url && (
            <button onClick={handleDownload} style={{
              background: D.primary, color: "white", border: "none",
              borderRadius: "4px", padding: "0.2rem 0.6rem",
              fontSize: "0.75rem", fontWeight: 500, cursor: "pointer",
            }}>
              Download
            </button>
          )}
        </div>
      </div>
      <div style={{ fontSize: "0.7rem", color: url ? D.sub : D.danger, marginTop: "0.2rem" }}>
        {url ? "PDF available" : "PDF link not added"}
      </div>
    </div>
  );
}
