import { useState } from "react";
import { D } from "../tokens";

export default function HomeCard({ icon, label, desc, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? D.cardHov : D.card,
        border: `1px solid ${hov ? D.borderHov : D.border}`,
        borderRadius: "6px", padding: "1rem",
        cursor: "pointer", transition: "all 0.1s",
      }}
    >
      <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{icon}</div>
      <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{label}</div>
      <div style={{ color: D.sub, fontSize: "0.8rem" }}>{desc}</div>
    </div>
  );
}
