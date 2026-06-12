import { useState } from "react";
import { D } from "../tokens";

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
