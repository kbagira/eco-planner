import React, { useState } from "react";

function EcoRewards({ totalCarbonSaved, onRedeemReward }) {
  // Баллы за каждый сэкономленный 100 грамм CO₂
  const pointsEarned = Math.floor(totalCarbonSaved / 100);

  // Список доступных наград
  const rewards = [
    { id: 1, name: "10% off on eco-friendly products", points: 5 },
    { id: 2, name: "Free public transport for a day", points: 10 },
    { id: 3, name: "Free bike rental for 1 day", points: 15 },
    { id: 4, name: "Discount on eco-travel accessories", points: 20 },
  ];

  const [selectedReward, setSelectedReward] = useState(null);

  const handleRedeem = () => {
    if (selectedReward && pointsEarned >= selectedReward.points) {
      onRedeemReward(selectedReward);
      alert(`You have redeemed: ${selectedReward.name}`);
    } else {
      alert("Not enough points for this reward!");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Eco-Rewards</h2>
      <p>You have earned {pointsEarned} points from your eco-friendly trips!</p>

      <h3>Available Rewards:</h3>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            <button
              style={{
                background:
                  selectedReward?.id === reward.id ? "lightgreen" : "",
                padding: "10px",
                margin: "5px",
                border: "1px solid #ddd",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              onClick={() => setSelectedReward(reward)}
            >
              {reward.name} (Requires {reward.points} points)
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={handleRedeem}
        disabled={!selectedReward || pointsEarned < selectedReward.points}
        style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Redeem Reward
      </button>
    </div>
  );
}

export default EcoRewards;
