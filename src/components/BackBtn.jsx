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
        border: "1px inset brown",borderRadius:"10px",
        background: "brown", padding: "8px 20px", cursor: "pointer",
        color: hov ? D.primary : "white",
         marginBottom: "1rem", fontSize: "0.85rem",
      }}
    >
      Back
    </button>
  );
}
