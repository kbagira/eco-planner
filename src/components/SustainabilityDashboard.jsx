import React from "react";

function SustainabilityDashboard({ savedTrips }) {
  const totalCarbonSaved = savedTrips.reduce((total, trip) => {
    const carbonSaved = calculateCarbonSaved(trip.selectedMode);
    return total + carbonSaved;
  }, 0);

  const calculateCarbonSaved = (mode) => {
    switch (mode) {
      case "Walking":
      case "Biking":
        return 0; // Экологично, без углеродных выбросов
      case "Public Transport":
        return 10; // Примерное сэкономленное количество CO₂
      case "Carpool":
        return 50;
      case "Private Car":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sustainability Dashboard</h2>

      <h3>Your Trip History</h3>
      <ul>
        {savedTrips.map((trip, index) => (
          <li key={index}>
            <strong>{trip.destination}</strong> - {trip.selectedMode}
          </li>
        ))}
      </ul>

      <h3>Total CO₂ Saved: {totalCarbonSaved} grams</h3>

      <h3>Eco-Goals Progress</h3>
      <p>
        Your current goal is to save 500 grams of CO₂. You're {totalCarbonSaved}{" "}
        grams towards your target!
      </p>

      <h3>Achievements</h3>
      <ul>
        {totalCarbonSaved >= 500 && (
          <li>Eco Warrior - Saved 500 grams of CO₂!</li>
        )}
      </ul>

      <button onClick={() => alert("Sharing achievements...")}>
        Share Achievements
      </button>
    </div>
  );
}

export default SustainabilityDashboard;
