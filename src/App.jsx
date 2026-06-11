import { useState } from "react";
import { PASS, SUBJECTS, LABS, FILES } from "./config";
import { D } from "./tokens";
import HomeCard    from "./components/HomeCard";
import BackBtn     from "./components/BackBtn";
import Breadcrumb  from "./components/Breadcrumb";
import PageTitle   from "./components/PageTitle";
import SubjectGrid from "./components/SubjectGrid";
import ImgSlot     from "./components/ImgSlot";
import PdfCard     from "./components/PdfCard";

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

  const HOME_ITEMS = [
    { id: "schedule",  label: "Semester Schedule",  icon: "", desc: "Full semester plan",          pw: PASS.schedule  },
    { id: "timetable", label: "Time Table",          icon: "", desc: "Weekly class schedule",       pw: PASS.timetable },
    { id: "syllabus",  label: "Syllabus",            icon: "", desc: "8 subjects covered",          pw: PASS.syllabus  },
    { id: "notes",     label: "Notes",               icon: "", desc: "5 units + internal QPs",      pw: PASS.notes     },
    { id: "records",   label: "Lab Record PDFs",     icon: "", desc: "4 lab records",               pw: PASS.records   },
    { id: "pyq",       label: "Prev. Year Papers",   icon: "", desc: "2 papers per subject",        pw: PASS.pyq       },
  ];

  const PW_REF = [
    { label: "Semester Schedule",    pw: PASS.schedule  },
    { label: "Time Table",           pw: PASS.timetable },
    { label: "Syllabus",             pw: PASS.syllabus  },
    { label: "Notes",                pw: PASS.notes     },
    { label: "Lab Records",          pw: PASS.records   },
    { label: "Previous Year Papers", pw: PASS.pyq       },
    ...SUBJECTS.map((s, i) => ({ label: `Subject — ${s}`, pw: PASS[`sub${i}`] })),
  ];

  // ── VIEWS ────────────────────────────────────────────────────
  let content;

  if (view === "home") {
    content = (
      <div>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ color: D.text, fontSize: "1.8rem", fontWeight: 600, margin: 0 }}>
            Study Vault
          </h1>
          <p style={{ color: D.sub, margin: "0.5rem 0 0", fontSize: "0.9rem" }}>
            ECE · GCE Bargur · Semester 5
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
          {HOME_ITEMS.map((item) => (
            <HomeCard key={item.id} icon={item.icon} label={item.label} desc={item.desc}
              onClick={() => askPw(item.pw, () => setView(item.id))}
            />
          ))}
        </div>

        <div style={{ marginTop: "2rem", borderTop: `1px solid ${D.border}`, paddingTop: "1.5rem" }}>
          <button
            onClick={() => setShowPws(p => !p)}
            style={{
              background: "none", border: `1px solid ${D.border}`,
              color: D.text, cursor: "pointer",
              borderRadius: "4px", padding: "0.3rem 0.8rem", fontSize: "0.8rem",
            }}
          >
            {showPws ? "Hide" : "Show"} all passwords
          </button>

          {showPws && (
            <div style={{ marginTop: "1rem", border: `1px solid ${D.border}`, borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ padding: "0.5rem 1rem", background: D.surface, borderBottom: `1px solid ${D.border}`, fontWeight: 600, fontSize: "0.75rem" }}>
                Password Reference
              </div>
              <div style={{ padding: "0.5rem" }}>
                {PW_REF.map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.3rem 0.5rem", borderBottom: i < PW_REF.length - 1 ? `1px solid ${D.border}` : "none" }}>
                    <span style={{ color: D.sub, fontSize: "0.8rem" }}>{r.label}</span>
                    <code style={{ background: D.surface, border: `1px solid ${D.border}`, borderRadius: "3px", padding: "0.1rem 0.4rem", fontSize: "0.75rem" }}>
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
        <PageTitle icon="" title="Semester Schedule" />
        <ImgSlot url={FILES.scheduleImg} label="Semester Schedule" />
      </div>
    );
  }

  else if (view === "timetable") {
    content = (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="" title="Time Table" />
        <ImgSlot url={FILES.timetableImg} label="Class Time Table" />
      </div>
    );
  }

  else if (view === "syllabus") {
    content = subIdx !== null ? (
      <div>
        <BackBtn onClick={goSection} />
        <Breadcrumb parts={["Syllabus", SUBJECTS[subIdx]]} />
        <PageTitle icon="" title={SUBJECTS[subIdx]} />
        <ImgSlot url={FILES.syllabusImgs[subIdx]} label={`${SUBJECTS[subIdx]} Syllabus`} />
      </div>
    ) : (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="" title="Syllabus" />
        <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>Choose a subject to view its syllabus image.</p>
        <SubjectGrid subjects={SUBJECTS} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
      </div>
    );
  }

  else if (view === "notes") {
    if (subIdx !== null) {
      const d = FILES.notes[subIdx];
      content = (
        <div>
          <BackBtn onClick={goSection} />
          <Breadcrumb parts={["Notes", SUBJECTS[subIdx]]} />
          <PageTitle icon="" title={SUBJECTS[subIdx]} />
          <div style={{ fontWeight: 600, marginBottom: "0.5rem", marginTop: "1rem" }}>Unit Notes</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {d.units.map((url, ui) =>
              ui === 4
                ? <PdfCard key={ui} title="Unit 5 — Notes" comingSoon />
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
          <PageTitle icon="" title="Notes" />
          <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>Choose a subject to access unit notes and internal question papers.</p>
          <SubjectGrid subjects={SUBJECTS} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
        </div>
      );
    }
  }

  else if (view === "records") {
    content = (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="" title="Lab Record PDFs" />
        <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>Record PDFs for all 4 labs in Semester 6.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {LABS.map((lab, i) => (
            <PdfCard key={i} title={`${lab} — Record`} url={FILES.records[i]} />
          ))}
        </div>
      </div>
    );
  }

  else if (view === "pyq") {
    content = subIdx !== null ? (
      <div>
        <BackBtn onClick={goSection} />
        <Breadcrumb parts={["Previous Year Papers", SUBJECTS[subIdx]]} />
        <PageTitle icon="" title={SUBJECTS[subIdx]} />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {FILES.pyq[subIdx].map((url, pi) => (
            <PdfCard key={pi} title={`Previous Year Paper — ${pi === 0 ? "Paper 1" : "Paper 2"}`} url={url} />
          ))}
        </div>
      </div>
    ) : (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="" title="Previous Year Papers" />
        <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>Choose a subject to view its previous year question papers.</p>
        <SubjectGrid subjects={SUBJECTS} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh", background: D.bg, color: D.text,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    }}>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: D.surface, borderBottom: `1px solid ${D.border}`,
        padding: "0 1rem", height: "48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", padding: 0, fontWeight: 600, fontSize: "1rem", color: D.text }}>
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

      {modal && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <div style={{ background: D.card, border: `1px solid ${D.border}`, borderRadius: "8px", padding: "1.5rem", width: "280px" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>Password Required</h3>
            <p style={{ color: D.sub, fontSize: "0.8rem", marginBottom: "1rem" }}>Enter password to unlock this section.</p>
            <input
              type="password" value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError(""); }}
              onKeyDown={e => e.key === "Enter" && submitPw()}
              placeholder="Enter password" autoFocus
              style={{ width: "100%", boxSizing: "border-box", border: `1px solid ${pwError ? D.danger : D.border}`, borderRadius: "4px", padding: "0.5rem", marginBottom: "0.5rem", fontSize: "0.9rem", backgroundColor: "transparent" }}
            />
            {pwError && <div style={{ color: D.danger, fontSize: "0.75rem", marginBottom: "0.5rem" }}>{pwError}</div>}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              <button onClick={() => setModal(null)} style={{ flex: 1, padding: "0.5rem", background: D.danger, border: `1px solid ${D.border}`, borderRadius: "4px", cursor: "pointer", color: D.bg }}>Cancel</button>
              <button onClick={submitPw} style={{ flex: 1.5, padding: "0.5rem", background: D.primary, border: "none", borderRadius: "4px", color: "white", cursor: "pointer" }}>Unlock</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}