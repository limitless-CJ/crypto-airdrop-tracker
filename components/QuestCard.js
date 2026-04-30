export default function QuestCard({ title, status }) {
  const color = status === "Completed" ? "green" : "orange";
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p style={{ color }}>{status}</p>
    </div>
  );
}
