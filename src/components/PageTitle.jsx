import { D } from "../tokens";

export default function PageTitle({ icon, title }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: 0 }}>
        {icon} {title}
      </h2>
      <div style={{ width: "30px", height: "2px", background: D.primary, marginTop: "0.3rem" }} />
    </div>
  );
}
