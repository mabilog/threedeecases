import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing/Landing";
import Overview from "./components/overview/Overview";
import Features from "./components/features/Features";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

function App() {
  const [toggle, setToggle] = useState(false);
  const settingsButtonRef = useRef();

  let vw = window.innerWidth;
  let vh = window.innerHeight;

  useEffect(() => {
    if (vw >= vh) {
      document.getElementById("settings-button").style.display = "none";
      document.getElementById("desktop-nav").style.display = "flex";
    } else {
      document.getElementById("desktop-nav").style.display = "none";
    }
  }, []);

  const handleToggle = () => {
    const container = settingsButtonRef.current;
    container.classList.toggle("change");
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.getElementById("mobile-nav").style.display = "flex";
    } else {
      document.getElementById("mobile-nav").style.display = "none";
    }
  }, [toggle]);

  return (
    <div className="App">
      <div className="navbar">
        <a className="logo">LOGO</a>
        <div id="desktop-nav">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#gallery">Gallery</a>
          <a>Pre-Order</a>
        </div>
        <div
          ref={settingsButtonRef}
          id="settings-button"
          onClick={handleToggle}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div id="mobile-nav">
        <a href="#overview">Overview</a>
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a>Pre-Order</a>
      </div>

      <div id="landing">
        <Landing />
      </div>
      <div id="overview">
        <Overview />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="gallery">
        <Gallery vw={vw} vh={vh}/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
}

//--------------------------- STYLES ---------------------------

export default App;
