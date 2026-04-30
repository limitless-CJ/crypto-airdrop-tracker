export default function handler(req, res) {
  const { wallet } = req.query;

  // Mock detection logic
  const activity = {
    wallet,
    protocols: ["LayerZero", "zkSync"],
    eligibility: "Medium"
  };

  res.status(200).json(activity);
}
