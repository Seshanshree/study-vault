import { useState } from "react";
import { D } from "../tokens";
import seshanImg from "../assets/seshan.jpeg";

export default function SubjectCard({ name, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: hov
          ? `linear-gradient(145deg, ${D.card}, ${D.primaryLo})`
          : `linear-gradient(145deg, ${D.card}, ${D.surface})`,
        border: `1px solid ${hov ? D.primary : D.border}`,
        borderRadius: "14px",
        padding: "0.9rem",
        cursor: "pointer",
        textAlign: "center",
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease",
        transform: hov ? "translateY(-4px) rotateX(4deg)" : "translateY(0) rotateX(0deg)",
        transformStyle: "preserve-3d",
        boxShadow: hov
          ? "0 14px 24px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(13, 110, 253, 0.12)"
          : "0 8px 14px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.24), transparent 50%)", pointerEvents: "none" }} />
      <div style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{name}</div>
      <div style={{ color: D.sub, fontSize: "0.7rem" }}>tap to unlock</div>
    </div>
  );
}

export function Portfolio() {
  const cardStyle = {
    maxWidth: "620px",
    margin: "0 auto",
    border: `1px solid ${D.border}`,
    borderRadius: "22px",
    background: `linear-gradient(180deg, ${D.card} 0%, ${D.surface} 100%)`,
    boxShadow: "0 20px 50px rgba(52, 40, 31, 0.12)",
    overflow: "hidden",
    textAlign: "left",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.9rem",
    padding: "0.85rem 0.95rem",
    border: `1px solid ${D.border}`,
    borderRadius: "14px",
    background: D.card,
    textDecoration: "none",
    color: D.text,
    transition: "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background 180ms ease",
  };

  return (
    <section aria-label="Developer portfolio" style={cardStyle}>
      <div
        style={{
          padding: "1.5rem",
          background: `radial-gradient(circle at top left, ${D.primaryLo}, transparent 42%), linear-gradient(135deg, ${D.card} 0%, ${D.surface} 100%)`,
          borderBottom: `1px solid ${D.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <div
  style={{
    width: "88px",
    height: "88px",
    borderRadius: "50%",
    overflow: "hidden",
    border: `1px solid ${D.borderHov}`,
    flex: "0 0 auto",
  }}
>
  <img
    src={seshanImg}
    alt="Seshanshree"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>

          <div style={{ minWidth: 0, flex: "1 1 240px" }}>
            <div style={{ color: D.primary, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
              Developer Profile
            </div>
            <h2 style={{ margin: 0, fontSize: "2rem", lineHeight: 1.1 }}>
              Seshanshree M
            </h2>
            <p style={{ marginTop: "0.45rem", color: D.sub, fontSize: "0.95rem" }}>
              Electronics &amp; Communication Engineering student building clean, practical web experiences.
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "grid", gap: "0.7rem", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ padding: "0.35rem 0.7rem", borderRadius: "999px", background: D.primaryLo, color: D.primary, fontSize: "0.8rem", fontWeight: 600 }}>
              Creative Developer
            </span>
            <span style={{ padding: "0.35rem 0.7rem", borderRadius: "999px", background: D.primaryLo, color: D.primary, fontSize: "0.8rem", fontWeight: 600 }}>
              CEO &amp; Founder - iMaXx
            </span>
          </div>

          <p style={{ margin: "5px", color: D.text, fontSize: "0.95rem", lineHeight: 1.6 }}>
            Focused on digital design experience, student tools, and small systems that feel fast and easy to use.
          </p>
        </div>

        <div style={{ display: "grid", gap: "0.75rem" }}>
          <a style={linkStyle} href="mailto:seshanshreem@gmail.com">
            <span style={{ width: "38px", height: "38px", borderRadius: "12px", display: "grid", placeItems: "center", background: D.primaryLo, color: D.primary, fontSize: "1rem", flex: "0 0 auto" }}></span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontSize: "0.75rem", color: D.sub }}>Email</span>
              <span style={{ display: "block", fontWeight: 600, overflowWrap: "anywhere" }}>seshanshreem@gmail.com</span>
            </span>
          </a>

          <a
            style={linkStyle}
            href="https://www.linkedin.com/in/seshanshree-m-490051360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ width: "38px", height: "38px", borderRadius: "12px", display: "grid", placeItems: "center", background: D.primaryLo, color: D.primary, fontSize: "1rem", flex: "0 0 auto" }}></span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontSize: "0.75rem", color: D.sub }}>LinkedIn</span>
              <span style={{ display: "block", fontWeight: 600, overflowWrap: "anywhere" }}>seshanshree-m-490051360</span>
            </span>
          </a>

          <a
            style={linkStyle}
            href="https://github.com/seshanshree"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ width: "38px", height: "38px", borderRadius: "12px", display: "grid", placeItems: "center", background: D.primaryLo, color: D.primary, fontSize: "1rem", flex: "0 0 auto" }}></span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontSize: "0.75rem", color: D.sub }}>GitHub</span>
              <span style={{ display: "block", fontWeight: 600, overflowWrap: "anywhere" }}>seshanshree</span>
            </span>
          </a>

          <a
            style={linkStyle}
            href="https://www.instagram.com/seshan_tamil_31?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ width: "38px", height: "38px", borderRadius: "12px", display: "grid", placeItems: "center", background: D.primaryLo, color: D.primary, fontSize: "1rem", flex: "0 0 auto" }}></span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontSize: "0.75rem", color: D.sub }}>Instagram</span>
              <span style={{ display: "block", fontWeight: 600, overflowWrap: "anywhere" }}>seshan_tamil_31</span>
            </span>
          </a>
        </div>

        <p style={{ marginTop: "1.25rem", marginBottom: 0, color: D.sub, fontSize: "0.8rem", textAlign: "center" }}>
          Study-Vault by iMaXx
        </p>
      </div>
    </section>
  );
}
