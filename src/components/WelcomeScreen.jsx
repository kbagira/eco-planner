import React from "react";

function WelcomeScreen({ onStart }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🌱 Eco-Friendly Travel Planner</h1>
      <p>Plan your trips sustainably and reduce your carbon footprint.</p>
      <button onClick={onStart}>Get Started</button>
    </div>
  );
}

export default WelcomeScreen;
