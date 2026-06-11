import SubjectCard from "./SubjectCard";

export default function SubjectGrid({ subjects, onSelect }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: "0.8rem",
    }}>
      {subjects.map((name, i) => (
        <SubjectCard key={i} name={name} onClick={() => onSelect(i)} />
      ))}
    </div>
  );
}
