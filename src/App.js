import React from "react";
import Header from "./components/Header";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="CV-Generator" />
      <ApplicationForm />
      <Footer author="Sakurai Kei" year="2022" />
    </div>
  );
}

export default App;
