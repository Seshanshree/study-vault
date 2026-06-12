import { useState } from "react";
import { D } from "../tokens";

export default function BackBtn({ onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "none", border: "none", cursor: "pointer",
        color: hov ? D.primary : D.sub,
        padding: "0.2rem 0", marginBottom: "1rem", fontSize: "0.85rem",
      }}
    >
      Back
    </button>
  );
}
