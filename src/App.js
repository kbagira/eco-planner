import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SignUp from "./components/SignUp";
import TripPlanner from "./components/TripPlanner";
import JourneyTracker from "./components/JourneyTracker";
import PostTripActivities from "./components/PostTripActivities";
import SustainabilityDashboard from "./components/SustainabilityDashboard";
import EcoRewards from "./components/EcoRewards"; // Новый компонент
import "./styles.css";

function App() {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState(null);
  const [tripData, setTripData] = useState(null);
  const [savedTrips, setSavedTrips] = useState([]);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState(0); // Отслеживаем общий сэкономленный CO₂

  const handleStart = () => setStep(1);

  const handleSignUp = (data) => {
    setUserData(data);
    setStep(2);
  };

  const handleTripPlan = (data) => {
    setTripData(data);
    setStep(3);
  };

  const handleStartTracking = () => {
    setStep(4);
  };

  const handleRouteChange = () => {
    setStep(2); // Возврат к планированию маршрута
  };

  const handleSaveTrip = (data) => {
    setSavedTrips((prevTrips) => [...prevTrips, data]); // Добавляем поездку в список сохранённых
    setStep(5); // Переход к следующему этапу

    // Обновляем общее количество сэкономленного CO₂
    const carbonSaved = calculateCarbonSaved(data.selectedMode);
    setTotalCarbonSaved((prevTotal) => prevTotal + carbonSaved);
  };

  const handleRedeemReward = (reward) => {
    alert(`You redeemed: ${reward.name}!`);
    setStep(7); // Переход к следующему этапу
  };

  const handleViewDashboard = () => {
    setStep(6); // Переход к Sustainability Dashboard
  };

  const calculateCarbonSaved = (mode) => {
    switch (mode) {
      case "Walking":
      case "Biking":
        return 0;
      case "Public Transport":
        return 10;
      case "Carpool":
        return 50;
      case "Private Car":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="app-container">
      {step === 0 && <WelcomeScreen onStart={handleStart} />}
      {step === 1 && <SignUp onNext={handleSignUp} />}
      {step === 2 && <TripPlanner onPlanComplete={handleTripPlan} />}
      {step === 3 && tripData && (
        <>
          <h2>Trip Planned!</h2>
          <p>
            <strong>Destination:</strong> {tripData.destination}
          </p>
          <p>
            <strong>Time:</strong> {tripData.travelTime}
          </p>
          <p>
            <strong>Purpose:</strong> {tripData.purpose || "—"}
          </p>
          <p>
            <strong>Transport Mode:</strong> {tripData.selectedMode}
          </p>
          <button onClick={handleStartTracking}>Start Journey</button>
        </>
      )}
      {step === 4 && (
        <JourneyTracker tripData={tripData} onRouteChange={handleRouteChange} />
      )}
      {step === 5 && (
        <PostTripActivities tripData={tripData} onSaveTrip={handleSaveTrip} />
      )}
      {step === 6 && <SustainabilityDashboard savedTrips={savedTrips} />}
      {step === 7 && (
        <EcoRewards
          totalCarbonSaved={totalCarbonSaved}
          onRedeemReward={handleRedeemReward}
        />
      )}

      {step !== 6 && (
        <button onClick={handleViewDashboard} style={{ marginTop: "1rem" }}>
          View Sustainability Dashboard
        </button>
      )}
    </div>
  );
}

export default App;
