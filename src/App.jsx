import { useState } from "react";

// ═══════════════════════════════════════════════════════════════
//  CONFIG — Edit all passwords and file URLs here
// ═══════════════════════════════════════════════════════════════
const PASS = {
  schedule:  "sch001",
  timetable: "tt0002",
  syllabus:  "syl003",
  notes:     "nte004",
  records:   "rec005",
  pyq:       "pyq006",
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
  scheduleImg:  null,
  timetableImg: null,
  syllabusImgs: Array(8).fill(null),
  notes: Array(8).fill(0).map(() => ({
    units:     Array(5).fill(null),
    internals: Array(3).fill(null),
  })),
  records: Array(4).fill(null),
  pyq:     Array(8).fill(0).map(() => Array(2).fill(null)),
};

// ═══════════════════════════════════════════════════════════════
//  SIMPLE DESIGN TOKENS — no extra styling
// ═══════════════════════════════════════════════════════════════
const D = {
  bg:      "#ffffff",
  surface: "#f8f9fa",
  card:    "#ffffff",
  cardHov: "#f1f3f5",
  border:  "#dee2e6",
  borderHov:"#adb5bd",
  primary: "#0d6efd",
  primaryDim: "#0d6efd20",
  primaryLo: "#0d6efd10",
  text:    "#212529",
  sub:     "#6c757d",
  danger:  "#dc3545",
  green:   "#198754",
};

// Subject colors but used minimally
const SUBJ_COLORS = [
  "#0d6efd","#6f42c1","#d6336c","#fd7e14",
  "#198754","#0dcaf0","#dc3545","#20c997",
];

// ═══════════════════════════════════════════════════════════════
//  ROOT APP
// ═══════════════════════════════════════════════════════════════
export default function App() {
  const [view,   setView]   = useState("home");
  const [subIdx, setSubIdx] = useState(null);

  const [modal,    setModal]    = useState(null);
  const [pwInput,  setPwInput]  = useState("");
  const [pwTarget, setPwTarget] = useState("");
  const [pwError,  setPwError]  = useState("");
  const [showPws,  setShowPws]  = useState(false);

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

  // ── PASSWORD REFERENCE TABLE (simplified) ─────────────────
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
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ color: D.text, fontSize: "1.8rem", fontWeight: 600, margin: 0 }}>
            Study Vault
          </h1>
          <p style={{ color: D.sub, margin: "0.5rem 0 0", fontSize: "0.9rem" }}>
            ECE · GCE Bargur · Semester 6
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem",
        }}>
          {HOME_ITEMS.map((item) => (
            <HomeCard
              key={item.id}
              icon={item.icon}
              label={item.label}
              desc={item.desc}
              onClick={() => askPw(item.pw, () => setView(item.id))}
            />
          ))}
        </div>

        {/* Password reference */}
        <div style={{ marginTop: "2rem", borderTop: `1px solid ${D.border}`, paddingTop: "1.5rem" }}>
          <button
            onClick={() => setShowPws(p => !p)}
            style={{
              background: "none", border: `1px solid ${D.border}`,
              color: D.text, cursor: "pointer",
              borderRadius: "4px", padding: "0.3rem 0.8rem",
              fontSize: "0.8rem",
            }}
          >
            {showPws ? "Hide" : "Show"} all passwords
          </button>

          {showPws && (
            <div style={{
              marginTop: "1rem",
              border: `1px solid ${D.border}`,
              borderRadius: "4px",
              overflow: "hidden",
            }}>
              <div style={{
                padding: "0.5rem 1rem",
                background: D.surface,
                borderBottom: `1px solid ${D.border}`,
                fontWeight: 600, fontSize: "0.75rem",
              }}>
                Password Reference
              </div>
              <div style={{ padding: "0.5rem" }}>
                {PW_REF.map((r, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.3rem 0.5rem",
                    borderBottom: i < PW_REF.length - 1 ? `1px solid ${D.border}` : "none",
                  }}>
                    <span style={{ color: D.sub, fontSize: "0.8rem" }}>{r.label}</span>
                    <code style={{
                      background: D.surface,
                      border: `1px solid ${D.border}`,
                      borderRadius: "3px",
                      padding: "0.1rem 0.4rem",
                      fontSize: "0.75rem",
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
          <PageTitle icon="📚" title={SUBJECTS[subIdx]} />
          <ImgSlot url={FILES.syllabusImgs[subIdx]} label={`${SUBJECTS[subIdx]} Syllabus`} />
        </div>
      );
    } else {
      content = (
        <div>
          <BackBtn onClick={goHome} />
          <PageTitle icon="📚" title="Syllabus" />
          <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>
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
          <PageTitle icon="📝" title={SUBJECTS[subIdx]} />

          <div style={{ fontWeight: 600, marginBottom: "0.5rem", marginTop: "1rem" }}>Unit Notes</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {d.units.map((url, ui) =>
              ui === 4
                ? <PdfCard key={ui} title={`Unit 5 — Notes`} comingSoon />
                : <PdfCard key={ui} title={`Unit ${ui + 1} — Notes`} url={url} />
            )}
          </div>

          <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Internal Question Papers</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {d.internals.map((url, ii) => (
              <PdfCard key={ii} title={`Internal ${ii + 1} — Question Paper`} url={url} />
            ))}
          </div>
        </div>
      );
    } else {
      content = (
        <div>
          <BackBtn onClick={goHome} />
          <PageTitle icon="📝" title="Notes" />
          <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>
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
        <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>
          Record PDFs for all 4 labs in Semester 6.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {LABS.map((lab, i) => (
            <PdfCard key={i} title={`${lab} — Record`} url={FILES.records[i]} />
          ))}
        </div>
      </div>
    );
  }

  else if (view === "pyq") {
    if (subIdx !== null) {
      content = (
        <div>
          <BackBtn onClick={goSection} />
          <Breadcrumb parts={["Previous Year Papers", SUBJECTS[subIdx]]} />
          <PageTitle icon="📋" title={SUBJECTS[subIdx]} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {FILES.pyq[subIdx].map((url, pi) => (
              <PdfCard key={pi} title={`Previous Year Paper — ${pi === 0 ? "Paper 1" : "Paper 2"}`} url={url} />
            ))}
          </div>
        </div>
      );
    } else {
      content = (
        <div>
          <BackBtn onClick={goHome} />
          <PageTitle icon="📋" title="Previous Year Papers" />
          <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>
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
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    }}>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: D.surface,
        borderBottom: `1px solid ${D.border}`,
        padding: "0 1rem",
        height: "48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button
          onClick={goHome}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "0.5rem", padding: 0,
            fontWeight: 600, fontSize: "1rem", color: D.text,
          }}
        >
          StudyVault
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.7rem", background: D.surface, border: `1px solid ${D.border}`, padding: "0.2rem 0.5rem", borderRadius: "4px" }}>SEM 6</span>
          <span style={{ color: D.sub, fontSize: "0.8rem" }}>ECE</span>
        </div>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem 1rem" }}>
        {content}
      </main>

      {/* Password Modal - simple version */}
      {modal && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 300,
            background: "rgba(0,0,0,0.7)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <div style={{
            background: D.card,
            border: `1px solid ${D.border}`,
            borderRadius: "8px",
            padding: "1.5rem",
            width: "280px",
          }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>Password Required</h3>
            <p style={{ color: D.sub, fontSize: "0.8rem", marginBottom: "1rem" }}>
              Enter password to unlock this section.
            </p>

            <input
              type="password"
              value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError(""); }}
              onKeyDown={e => e.key === "Enter" && submitPw()}
              placeholder="Enter password"
              autoFocus
              style={{
                width: "100%", boxSizing: "border-box",
                border: `1px solid ${pwError ? D.danger : D.border}`,
                borderRadius: "4px",
                padding: "0.5rem",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
              }}
            />

            {pwError && (
              <div style={{ color: D.danger, fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                {pwError}
              </div>
            )}

            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              <button
                onClick={() => setModal(null)}
                style={{
                  flex: 1, padding: "0.5rem",
                  background: D.surface,
                  border: `1px solid ${D.border}`,
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={submitPw}
                style={{
                  flex: 1.5, padding: "0.5rem",
                  background: D.primary,
                  border: "none", borderRadius: "4px",
                  color: "white", cursor: "pointer",
                }}
              >
                Unlock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  SIMPLE REUSABLE COMPONENTS
// ═══════════════════════════════════════════════════════════════

function HomeCard({ icon, label, desc, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? D.cardHov : D.card,
        border: `1px solid ${hov ? D.borderHov : D.border}`,
        borderRadius: "6px",
        padding: "1rem",
        cursor: "pointer",
        transition: "all 0.1s",
      }}
    >
      <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{icon}</div>
      <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{label}</div>
      <div style={{ color: D.sub, fontSize: "0.8rem" }}>{desc}</div>
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
        background: "none", border: "none", cursor: "pointer",
        color: hov ? D.primary : D.sub,
        padding: "0.2rem 0",
        marginBottom: "1rem",
        fontSize: "0.85rem",
      }}
    >
      ← Back
    </button>
  );
}

function Breadcrumb({ parts }) {
  return (
    <div style={{ color: D.sub, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
      {parts.join(" › ")}
    </div>
  );
}

function PageTitle({ icon, title }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: 0 }}>
        {icon} {title}
      </h2>
      <div style={{ width: "30px", height: "2px", background: D.primary, marginTop: "0.3rem" }} />
    </div>
  );
}

function SubjectGrid({ subjects, onSelect }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
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
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: D.card,
        border: `1px solid ${hov ? D.primary : D.border}`,
        borderRadius: "6px",
        padding: "0.8rem",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{name}</div>
      <div style={{ color: D.sub, fontSize: "0.7rem" }}>🔒 tap to unlock</div>
    </div>
  );
}

function ImgSlot({ url, label }) {
  if (url) {
    return <img src={url} alt={label} style={{ width: "100%", border: `1px solid ${D.border}`, borderRadius: "4px" }} />;
  }
  return (
    <div style={{
      border: `1px dashed ${D.border}`,
      borderRadius: "4px",
      padding: "2rem",
      textAlign: "center",
      color: D.sub,
    }}>
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🖼️</div>
      <div>Image not set — {label}</div>
      <div style={{ fontSize: "0.75rem" }}>Add URL in FILES config</div>
    </div>
  );
}

function PdfCard({ title, url, comingSoon }) {
  const [hov, setHov] = useState(false);

  if (comingSoon) {
    return (
      <div style={{
        border: `1px solid ${D.border}`,
        borderRadius: "4px",
        padding: "0.7rem",
        opacity: 0.6,
      }}>
        <div style={{ fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: "0.7rem", color: D.primary }}>Coming Soon</div>
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
        border: `1px solid ${hov ? D.primary : D.border}`,
        borderRadius: "4px",
        padding: "0.7rem",
        background: hov ? D.cardHov : D.card,
        cursor: url ? "pointer" : "default",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 500 }}>{title}</span>
          <span style={{ color: D.sub }}>📄</span>
        </div>
        <div style={{ fontSize: "0.7rem", color: url ? D.sub : D.danger, marginTop: "0.2rem" }}>
          {url ? "PDF available — click to open" : "PDF link not added"}
        </div>
      </div>
    </a>
  );
}