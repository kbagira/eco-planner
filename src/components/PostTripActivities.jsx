import React from "react";

function PostTripActivities({ tripData, onSaveTrip }) {
  const carbonFootprint = calculateCarbonFootprint(tripData.selectedMode); // Примерная функция для расчета углеродного следа

  const calculateCarbonFootprint = (mode) => {
    switch (mode) {
      case "Walking":
      case "Biking":
        return 0; // Нет углеродного следа
      case "Public Transport":
        return 10; // Примерный углеродный след для общественного транспорта
      case "Carpool":
        return 50;
      case "Private Car":
        return 100;
      default:
        return 0;
    }
  };

  const handleSaveTrip = () => {
    onSaveTrip(tripData);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Post-Trip Summary</h2>
      <p>
        <strong>Destination:</strong> {tripData.destination}
      </p>
      <p>
        <strong>Travel Mode:</strong> {tripData.selectedMode}
      </p>
      <p>
        <strong>Carbon Footprint:</strong> {carbonFootprint} grams of CO₂
      </p>

      {/* Дополнительные предложения для более экологичных альтернатив */}
      <h3>Suggestions for Greener Alternatives</h3>
      <ul>
        <li>
          If you used a car, consider using carpooling next time to reduce your
          footprint.
        </li>
        <li>
          If you used a private car, try public transport or biking for a more
          eco-friendly trip.
        </li>
      </ul>

      {/* Кнопка для сохранения данных */}
      <button onClick={handleSaveTrip}>Save Trip Data</button>
    </div>
  );
}

export default PostTripActivities;
