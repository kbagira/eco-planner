import React, { useState } from "react";

function SignUp({ onNext }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    preferences: "",
    goals: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Можно временно сохранить в localStorage
    onNext(form); // Передаём данные дальше
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Create Your Eco Profile</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <br />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
      />
      <br />
      <input
        name="preferences"
        placeholder="Preferred Transport Modes"
        onChange={handleChange}
      />
      <br />
      <input
        name="goals"
        placeholder="Sustainability Goals (e.g. CO₂ reduction)"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Continue</button>
    </form>
  );
}

export default SignUp;
