import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features">Features</h1>
      <div className="left">
        <div className="feature-left">
          <h2>Motherboard mount</h2>
          <h2>Slotted Panels</h2>
          <h2>Alternative Feet Designs</h2>
        </div>
      </div>
      <div className="middle"></div>
      <div className="right">
        <div className="feature-right">
          <h2>Graphics Card Mount</h2>
          <h2>Hard Drive Catty</h2>
          <h2>Pen Holder</h2>
        </div>
      </div>
      <p className="phrase">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>
    </div>
  );
};

export default Features;
