import { useState } from "react";
import { PASS, SUBJECTS, LABS, FILES } from "./config";
import { D } from "./tokens";
import { getUser, clearUser } from "./hooks/useAuth";
import LoginPage from "./components/LoginPage";
import HomeCard from "./components/HomeCard";
import BackBtn from "./components/BackBtn";
import Breadcrumb from "./components/Breadcrumb";
import PageTitle from "./components/PageTitle";
import SubjectGrid from "./components/SubjectGrid";
import ImgSlot from "./components/ImgSlot";
import PdfCard from "./components/PdfCard";
import { Portfolio } from "./components/SubjectCard";

export default function App() {
  const [user, setUser] = useState(() => getUser());
  const [view, setView] = useState("home");
  const [subIdx, setSubIdx] = useState(null);
  const [modal, setModal] = useState(null);
  const [pwInput, setPwInput] = useState("");
  const [pwTarget, setPwTarget] = useState("");
  const [pwError, setPwError] = useState("");
  const [showPws, setShowPws] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // ── Auth ────────────────────────────────────────────────────
  if (!user) {
    return <LoginPage onAuth={(u) => setUser(u)} />;
  }

  const handleLogout = () => {
    clearUser();
    setUser(null);
    setView("home");
    setShowUserMenu(false);
  };

  // ── Password gate ────────────────────────────────────────────
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

  const goHome = () => { setView("home"); setSubIdx(null); };
  const goSection = () => setSubIdx(null);
  const openPrevSemNotes = () => {
    window.open("https://notesweb-seshan-vidhya.vercel.app/", "_blank", "noopener,noreferrer");
  };

  const HOME_ITEMS = [
    { id: "schedule", label: "Semester Schedule", icon: "", desc: "Full semester plan" },
    { id: "timetable", label: "Time Table", icon: "", desc: "Weekly class schedule" },
    { id: "syllabus", label: "Syllabus", icon: "", desc: "11 subjects covered" },
    { id: "notes", label: "Notes", icon: "", desc: "5 units + internal QPs" },
    { id: "records", label: "Lab Record PDFs", icon: "", desc: "4 lab records" },
    { id: "pyq", label: "Prev. Year Papers", icon: "", desc: "2 papers per subject" },
  ];

  const PW_REF = [
    ...SUBJECTS.map((s, i) => ({ label: `Subject — ${s}`, pw: PASS[`sub${i}`] })),
  ];

  // Initials avatar
  const initials = (user?.name || "?")
    .split(" ")
    .map(w => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const visibleSubjects = SUBJECTS.slice(0, 6);

  // ── VIEWS ────────────────────────────────────────────────────
  let content;

  if (view === "home") {
    content = (
      <div>
        {/* Personalised greeting */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}>
            <div>
              <h1 style={{ color: D.text, fontSize: "1.6rem", fontWeight: 700, margin: 0, fontFamily: "Georgia, serif" }}>
                Hey, {user.name.split(" ")[0]}
              </h1>
              <p style={{ color: D.sub, margin: "0.25rem 0 0", fontSize: "0.85rem" }}>
                {user.dept} · Section {user.section} · {user.batch}
              </p>
            </div>
            <div style={{
              background: D.primaryLo,
              border: `1px solid ${D.borderHov}`,
              borderRadius: "10px",
              padding: "0.5rem 0.85rem",
              fontSize: "0.8rem",
              color: D.primary,
              fontWeight: 600,
            }}>
              {user.rollNo}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
          {HOME_ITEMS.map((item) => (
            <HomeCard key={item.id} icon={item.icon} label={item.label} desc={item.desc}
              onClick={() => setView(item.id)}
            />
          ))}
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={openPrevSemNotes}
            style={{
              background: D.primary,
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "0.7rem 1rem",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Prev Sem Notes
          </button>
        </div>

        <div style={{ display: "none", marginTop: "2rem", borderTop: `1px solid ${D.border}`, paddingTop: "1.5rem" }}>
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
                    <code style={{ background: D.surface, border: `1px solid ${D.border}`, borderRadius: "3px", padding: "0.1rem 0.4rem", fontSize: "0.75rem", color: "black" }}>
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
        <SubjectGrid subjects={SUBJECTS} onSelect={i => setSubIdx(i)} />
      </div>
    );
  }

  else if (view === "notes") {
    if (subIdx !== null) {
      const d = FILES.notes[subIdx];
      const unitTitles = d.unitTitles ?? d.units.map((_, ui) => `Unit ${ui + 1} — Notes`);
      const internalTitles = d.internalTitles ?? d.internals.map((_, ii) => `Internal ${ii + 1} — Question Paper`);

      content = (
        <div>
          <BackBtn onClick={goSection} />
          <Breadcrumb parts={["Notes", SUBJECTS[subIdx]]} />
          <PageTitle icon="" title={SUBJECTS[subIdx]} />
          <div style={{ fontWeight: 600, marginBottom: "0.5rem", marginTop: "1rem" }}>Unit Notes</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {d.units.map((url, ui) => (
              <PdfCard
                key={ui}
                title={unitTitles[ui] || `Unit ${ui + 1} — Notes`}
                url={url}
                comingSoon={!url}
              />
            ))}
          </div>
          <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Internal Question Papers</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {d.internals.map((url, ii) => (
              <PdfCard key={ii} title={internalTitles[ii] || `Internal ${ii + 1} — Question Paper`} url={url} />
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
          <SubjectGrid subjects={visibleSubjects} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
        </div>
      );
    }
  }

  else if (view === "records") {
    content = (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="" title="Lab Record PDFs" />
        <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>Record PDFs for all 4 labs in Semester 5.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {LABS.map((lab, i) => {
            const record = FILES.records[i] || {};
            return <PdfCard key={i} title={record.title || `${lab} — Record`} url={record.url || ""} />;
          })}
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
          {Array.isArray(FILES.pyq[subIdx])
            ? FILES.pyq[subIdx].map((url, pi) => (
              <PdfCard key={pi} title={`Previous Year Paper — ${pi === 0 ? "Paper 1" : "Paper 2"}`} url={url} />
            ))
            : null}
        </div>
      </div>
    ) : (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="" title="Previous Year Papers" />
        <p style={{ color: D.sub, fontSize: "0.85rem", marginBottom: "1.5rem" }}>Choose a subject to view its previous year question papers.</p>
        <SubjectGrid subjects={visibleSubjects} onSelect={i => askPw(PASS[`sub${i}`], () => setSubIdx(i))} />
      </div>
    );
  }

  else if (view === "developer") {
    content = (
      <div>
        <BackBtn onClick={goHome} />
        <PageTitle icon="" title="Developer" />
        <Portfolio />
      </div>
    );
  }

  return (
    <div
      onClick={() => showUserMenu && setShowUserMenu(false)}
      style={{
        minHeight: "100vh",
        background: `radial-gradient(circle at top, ${D.primaryLo} 0%, ${D.bg} 34%, ${D.bg} 100%)`,
        color: D.text,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        perspective: "1400px",
      }}>

      {/* ── HEADER ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: `linear-gradient(180deg, ${D.surface}, ${D.bg})`,
        borderBottom: `1px solid ${D.border}`,
        padding: "0 1rem", height: "52px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
      }}>
        <button onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", padding: 0, fontWeight: 700, fontSize: "1rem", color: D.text, fontFamily: "Georgia, serif" }}>
          StudyVault
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ fontSize: "0.7rem", background: D.surface, border: `1px solid ${D.border}`, padding: "0.2rem 0.5rem", borderRadius: "4px" }}>SEM 5</span>
          <span style={{ color: D.sub, fontSize: "0.8rem" }}>ECE</span>

          {/* User avatar + dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={(e) => { e.stopPropagation(); setShowUserMenu(p => !p); }}
              title={user.name}
              style={{
                width: "34px", height: "34px",
                borderRadius: "50%",
                background: D.primary,
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                letterSpacing: "0.05em",
                marginLeft: "0.25rem",
                flexShrink: 0,
              }}
            >
              {initials}
            </button>

            {showUserMenu && (
              <div
                onClick={e => e.stopPropagation()}
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: D.card,
                  border: `1px solid ${D.border}`,
                  borderRadius: "12px",
                  boxShadow: "0 12px 32px rgba(52, 40, 31, 0.14)",
                  minWidth: "210px",
                  overflow: "hidden",
                  zIndex: 100,
                }}
              >
                {/* User info block */}
                <div style={{ padding: "1rem", borderBottom: `1px solid ${D.border}`, background: D.surface }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: D.text }}>{user.name}</div>
                  <div style={{ color: D.sub, fontSize: "0.78rem", marginTop: "0.2rem" }}>{user.rollNo} · {user.dept}</div>
                  <div style={{ color: D.sub, fontSize: "0.75rem" }}>Section {user.section} · {user.batch}</div>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "0.7rem 1rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: D.danger,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>⎋</span> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem 1rem" }}>
        {content}
      </main>

      {/* ── PASSWORD MODAL ── */}
      {modal && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <div style={{ background: D.card, border: `1px solid ${D.border}`, borderRadius: "14px", padding: "1.5rem", width: "280px" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>Password Required</h3>
            <p style={{ color: D.sub, fontSize: "0.8rem", marginBottom: "1rem" }}>Enter password to unlock this section.</p>
            <input
              type="password" value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError(""); }}
              onKeyDown={e => e.key === "Enter" && submitPw()}
              placeholder="Enter password" autoFocus
              style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${pwError ? D.danger : D.border}`, borderRadius: "8px", padding: "0.5rem", marginBottom: "0.5rem", fontSize: "0.9rem", backgroundColor: "transparent", color: D.text, fontFamily: "inherit", outline: "none" }}
            />
            {pwError && <div style={{ color: D.danger, fontSize: "0.75rem", marginBottom: "0.5rem" }}>{pwError}</div>}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              <button onClick={() => setModal(null)} style={{ flex: 1, padding: "0.5rem", background: D.surface, border: `1px solid ${D.border}`, borderRadius: "8px", cursor: "pointer", color: D.text, fontFamily: "inherit" }}>Cancel</button>
              <button onClick={submitPw} style={{ flex: 1.5, padding: "0.5rem", background: D.primary, border: "none", borderRadius: "8px", color: "white", cursor: "pointer", fontWeight: 600, fontFamily: "inherit" }}>Unlock</button>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      {view !== "developer" && (
        <footer style={{ borderTop: `1px solid ${D.border}`, marginTop: "2rem", padding: "2rem 1rem", background: D.surface }}>
          <div
            onClick={() => setView("developer")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.2rem",
              border: `1px solid ${D.border}`,
              borderRadius: "12px",
              background: D.card,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontWeight: 600, color: D.text,fontSize: "0.80rem" }}>Meet the Developer <span style={{ fontWeight: 400,fontSize: "0.80rem" }}> (Seshanshree M)</span></div>
            <div style={{ fontSize: "1.3rem", color: D.primary }}>→</div>
          </div>

          <div style={{marginTop: "1rem", marginBottom: "1rem", color: D.sub, fontSize: "0.9rem", lineHeight: 1.6 }}>
            <div>
              Special thanks to my AkkA <br></br> <span style={{ color: D.text, fontWeight: 600 }}>Vidhya R [ECE - III Year] </span> —{' '}
              <a
                href="https://www.linkedin.com/in/vidhya-r-6456a8387 "
                target="_blank"
                rel="noreferrer"
                style={{ color: D.primary, textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </div>
            <div>Thanks to my friends <br></br> <span style={{ color: D.text, fontWeight: 600 }}>Kownisha S [ECE - III Year] </span><br></br><span style={{ color: D.text, fontWeight: 600 }}>Naveena M [ECE - III Year] </span></div>
          </div>
        </footer>
      )}
    </div>
    
  );
}