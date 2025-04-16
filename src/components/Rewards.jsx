// src/components/Rewards.jsx
import React from "react";
import { rewards } from "../rewards";

const Rewards = ({ totalCo2Saved, tripCount }) => {
  // Функция для проверки, какие награды доступны
  const checkRewards = (totalCo2Saved, tripCount) => {
    return rewards.filter((reward) => {
      return (
        (reward.co2Saved && totalCo2Saved >= reward.co2Saved) ||
        (reward.trips && tripCount >= reward.trips)
      );
    });
  };

  const earnedRewards = checkRewards(totalCo2Saved, tripCount);

  return (
    <div className="rewards-container">
      <h2>Your Achievements</h2>
      <ul>
        {earnedRewards.length > 0 ? (
          earnedRewards.map((reward) => (
            <li key={reward.name}>
              <span>{reward.name}</span> - {reward.points} points
            </li>
          ))
        ) : (
          <li>No rewards yet. Keep going!</li>
        )}
      </ul>
    </div>
  );
};

export default Rewards;
