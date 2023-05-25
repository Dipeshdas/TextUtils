
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1800);
  }



  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable dark Mode')
  const toggleMode = () => {
    removeBodyClasses();
    if (mode === 'light') {
      setMode('dark');
      setText('Enable Light Mode');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }

  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-success');
  }

  const toggleMode2 = (cls) => {
    setMode(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    showAlert(cls +" Mode Enabled", cls);

  }

  // const togglePrimaryMode = () => {
  //   if (mode === 'dark'||mode === 'light' || mode === 'secondary' || mode === 'sucess' || mode === 'danger' || mode === 'warning' || mode === 'info') {
  //     setMode('primary');
  //     //setText('Enable Light Mode');
  //     document.body.style.backgroundColor = '#a7b0fa';
  //     showAlert("Primary Mode Enabled", "primary");
  //   }
  // }

  // const toggleSecondaryMode = () => {
  //   if (mode === 'light' || mode === 'primary' || mode === 'success' || mode === 'danger' || mode === 'warning' || mode === 'info') {
  //     setMode('secondary');
  //     //setText('Enable Light Mode');
  //     document.body.style.backgroundColor = '#e6e6e6';
  //     showAlert("Secondary Mode Enabled", "secondary");
  //   }
  // }

  // const toggleSuccessMode = () => {
  //   if (mode === 'light' || mode === 'primary' || mode === 'secondary' || mode === 'danger' || mode === 'warning' || mode === 'info') {
  //     setMode('success');
  //     //setText('Enable Light Mode');
  //     document.body.style.backgroundColor = '#cbf5cf';
  //     showAlert("Green Mode Enabled", "success");
  //   }
  // }

  // const toggleDangerMode = () => {
  //   if (mode === 'light' || mode === 'primary' || mode === 'success' || mode === 'secondary' || mode === 'warning' || mode === 'info') {
  //     setMode('danger');
  //     //setText('Enable Light Mode');
  //     document.body.style.backgroundColor = '#facfd5';
  //     showAlert("Danger Mode Enabled", "danger");
  //   }
  // }

  // const toggleWarningMode = () => {
  //   if (mode === 'light' || mode === 'primary' || mode === 'success' || mode === 'danger' || mode === 'secondary' || mode === 'info') {
  //     setMode('warning');
  //     //setText('Enable Light Mode');
  //     document.body.style.backgroundColor = '#fcca79';
  //     showAlert("Warning Mode Enabled", "warning");
  //   }
  // }

  // const toggleInfoMode = () => {
  //   if (mode === 'light' || mode === 'primary' || mode === 'success' || mode === 'danger' || mode === 'warning' || mode === 'secondary') {
  //     setMode('info');
  //     //setText('Enable Light Mode');
  //     document.body.style.backgroundColor = '#c1f6f7';
  //     showAlert("Info Mode Enabled", "info");

  //   }
  // }



  return (
    <>
      <Router>
        <Navbar title="TextUtils" About="About" mode={mode} text={text} toggleMode={toggleMode} toggleMode2={toggleMode2} />

        <Alert alert={alert} />
        {/* <Navbar /> for defaultProps */}
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForms header="Enter Your Text" showAlert={showAlert} mode={mode} />}>
            </Route>
          </Routes>
          {/* <About/> */}
        </div>

      </Router>


    </>
  );
}

export default App;
