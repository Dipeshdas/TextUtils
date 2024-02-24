import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from "react";

function App() {
  const [alert, setalert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1800);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-success");
  };

  const toggleMode2 = (cls) => {
    setMode(cls);
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    showAlert(cls + " Mode Enabled", cls);
  };

  return (
    <div>
      <Navbar title="TextUtilzer" toggleMode2={toggleMode2} />

      <Alert alert={alert} />
      {/* <Navbar /> for defaultProps */}
      <div className="container">
        <TextForms header="Enter Your Text" showAlert={showAlert} mode={mode} />
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
