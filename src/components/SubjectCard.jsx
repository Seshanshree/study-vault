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
        background: D.card,
        border: `1px solid ${hov ? D.primary : D.border}`,
        borderRadius: "6px", padding: "0.8rem",
        cursor: "pointer", textAlign: "center",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{name}</div>
      <div style={{ color: D.sub, fontSize: "0.7rem" }}>tap to unlock</div>
    </div>
  );
}
