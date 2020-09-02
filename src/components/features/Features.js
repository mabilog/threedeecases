import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features">Features</div>
      <div className="left">
        <div className="feature-left">
          <h1>Feature 1</h1>
          <h1>Feature 2</h1>
          <h1>Feature 3</h1>
        </div>
      </div>
      <div className="middle"></div>
      <div className="right">
        <div className="feature-right">
          <h1>Feature 4</h1>
          <h1>Feature 5</h1>
          <h1>Feature 6</h1>
        </div>
      </div>
      <div className="phrase">catch phrase</div>
    </div>
  );
};

export default Features;
