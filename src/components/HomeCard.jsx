import { useState } from "react";
import { D } from "../tokens";

export default function HomeCard({ icon, label, desc, onClick, compact = false }) {
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
          ? `linear-gradient(145deg, ${D.cardHov}, ${D.card})`
          : `linear-gradient(145deg, ${D.card}, ${D.surface})`,
        border: `1px solid ${hov ? D.borderHov : D.border}`,
        borderRadius: "14px",
        padding: compact ? "0.65rem 1rem" : "1rem",
        minHeight: compact ? "48px" : undefined,
        display: compact ? "flex" : undefined,
        alignItems: compact ? "center" : undefined,
        gap: compact ? "0.75rem" : undefined,
        cursor: "pointer",
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease",
        transform: hov ? "translateY(-6px) rotateX(5deg) scale(1.01)" : "translateY(0) rotateX(0deg) scale(1)",
        transformStyle: "preserve-3d",
        boxShadow: hov
          ? "0 18px 30px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.85)"
          : "0 10px 18px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.28), transparent 45%)", pointerEvents: "none" }} />
      <div style={{ fontSize: "1.5rem", marginBottom: compact ? 0 : "0.5rem" }}>{icon}</div>
      <div style={{ flex: compact ? 1 : undefined }}>
        <div style={{ fontWeight: 600, marginBottom: compact ? 0 : "0.25rem", whiteSpace: compact ? "nowrap" : undefined }}>{label}</div>
        <div style={{ color: D.sub, fontSize: "0.8rem" }}>{desc}</div>
      </div>
    </div>
  );
}
