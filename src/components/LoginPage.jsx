import { useState } from "react";
import { D } from "../tokens";
import { loginUser, registerUser } from "../hooks/useAuth";



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

// const selectStyle = {
//   width: "100%",
//   boxSizing: "border-box",
//   padding: "0.6rem 0.75rem",
//   border: `1.5px solid ${D.border}`,
//   borderRadius: "8px",
//   fontSize: "0.95rem",
//   background: D.surface,
//   color: D.text,
//   outline: "none",
//   fontFamily: "inherit",
//   appearance: "none",
//   cursor: "pointer",
// };

export default function LoginPage({ onAuth }) {
  const [mode, setMode]       = useState("login"); // "login" | "register"
  const [step, setStep]       = useState(1);        // register has 2 steps

  // Register fields
  const [name,    setName]    = useState("");
  const [rollNo,  setRollNo]  = useState("");
  const [dept,    setDept]    = useState("ECE");
  const [pin,     setPin]     = useState("");
  const [pinC,    setPinC]    = useState("");

  // Login fields
  const [lRoll, setLRoll]     = useState("");
  const [lPin,  setLPin]      = useState("");

  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const clearErr = () => setError("");

  // ── REGISTER ────────────────────────────────────────────────
  const handleRegister = async () => {
    setError("");
    if (step === 1) {
      if (!name.trim())   return setError("Please enter your name.");
      if (!rollNo.trim()) return setError("Please enter your roll number.");
      setStep(2);
      return;
    }
    if (pin.length < 4)      return setError("PIN must be at least 4 digits.");
    if (pin !== pinC)        return setError("PINs don't match.");

    setLoading(true);
    const user = await registerUser({ name: name.trim(), rollNo: rollNo.trim().toUpperCase(), dept, pin });
    setLoading(false);
    onAuth(user);
  };

  // ── LOGIN ────────────────────────────────────────────────────
  const handleLogin = () => {
    setError("");
    if (!lRoll.trim()) return setError("Enter your roll number.");
    if (!lPin.trim())  return setError("Enter your PIN.");
    setLoading(true);
    setTimeout(() => {
      const user = loginUser(lRoll.trim(), lPin.trim());
      setLoading(false);
      if (user) {
        onAuth(user);
      } else {
        setError("Roll number or PIN is incorrect.");
      }
    }, 400);
  };

  const onKey = (fn) => (e) => e.key === "Enter" && fn();

  // ── UI ───────────────────────────────────────────────────────
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

      {/* ── Logo / Brand ── */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}></div>
        <h1 style={{ margin: 0, fontSize: "1.7rem", fontWeight: 700, color: D.text, fontFamily: "Georgia, serif" }}>
          Study Vault
        </h1>
        <p style={{ margin: "0.35rem 0 0", color: D.sub, fontSize: "0.85rem" }}>
          ECE · GCE Bargur
        </p>
      </div>

      {/* ── Card ── */}
      <div style={{
        width: "100%",
        maxWidth: "380px",
        background: D.card,
        border: `1px solid ${D.border}`,
        borderRadius: "18px",
        boxShadow: "0 20px 50px rgba(52, 40, 31, 0.12)",
        overflow: "hidden",
      }}>

        {/* Tab bar */}
        <div style={{ display: "flex", borderBottom: `1px solid ${D.border}` }}>
          {["login", "register"].map(m => (
            <button key={m} onClick={() => { setMode(m); setError(""); setStep(1); }} style={{
              flex: 1,
              padding: "0.85rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: "0.88rem",
              background: mode === m ? D.surface : D.card,
              color: mode === m ? D.primary : D.sub,
              borderBottom: mode === m ? `2px solid ${D.primary}` : "2px solid transparent",
              transition: "all 0.18s",
              textTransform: "capitalize",
              letterSpacing: "0.02em",
            }}>
              {m === "login" ? "Sign In" : "Register"}
            </button>
          ))}
        </div>

        <div style={{ padding: "1.5rem" }}>

          {/* ── LOGIN FORM ── */}
          {mode === "login" && (
            <>
              <p style={{ margin: "0 0 1.25rem", color: D.sub, fontSize: "0.85rem" }}>
                Welcome back! Sign in with your roll number and PIN.
              </p>
              {field("Roll Number",
                <input value={lRoll} onChange={e => { setLRoll(e.target.value); clearErr(); }}
                  onKeyDown={onKey(handleLogin)}
                  placeholder="e.g. 22ECE001"
                  style={inputStyle(error && !lRoll)}
                />
              )}
              {field("PIN",
                <input type="password" value={lPin} onChange={e => { setLPin(e.target.value); clearErr(); }}
                  onKeyDown={onKey(handleLogin)}
                  placeholder="Your 4-digit PIN"
                  style={inputStyle(error && !lPin)}
                />
              )}
            </>
          )}

          {/* ── REGISTER FORM ── */}
          {mode === "register" && step === 1 && (
            <>
              <p style={{ margin: "0 0 1.25rem", color: D.sub, fontSize: "0.85rem" }}>
                Create your profile — takes 30 seconds.
              </p>
              {field("Full Name",
                <input value={name} onChange={e => { setName(e.target.value); clearErr(); }}
                  onKeyDown={onKey(handleRegister)}
                  placeholder="e.g. Seshanshree M"
                  style={inputStyle(error && !name)}
                />
              )}
              {field("Roll Number",
                <input value={rollNo} onChange={e => { setRollNo(e.target.value); clearErr(); }}
                  onKeyDown={onKey(handleRegister)}
                  placeholder="e.g. 22ECE001"
                  style={inputStyle(error && !rollNo)}
                />
              )}
              {field("Department",
                <input value={dept} onChange={e => setDept(e.target.value)}
                  placeholder="e.g. ECE"
                  style={inputStyle(false)}
                />
              )}
            </>
          )}

          {mode === "register" && step === 2 && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                <button onClick={() => { setStep(1); setError(""); }} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: D.sub, fontSize: "0.85rem", padding: 0, fontFamily: "inherit",
                }}>
                  ← Back
                </button>
                <span style={{ color: D.sub, fontSize: "0.85rem" }}>Set a 4-digit PIN for <strong style={{ color: D.text }}>{name}</strong></span>
              </div>
              {field("PIN",
                <input type="password" value={pin} onChange={e => { setPin(e.target.value); clearErr(); }}
                  onKeyDown={onKey(handleRegister)}
                  placeholder="Choose a 4-digit PIN"
                  maxLength={8}
                  style={inputStyle(error && pin.length < 4)}
                />
              )}
              {field("Confirm PIN",
                <input type="password" value={pinC} onChange={e => { setPinC(e.target.value); clearErr(); }}
                  onKeyDown={onKey(handleRegister)}
                  placeholder="Re-enter your PIN"
                  maxLength={8}
                  style={inputStyle(error && pin !== pinC)}
                />
              )}
              <p style={{ margin: "-0.25rem 0 1rem", color: D.sub, fontSize: "0.78rem" }}>
                You'll use this PIN to sign in next time.
              </p>
            </>
          )}

          {/* Error */}
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

          {/* Submit */}
          <button
            onClick={mode === "login" ? handleLogin : handleRegister}
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
            {loading
              ? "Please wait…"
              : mode === "login"
                ? "Sign In →"
                : step === 1
                  ? "Next →"
                  : "Create Account →"
            }
          </button>

          <p style={{ textAlign: "center", marginTop: "1rem", color: D.sub, fontSize: "0.8rem" }}>
            {mode === "login" ? "New here? " : "Already registered? "}
            <button onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); setStep(1); }}
              style={{ background: "none", border: "none", cursor: "pointer", color: D.primary, fontWeight: 600, fontSize: "0.8rem", fontFamily: "inherit", padding: 0 }}>
              {mode === "login" ? "Register" : "Sign In"}
            </button>
          </p>
        </div>
      </div>

      <p style={{ marginTop: "1.5rem", color: D.sub, fontSize: "0.75rem", textAlign: "center" }}>
        Study-Vault by iMaXx
      </p>
    </div>
  );
}