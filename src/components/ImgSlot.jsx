import { D } from "../tokens";

export default function ImgSlot({ url, label }) {
  const handleDownload = () => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = label.replace(/\s+/g, "_") + ".jpeg";
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch(() => window.open(url, "_blank"));
  };

  if (url) {
    return (
      <div>
        <img src={url} alt={label}
          style={{ width: "100%", border: `1px solid ${D.border}`, borderRadius: "4px" }} />
        <button onClick={handleDownload} style={{
          marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem",
          background: D.primary, color: "white", border: "none", borderRadius: "4px",
          padding: "0.5rem 1rem", cursor: "pointer", fontSize: "0.85rem", fontWeight: 500,
        }}>
           Download Image
        </button>
      </div>
    );
  }

  return (
    <div style={{
      border: `1px dashed ${D.border}`, borderRadius: "4px",
      padding: "2rem", textAlign: "center", color: D.sub,
    }}>
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>???</div>
      <div>Image not set  {label}</div>
      <div style={{ fontSize: "0.75rem" }}>Add URL in FILES config</div>
    </div>
  );
}
