import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  const settingsButtonRef = useRef();

  let vw = window.innerWidth;
  let vh = window.innerHeight;

  useEffect(() => {
    if (vw >= vh) {
      document.getElementById("settings-button").style.display = "none";
      document.getElementById("desktop-nav").style.display = "flex";
    }
  }, [])

  const handleToggle = () => {
    const container = settingsButtonRef.current;
    container.classList.toggle("change");
    setToggle(!toggle);
  }

  useEffect(() => {
    if (toggle) {
      document.getElementById("mobile-nav").style.display = "flex";
    } else {
      document.getElementById("mobile-nav").style.display = "none";
    }
  }, [toggle])

  return (
    <div className="App">
      <div className="navbar">
        <a className="logo">LOGO</a>
        <div className="desktop-nav">
          <a>Overview</a>
          <a>Features</a>
          <a>Gallery</a>
      </div>
        <div ref={settingsButtonRef} id="settings-button" onClick={handleToggle}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div id="mobile-nav">
          <a>Overview</a>
          <a>Features</a>
          <a>Gallery</a>
      </div>
    </div>
  );
}

//--------------------------- STYLES ---------------------------

export default App;
