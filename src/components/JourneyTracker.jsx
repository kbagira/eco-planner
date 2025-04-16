import React, { useState, useEffect } from "react";

function JourneyTracker({ tripData, onRouteChange }) {
  const [status, setStatus] = useState("Not started"); // Статус путешествия
  const [updates, setUpdates] = useState({
    transit: "Checking...",
    weather: "Checking...",
    airQuality: "Checking...",
  });

  // Функция для начала путешествия
  const startTracking = () => {
    setStatus("In progress");
    // Эмуляция загрузки данных о текущем статусе маршрута
    setTimeout(() => {
      setUpdates({
        transit: "Bus 21 on time",
        weather: "Sunny, 18°C",
        airQuality: "Good (AQI 42)",
      });
    }, 1000);
  };

  // Эмуляция изменения маршрута (кнопка Change Route)
  const handleRouteChange = () => {
    onRouteChange();
    setStatus("Not started");
    setUpdates({
      transit: "Checking...",
      weather: "Checking...",
      airQuality: "Checking...",
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Journey Tracker</h2>
      <p>
        <strong>Status:</strong> {status}
      </p>

      {/* Кнопка для начала путешествия, если оно ещё не начато */}
      {status === "Not started" && (
        <button
          onClick={startTracking}
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Start Journey
        </button>
      )}

      {/* Если путешествие в процессе, показываем обновления */}
      {status === "In progress" && (
        <>
          <div style={{ marginTop: "1rem" }}>
            <h3>Real-Time Updates</h3>
            <ul>
              <li>
                <strong>Transit:</strong> {updates.transit}
              </li>
              <li>
                <strong>Weather:</strong> {updates.weather}
              </li>
              <li>
                <strong>Air Quality / Traffic:</strong> {updates.airQuality}
              </li>
            </ul>
          </div>

          {/* Кнопка для изменения маршрута */}
          <button
            onClick={handleRouteChange}
            style={{
              marginTop: "1rem",
              padding: "10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Change Route
          </button>
        </>
      )}
    </div>
  );
}

export default JourneyTracker;
