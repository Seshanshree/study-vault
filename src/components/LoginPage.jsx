import { useState } from "react";
import { D } from "../tokens";
import { registerUser } from "../hooks/useAuth";

const field = (label, node) => (
  <div style={{ marginBottom: "1rem" }}>
    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: D.sub, marginBottom: "0.35rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
      {label}
    </label>
    {node}
  </div>
);

const inputStyle = (err) => ({
  width: "100%",
  boxSizing: "border-box",
  padding: "0.6rem 0.75rem",
  border: `1.5px solid ${err ? D.danger : D.border}`,
  borderRadius: "8px",
  fontSize: "0.95rem",
  background: D.surface,
  color: D.text,
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.18s",
});

export default function LoginPage({ onAuth }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const clearErr = () => setError("");

  const handleRegister = async () => {
    setError("");
    if (!name.trim()) return setError("Please enter your name.");

    setLoading(true);
    const user = await registerUser({
      name: name.trim(),
    });
    setLoading(false);
    onAuth(user);
  };

  const onKey = (fn) => (e) => e.key === "Enter" && fn();

  return (
    <div style={{
      minHeight: "100vh",
      background: `radial-gradient(circle at top, ${D.primaryLo} 0%, ${D.bg} 40%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem 1rem",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    }}>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ margin: 0, fontSize: "1.7rem", fontWeight: 700, color: D.text, fontFamily: "Georgia, serif" }}>
          Study Vault
        </h1>
        <p style={{ margin: "0.35rem 0 0", color: D.sub, fontSize: "0.85rem" }}>
          ECE · GCE Bargur
        </p>
      </div>

      <div style={{
        width: "100%",
        maxWidth: "380px",
        background: D.card,
        border: `1px solid ${D.border}`,
        borderRadius: "18px",
        boxShadow: "0 20px 50px rgba(52, 40, 31, 0.12)",
        overflow: "hidden",
      }}>
        <div style={{ padding: "1.5rem" }}>
          <p style={{ margin: "0 0 1.25rem", color: D.sub, fontSize: "0.85rem" }}>
            Create your profile with your name.
          </p>

          {field("Full Name",
            <input value={name} onChange={e => { setName(e.target.value); clearErr(); }}
              onKeyDown={onKey(handleRegister)}
              placeholder="e.g. Seshanshree M"
              style={inputStyle(error && !name)}
            />
          )}

          {error && (
            <div style={{
              background: `${D.danger}12`,
              border: `1px solid ${D.danger}40`,
              borderRadius: "8px",
              padding: "0.5rem 0.75rem",
              color: D.danger,
              fontSize: "0.82rem",
              marginBottom: "1rem",
            }}>
              {error}
            </div>
          )}

          <button
            onClick={handleRegister}
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: loading ? D.border : D.primary,
              color: loading ? D.sub : "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              transition: "background 0.18s, transform 0.1s",
              transform: loading ? "scale(0.98)" : "scale(1)",
            }}
          >
            {loading ? "Please wait…" : "Create Account →"}
          </button>
        </div>
      </div>

      <p style={{ marginTop: "1.5rem", color: D.sub, fontSize: "0.75rem", textAlign: "center" }}>
        Study-Vault by iMaXx
      </p>
    </div>
  );
}
