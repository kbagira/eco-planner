import React, { useState } from "react";

function TripPlanner({ onPlanComplete }) {
  const [form, setForm] = useState({
    destination: "",
    travelTime: "",
    purpose: "",
    selectedMode: "",
  });

  const transportOptions = [
    { mode: "Walking", emission: 0 },
    { mode: "Bike", emission: 0 },
    { mode: "Public Transport", emission: 20 },
    { mode: "Carpool", emission: 40 },
    { mode: "Private Car", emission: 80 },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (mode) => {
    setForm({ ...form, selectedMode: mode });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlanComplete(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Plan Your Trip</h2>
      <input
        name="destination"
        placeholder="Destination"
        onChange={handleChange}
        required
      />
      <br />
      <input
        name="travelTime"
        placeholder="Travel Time"
        type="datetime-local"
        onChange={handleChange}
        required
      />
      <br />
      <input
        name="purpose"
        placeholder="Purpose (optional)"
        onChange={handleChange}
      />
      <br />
      <br />

      <h3>Select Transport Mode</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {transportOptions.map((option) => (
          <li key={option.mode} style={{ marginBottom: "10px" }}>
            <button
              type="button"
              onClick={() => handleSelect(option.mode)}
              style={{
                backgroundColor:
                  form.selectedMode === option.mode ? "#4CAF50" : "#ddd",
                color: form.selectedMode === option.mode ? "#fff" : "#000",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {option.mode} — ~{option.emission}g CO₂/km
            </button>
          </li>
        ))}
      </ul>

      <button type="submit" disabled={!form.selectedMode}>
        Confirm Trip
      </button>
    </form>
  );
}

export default TripPlanner;
