import ProgressBar from "./ProgressBar";
import QuestCard from "./QuestCard";

export default function Dashboard() {
  return (
    <div>
      <h2>Your Airdrop Journey</h2>
      <ProgressBar progress={60} project="zkSync" />
      <QuestCard title="Bridge Funds" status="Completed" />
      <QuestCard title="Swap Tokens" status="Pending" />
    </div>
  );
}
