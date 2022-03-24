import logo from './logo.svg';
import './App.css';
import Navbar from './Comonents/Navbar';
import TextForm from './Comonents/TextForm';
import React, { useState } from 'react';
// import About from './Comonents/About';


function App() {


  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");

      // this is for to access the html body and give it to style
      document.body.style.backgroundColor = "#04203d";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";

    }
  }



  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toogleMode={toogleMode} />
      {/* <Navbar />   // if i will commnet upper one and use this without passing any props then it will use default props which we passed in defferent fils of components of file. */}

      <div className="container my-3">
        <TextForm heading="Enter your text below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
