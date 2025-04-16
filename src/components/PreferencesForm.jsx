import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SignUp from "./components/SignUp";

function App() {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState(null);

  const handleStart = () => setStep(1);

  const handleSignUp = (data) => {
    setUserData(data);
    setStep(2);
  };

  return (
    <div>
      {step === 0 && <WelcomeScreen onStart={handleStart} />}
      {step === 1 && <SignUp onNext={handleSignUp} />}
      {step === 2 && <p>Welcome, {userData.name}! (Here goes next step...)</p>}
    </div>
  );
}

export default App;
