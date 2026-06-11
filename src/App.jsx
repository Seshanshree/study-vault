import { useState } from "react";

// ═══════════════════════════════════════════════════════════════
//  CONFIG — Edit all passwords and file URLs here
// ═══════════════════════════════════════════════════════════════
const PASS = {
  // ── 6 Main section passwords ──────────────────────────────
  schedule:  "sch001",
  timetable: "tt0002",
  syllabus:  "syl003",
  notes:     "nte004",
  records:   "rec005",
  pyq:       "pyq006",
  // ── Per-subject passwords (sub0 = DSP … sub7 = Optical) ───
  sub0: "dsp001",
  sub1: "vls002",
  sub2: "wco003",
  sub3: "emb004",
  sub4: "cne005",
  sub5: "cts006",
  sub6: "mpc007",
  sub7: "opt008",
};

const SUBJECTS = [
  "Digital Signal Processing",
  "VLSI Design",
  "Wireless Communication",
  "Embedded Systems",
  "Computer Networks",
  "Control Systems",
  "Microprocessors & Controllers",
  "Optical Communication",
];

const LABS = [
  "DSP Lab",
  "VLSI Lab",
  "Embedded Systems Lab",
  "Communication Lab",
];

// ── Replace null with actual image / PDF URLs ─────────────────
const FILES = {
  scheduleImg:  null,            // e.g. "https://drive.google.com/..."
  timetableImg: null,
  syllabusImgs: Array(8).fill(null), // index matches SUBJECTS order
  notes: Array(8).fill(0).map(() => ({
    units:     Array(5).fill(null), // 5 unit PDFs per subject
    internals: Array(3).fill(null), // 3 internal QP PDFs per subject
  })),
  records: Array(4).fill(null),      // 4 lab record PDFs
  pyq:     Array(8).fill(0).map(() => Array(2).fill(null)), // 2 PYQs per subject
};

// ═══════════════════════════════════════════════════════════════
//  DESIGN TOKENS  (Ember Dark — deep charcoal + amber)
// ═══════════════════════════════════════════════════════════════
const D = {
  bg:      "#0a0a0c",
  surface: "#121215",
  card:    "#18181d",
  cardHov: "#1f1f26",
  border:  "#28282f",
  borderHov:"#3a3a45",
  amber:   "#f59e0b",
  amberDim:"#f59e0b28",
  amberLo: "#f59e0b14",
  text:    "#eeeceb",
  sub:     "#7a7a8a",
  danger:  "#ef4444",
  green:   "#22c55e",
};

const SUBJ_COLORS = [
  "#f59e0b","#3b82f6","#8b5cf6","#10b981",
  "#ef4444","#f97316","#ec4899","#06b6d4",
];

// ═══════════════════════════════════════════════════════════════
//  ROOT APP
// ═══════════════════════════════════════════════════════════════
export default function App() {
  const [view,   setView]   = useState("home");
  const [subIdx, setSubIdx] = useState(null);

  // Password modal
  const [modal,    setModal]    = useState(null);
  const [pwInput,  setPwInput]  = useState("");
  const [pwTarget, setPwTarget] = useState("");
  const [pwError,  setPwError]  = useState("");
  const [showPws,  setShowPws]  = useState(false);
  const [shake,    setShake]    = useState(false);

  const askPw = (correctPw, onSuccess) => {
    setPwTarget(correctPw);
    setPwInput("");
    setPwError("");
    setModal({ onSuccess });
  };

  const submitPw = () => {
    if (pwInput.trim() === pwTarget) {
      modal.onSuccess();
      setModal(null);
    } else {
      setPwError("Wrong password — try again.");
      setPwInput("");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const goHome    = () => { setView("home"); setSubIdx(null); };
  const goSection = () => setSubIdx(null);

  // ── HOME ──────────────────────────────────────────────────
  const HOME_ITEMS = [
    { id: "schedule",  label: "Semester Schedule",    icon: "📅", desc: "Full semester plan", pw: PASS.schedule  },
    { id: "timetable", label: "Time Table",            icon: "🗓️",  desc: "Weekly class schedule", pw: PASS.timetable },
    { id: "syllabus",  label: "Syllabus",              icon: "📚", desc: "8 subjects covered", pw: PASS.syllabus  },
    { id: "notes",     label: "Notes",                 icon: "📝", desc: "5 units + internal QPs", pw: PASS.notes     },
    { id: "records",   label: "Lab Record PDFs",       icon: "🔬", desc: "4 lab records", pw: PASS.records   },
    { id: "pyq",       label: "Prev. Year Papers",     icon: "📋", desc: "2 papers per subject", pw: PASS.pyq       },
  ];

  // ── PASSWORD REFERENCE TABLE ───────────────────────────────
  const PW_REF = [
    { label: "Semester Schedule",        pw: PASS.schedule  },
    { label: "Time Table",               pw: PASS.timetable },
    { label: "Syllabus",                 pw: PASS.syllabus  },
    { label: "Notes",                    pw: PASS.notes     },
    { label: "Lab Records",              pw: PASS.records   },
    { label: "Previous Year Papers",     pw: PASS.pyq       },
    ...SUBJECTS.map((s, i) => ({ label: `Subject — ${s}`, pw: PASS[`sub${i}`] })),
  ];

  // ── VIEWS ──────────────────────────────────────────────────
  let content;

  if (view === "home") {
    content = (
      <div>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: D.amberLo,
            border: `1px solid ${D.amber}40`,
            borderRadius: "99px",
            padding: "0.3rem 0.9rem",
            fontSize: "0.78rem",
            color: D.amber,
            fontWeight: 600,
            marginBottom: "1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            ECE · GCE Bargur · Batch 2026–2028
          </div>
          <h1 style={{
            color: D.text, fontSize: "2.4rem", fontWeight: 800,
            margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1,
          }}>
            Study <span style={{ color: D.amber }}>Vault</span>
          </h1>
          <p style={{ color: D.sub, margin: "0.5rem 0 0", fontSize: "0.95rem" }}>
            Semester 6 · All resources, one place
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "0.9rem",
        }}>
          {HOME_ITEMS.map((item, i) => (
            <HomeCard
              key={item.id}
              icon={item.icon}
              label={item.label}
              desc={item.desc}
              num={i + 1}
              onClick={() => askPw(item.pw, () => setView(item.id))}
            />
          ))}
        </div>

        {/* Password reference (toggle) */}
        <div style={{ marginTop: "2.5rem", borderTop: `1px solid ${D.border}`, paddingTop: "1.5rem" }}>
          <button
            onClick={() => setShowPws(p => !p)}
            style={{
              background: "none", border: `1px solid ${D.border}`,
              color: D.sub, cursor: "pointer",
              borderRadius: "8px", padding: "0.5rem 1rem",
              fontSize: "0.82rem", fontWeight: 600,
              display: "flex", alignItems: "center", gap: "0.4rem",
            }}
          >
            🔑 {showPws ? "Hide" : "Show"} all passwords
          </button>

          {showPws && (
            <div style={{
              marginTop: "1rem",
              background: D.card,
              border: `1px solid ${D.border}`,
              borderRadius: "12px",
              overflow: "hidden",
            }}>
              <div style={{
                padding: "0.7rem 1rem",
                background: D.amberLo,
                borderBottom: `1px solid ${D.border}`,
                color: D.amber, fontSize: "0.78rem",
                fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                🔒 Password Reference — Keep this private
              </div>
              <div style={{ padding: "0.8rem" }}>
                {PW_REF.map((r, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.45rem 0.6rem",
                    borderRadius: "6px",
                    borderBottom: i < PW_REF.length - 1 ? `1px solid ${D.border}` : "none",
                  }}>
                    <span style={{ color: D.sub, fontSize: "0.83rem" }}>{r.label}</span>
                    <code style={{
                      background: D.amberLo,
                      color: D.amber,
                      border: `1px solid ${D.amber}30`,
                      borderRadius: "5px",
                      padding: "0.1rem 0.5rem",
                      fontSize: "0.82rem",
                      fontFamily: "monospace",
                    }}>
                      {r.pw}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  else if (view === "schedule") {
    content = (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="📅" title="Semester Schedule" />
        <ImgSlot url={FILES.scheduleImg} label="Semester Schedule" />
      </div>
    );
  }

  else if (view === "timetable") {
    content = (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="🗓️" title="Time Table" />
        <ImgSlot url={FILES.timetableImg} label="Class Time Table" />
      </div>
    );
  }

  else if (view === "syllabus") {
    if (subIdx !== null) {
      content = (
        <div>
          <BackBtn onClick={goSection} />
          <Breadcrumb parts={["Syllabus", SUBJECTS[subIdx]]} />
          <PageTitle icon="📚" title={`${SUBJECTS[subIdx]}`} badge="Syllabus" />
          <ImgSlot url={FILES.syllabusImgs[subIdx]} label={`${SUBJECTS[subIdx]} Syllabus`} />
        </div>
      );
    } else {
      content = (
        <div>
          <BackBtn onClick={goHome} />
          <PageTitle icon="📚" title="Syllabus" />
          <p style={{ color: D.sub, fontSize: "0.88rem", marginBottom: "1.4rem", marginTop: "-0.8rem" }}>
            Choose a subject to view its syllabus image.
          </p>
          <SubjectGrid subjects={SUBJECTS} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
        </div>
      );
    }
  }

  else if (view === "notes") {
    if (subIdx !== null) {
      const d = FILES.notes[subIdx];
      content = (
        <div>
          <BackBtn onClick={goSection} />
          <Breadcrumb parts={["Notes", SUBJECTS[subIdx]]} />
          <PageTitle icon="📝" title={SUBJECTS[subIdx]} badge="Notes" />

          <SLabel>Unit Notes</SLabel>
          <Stack mb="1.5rem">
            {d.units.map((url, ui) =>
              ui === 4
                ? <PdfCard key={ui} title={`Unit 5 — Notes`} comingSoon />
                : <PdfCard key={ui} title={`Unit ${ui + 1} — Notes`} url={url} />
            )}
          </Stack>

          <SLabel>Internal Question Papers</SLabel>
          <Stack>
            {d.internals.map((url, ii) => (
              <PdfCard key={ii} title={`Internal ${ii + 1} — Question Paper`} url={url} />
            ))}
          </Stack>
        </div>
      );
    } else {
      content = (
        <div>
          <BackBtn onClick={goHome} />
          <PageTitle icon="📝" title="Notes" />
          <p style={{ color: D.sub, fontSize: "0.88rem", marginBottom: "1.4rem", marginTop: "-0.8rem" }}>
            Choose a subject to access unit notes and internal question papers.
          </p>
          <SubjectGrid subjects={SUBJECTS} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
        </div>
      );
    }
  }

  else if (view === "records") {
    content = (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="🔬" title="Lab Record PDFs" />
        <p style={{ color: D.sub, fontSize: "0.88rem", marginBottom: "1.4rem", marginTop: "-0.8rem" }}>
          Record PDFs for all 4 labs in Semester 6.
        </p>
        <Stack>
          {LABS.map((lab, i) => (
            <PdfCard key={i} title={`${lab} — Record`} url={FILES.records[i]} />
          ))}
        </Stack>
      </div>
    );
  }

  else if (view === "pyq") {
    if (subIdx !== null) {
      content = (
        <div>
          <BackBtn onClick={goSection} />
          <Breadcrumb parts={["Previous Year Papers", SUBJECTS[subIdx]]} />
          <PageTitle icon="📋" title={SUBJECTS[subIdx]} badge="Prev. Year Papers" />
          <Stack>
            {FILES.pyq[subIdx].map((url, pi) => (
              <PdfCard key={pi} title={`Previous Year Paper — ${pi === 0 ? "Paper 1" : "Paper 2"}`} url={url} />
            ))}
          </Stack>
        </div>
      );
    } else {
      content = (
        <div>
          <BackBtn onClick={goHome} />
          <PageTitle icon="📋" title="Previous Year Papers" />
          <p style={{ color: D.sub, fontSize: "0.88rem", marginBottom: "1.4rem", marginTop: "-0.8rem" }}>
            Choose a subject to view its previous year question papers.
          </p>
          <SubjectGrid subjects={SUBJECTS} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
        </div>
      );
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: D.bg,
      color: D.text,
      fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    }}>
      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: D.surface + "ee",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${D.border}`,
        padding: "0 1.5rem",
        height: "54px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button
          onClick={goHome}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "0.5rem", padding: 0,
          }}
        >
          <span style={{
            width: "28px", height: "28px",
            background: D.amber,
            borderRadius: "7px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.85rem", fontWeight: 900, color: "#000",
          }}>S</span>
          <span style={{ color: D.text, fontWeight: 700, fontSize: "1rem" }}>
            Study<span style={{ color: D.amber }}>Vault</span>
          </span>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{
            background: D.amberLo, border: `1px solid ${D.amber}40`,
            color: D.amber, fontSize: "0.72rem", fontWeight: 700,
            padding: "0.2rem 0.6rem", borderRadius: "99px",
            letterSpacing: "0.04em",
          }}>SEM 6</span>
          <span style={{ color: D.sub, fontSize: "0.8rem" }}>ECE</span>
        </div>
      </header>

      {/* Main */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>
        {content}
      </main>

      {/* Password Modal */}
      {modal && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 300,
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <div style={{
            background: D.card,
            border: `1px solid ${D.border}`,
            borderRadius: "20px",
            padding: "2rem",
            width: "min(92vw, 340px)",
            boxShadow: `0 0 80px ${D.amberDim}, 0 20px 60px rgba(0,0,0,0.6)`,
            transform: shake ? "translateX(-6px)" : "translateX(0)",
            transition: shake ? "transform 0.05s" : "transform 0.1s",
            animation: shake ? "shake 0.5s" : "none",
          }}>
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{
                width: "52px", height: "52px",
                background: D.amberLo,
                border: `2px solid ${D.amber}50`,
                borderRadius: "14px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", margin: "0 auto 0.9rem",
              }}>🔐</div>
              <h3 style={{ color: D.text, margin: 0, fontWeight: 700, fontSize: "1.1rem" }}>
                Password Required
              </h3>
              <p style={{ color: D.sub, fontSize: "0.82rem", margin: "0.4rem 0 0" }}>
                This section is locked. Enter the password to continue.
              </p>
            </div>

            <input
              type="password"
              value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError(""); }}
              onKeyDown={e => e.key === "Enter" && submitPw()}
              placeholder="Enter password"
              autoFocus
              style={{
                width: "100%", boxSizing: "border-box",
                background: D.surface,
                border: `1.5px solid ${pwError ? D.danger : D.border}`,
                borderRadius: "10px",
                padding: "0.75rem 1rem",
                color: D.text, fontSize: "1rem",
                outline: "none", marginBottom: "0.5rem",
                fontFamily: "monospace",
                letterSpacing: "0.1em",
                transition: "border-color 0.15s",
              }}
            />

            {pwError && (
              <div style={{
                color: D.danger, fontSize: "0.8rem",
                textAlign: "center", marginBottom: "0.5rem",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem",
              }}>
                ⚠️ {pwError}
              </div>
            )}

            <div style={{ display: "flex", gap: "0.7rem", marginTop: "0.8rem" }}>
              <button
                onClick={() => setModal(null)}
                style={{
                  flex: 1, padding: "0.7rem",
                  background: "transparent",
                  border: `1px solid ${D.border}`,
                  borderRadius: "10px",
                  color: D.sub, cursor: "pointer",
                  fontWeight: 600, fontSize: "0.88rem",
                }}
              >
                Cancel
              </button>
              <button
                onClick={submitPw}
                style={{
                  flex: 1.5, padding: "0.7rem",
                  background: D.amber,
                  border: "none", borderRadius: "10px",
                  color: "#111", cursor: "pointer",
                  fontWeight: 700, fontSize: "0.88rem",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                }}
              >
                Unlock <span style={{ fontSize: "1rem" }}>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  REUSABLE COMPONENTS
// ═══════════════════════════════════════════════════════════════

function HomeCard({ icon, label, desc, num, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? D.cardHov : D.card,
        border: `1.5px solid ${hov ? D.amber : D.border}`,
        borderRadius: "16px",
        padding: "1.4rem",
        cursor: "pointer",
        transition: "all 0.18s ease",
        boxShadow: hov ? `0 0 28px ${D.amberDim}` : "none",
        display: "flex", flexDirection: "column", gap: "0.55rem",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Subtle corner glow */}
      {hov && (
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "80px", height: "80px",
          background: `radial-gradient(circle at top right, ${D.amberDim}, transparent)`,
          pointerEvents: "none",
        }} />
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{
          fontSize: "1.7rem",
          filter: hov ? "none" : "grayscale(30%)",
          transition: "filter 0.2s",
        }}>{icon}</span>
        <span style={{
          color: D.amber, fontWeight: 800,
          fontSize: "1.05rem",
          opacity: hov ? 0.6 : 0.25,
          fontFamily: "monospace",
          transition: "opacity 0.2s",
        }}>
          {String(num).padStart(2, "0")}
        </span>
      </div>
      <div style={{ color: D.text, fontWeight: 700, fontSize: "1rem" }}>{label}</div>
      <div style={{ color: D.sub, fontSize: "0.79rem" }}>{desc}</div>
      <div style={{
        marginTop: "0.2rem",
        display: "flex", alignItems: "center", gap: "0.35rem",
        color: hov ? D.amber : D.sub,
        fontSize: "0.77rem", fontWeight: 600,
        transition: "color 0.18s",
      }}>
        <span>🔒</span> Password protected
      </div>
    </div>
  );
}

function BackBtn({ onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? D.amberLo : "transparent",
        border: "none", cursor: "pointer",
        color: hov ? D.amber : D.sub,
        fontWeight: 600, fontSize: "0.85rem",
        padding: "0.3rem 0.7rem",
        borderRadius: "7px",
        display: "flex", alignItems: "center", gap: "0.35rem",
        marginBottom: "1rem", transition: "all 0.15s",
      }}
    >
      ← Back
    </button>
  );
}

function Breadcrumb({ parts }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "0.4rem",
      color: D.sub, fontSize: "0.8rem", marginBottom: "0.5rem",
    }}>
      {parts.map((p, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          {i > 0 && <span style={{ opacity: 0.5 }}>›</span>}
          <span style={{ color: i === parts.length - 1 ? D.text : D.sub }}>{p}</span>
        </span>
      ))}
    </div>
  );
}

function PageTitle({ icon, title, badge }) {
  return (
    <div style={{ marginBottom: "1.6rem" }}>
      <h2 style={{
        color: D.text, fontWeight: 800,
        fontSize: "1.5rem", margin: 0,
        display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap",
      }}>
        <span>{icon}</span>
        {title}
        {badge && (
          <span style={{
            background: D.amberLo, border: `1px solid ${D.amber}40`,
            color: D.amber, fontSize: "0.72rem", fontWeight: 700,
            padding: "0.2rem 0.6rem", borderRadius: "99px",
            letterSpacing: "0.04em",
            verticalAlign: "middle",
          }}>{badge}</span>
        )}
      </h2>
      <div style={{ width: "36px", height: "2.5px", background: D.amber, borderRadius: "99px", marginTop: "0.6rem" }} />
    </div>
  );
}

function SLabel({ children }) {
  return (
    <div style={{
      color: D.amber, fontSize: "0.74rem", fontWeight: 700,
      textTransform: "uppercase", letterSpacing: "0.12em",
      marginBottom: "0.6rem",
    }}>
      {children}
    </div>
  );
}

function Stack({ children, mb = "0" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: mb }}>
      {children}
    </div>
  );
}

function SubjectGrid({ subjects, onSelect }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(188px, 1fr))",
      gap: "0.8rem",
    }}>
      {subjects.map((name, i) => (
        <SubjectCard key={i} name={name} idx={i} onClick={() => onSelect(i)} />
      ))}
    </div>
  );
}

function SubjectCard({ name, idx, onClick }) {
  const [hov, setHov] = useState(false);
  const col = SUBJ_COLORS[idx % SUBJ_COLORS.length];
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? col + "18" : D.card,
        border: `1.5px solid ${hov ? col : D.border}`,
        borderRadius: "14px",
        padding: "1.1rem 0.9rem",
        cursor: "pointer",
        transition: "all 0.18s",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "0.65rem",
        textAlign: "center",
      }}
    >
      <div style={{
        width: "40px", height: "40px",
        borderRadius: "50%",
        background: col + "20",
        border: `2px solid ${col}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: col, fontWeight: 800, fontSize: "0.95rem",
        transition: "transform 0.18s",
        transform: hov ? "scale(1.1)" : "scale(1)",
      }}>
        {idx + 1}
      </div>
      <div style={{
        color: hov ? D.text : D.text,
        fontWeight: 600, fontSize: "0.84rem", lineHeight: 1.35,
      }}>{name}</div>
      <div style={{ color: hov ? col : D.sub, fontSize: "0.73rem", transition: "color 0.18s" }}>
        🔒 tap to unlock
      </div>
    </div>
  );
}

function ImgSlot({ url, label }) {
  if (url) {
    return (
      <img
        src={url}
        alt={label}
        style={{
          width: "100%", display: "block",
          borderRadius: "14px",
          border: `1px solid ${D.border}`,
        }}
      />
    );
  }
  return (
    <div style={{
      width: "100%", minHeight: "380px",
      background: D.card,
      border: `2px dashed ${D.border}`,
      borderRadius: "16px",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: "0.75rem", color: D.sub,
      textAlign: "center", padding: "2rem",
      boxSizing: "border-box",
    }}>
      <span style={{ fontSize: "3.5rem", opacity: 0.4 }}>🖼️</span>
      <span style={{ fontWeight: 600, fontSize: "1rem", color: D.text }}>
        Image not set — {label}
      </span>
      <span style={{ fontSize: "0.8rem", maxWidth: "300px", lineHeight: 1.5 }}>
        Upload your image and set its URL in the <code style={{
          background: D.amberLo, color: D.amber,
          padding: "0.1rem 0.4rem", borderRadius: "4px", fontSize: "0.78rem",
        }}>FILES</code> config at the top of this file.
      </span>
    </div>
  );
}

function PdfCard({ title, url, comingSoon }) {
  const [hov, setHov] = useState(false);

  if (comingSoon) {
    return (
      <div style={{
        background: D.card,
        border: `1px solid ${D.border}`,
        borderRadius: "11px",
        padding: "0.9rem 1.1rem",
        display: "flex", alignItems: "center", gap: "1rem",
        opacity: 0.55,
      }}>
        <div style={{
          width: "36px", height: "36px", flexShrink: 0,
          background: "#f59e0b10",
          border: `1px solid #f59e0b30`,
          borderRadius: "9px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem",
        }}>⏳</div>
        <div>
          <div style={{ color: D.text, fontWeight: 600, fontSize: "0.9rem" }}>{title}</div>
          <div style={{ color: D.amber, fontSize: "0.76rem", marginTop: "0.2rem", fontWeight: 600 }}>
            Coming Soon
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        background: hov ? D.cardHov : D.card,
        border: `1px solid ${hov ? D.amber : D.border}`,
        borderRadius: "11px",
        padding: "0.9rem 1.1rem",
        display: "flex", alignItems: "center", gap: "1rem",
        transition: "all 0.15s", cursor: "pointer",
        boxShadow: hov ? `0 2px 16px ${D.amberDim}` : "none",
      }}>
        <div style={{
          width: "36px", height: "36px", flexShrink: 0,
          background: hov ? D.amberDim : D.amberLo,
          border: `1px solid ${D.amber}${hov ? "60" : "25"}`,
          borderRadius: "9px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem",
          transition: "all 0.15s",
        }}>📄</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: D.text, fontWeight: 600, fontSize: "0.9rem" }}>{title}</div>
          <div style={{ color: url ? D.sub : D.danger + "bb", fontSize: "0.76rem", marginTop: "0.2rem" }}>
            {url ? "PDF available — click to open" : "PDF link not added yet"}
          </div>
        </div>
        <span style={{
          color: hov ? D.amber : D.sub,
          fontSize: "1rem", flexShrink: 0,
          transition: "color 0.15s",
        }}>↗</span>
      </div>
    </a>
  );
}
