export default function ProgressBar({ progress, project }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <p>{project} Eligibility: {progress}%</p>
      <div style={{ background: "#ddd", width: "100%", height: "20px" }}>
        <div style={{
          background: "green",
          width: `${progress}%`,
          height: "20px"
        }}></div>
      </div>
    </div>
  );
}
