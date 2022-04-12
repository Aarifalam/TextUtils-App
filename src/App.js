// import logo from './logo.svg';
import './App.css';
import Navbar from './Comonents/Navbar';
import TextForm from './Comonents/TextForm';
import React, { useState } from 'react';
import Alert from './Comonents/Alert';
import About from './Comonents/About';

// Routs
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  // this is for Dark mode and light mode function 
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");

      // this is for alert msg
      showAlert("Dark mode has been enabled", "success");

      // this is for to access the html body and give it to style
      document.body.style.backgroundColor = "#04203d";


    }
    else {
      setMode("light");

      // this is for alert msg
      showAlert("Light mode has been enabled", "success");

      document.body.style.backgroundColor = "white";
    }
  }


  // this is for Aleart mode
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    // this is for Alert timing
    setTimeout(() => {
      setAlert(null)
    }, 2000);


  }




  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toogleMode={toogleMode} />
        {/* <Navbar />   // if i will commnet upper one and use this without passing any props then it will use default props which we passed in defferent fils of components of file. */}

        <Alert alert={alert} />

        <div className="container my-3">
          {/* <TextForm heading="Enter your text below" mode={mode} showAlert={showAlert} />
          <About /> */}

          <Routes>

            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Try TextUtils 	&#128126; - And Play With Your Words" />} />

            <Route path="/about" element={<About mode={mode} />} />


          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
