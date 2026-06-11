import { D } from "../tokens";

export default function Breadcrumb({ parts }) {
  return (
    <div style={{ color: D.sub, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
      {parts.join(" � ")}
    </div>
  );
}
