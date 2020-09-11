import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import {thinLeft} from 'react-icons-kit/entypo/thinLeft'
import {thinRight} from 'react-icons-kit/entypo/thinRight'
import "./Gallery.css";
import graphicsMount from '../../assets/graphics_mount.png'
import pocket from '../../assets/optional_pocket.png'
import legs from '../../assets/front_bottom_legs.png'
import slates from '../../assets/slates_airflow.png'
import back from '../../assets/back_left_bottom.png'
import motherCloseup from '../../assets/mother_closeup.png'
import sideView from '../../assets/side_view.png'

const Gallery = (props) => {
  const [square, setSquare] = useState();
  useEffect(() => {
    if (props.vw >= props.vh) {
      setSquare(props.vh - 300);
    } else {
      setSquare(props.vw - 100);
    }
  }, []);

  return (
    <div className="gallery-container">
      {/* <button className="left-button"><Icon icon={thinLeft}/></button> */}
      <div className="gallery">
      <img
        src={slates}
        alt="Slates for better airflow" width={square} height={square}
      />
      <img
        src={graphicsMount}
        alt="Graphics mount" width={square} height={square}
      />
      <img
        src={legs}
        alt="Small legs" width={square} height={square}
      />
      <img
        src={sideView}
        alt="Foot props" width={square} height={square}
      />
      <img
        src={motherCloseup}
        alt="Closeup" width={square} height={square}
      />
      <img
        src={pocket}
        alt="Pocket feature" width={square} height={square}
      />
      <img
        src={back}
        alt="Back view" width={square} height={square}
      />
      </div>
      {/* <button className="right-button"><Icon icon={thinRight}/></button> */}
    </div>
  );
};

export default Gallery;
