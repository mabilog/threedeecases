import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import {thinLeft} from 'react-icons-kit/entypo/thinLeft'
import {thinRight} from 'react-icons-kit/entypo/thinRight'
import "./Gallery.css";

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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Siberian_black_tabby_blotched_cat_03.jpg/800px-Siberian_black_tabby_blotched_cat_03.jpg"
        alt="ThreeDeeCase imgae" width={square} height={square}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Siberian_black_tabby_blotched_cat_03.jpg/800px-Siberian_black_tabby_blotched_cat_03.jpg"
        alt="ThreeDeeCase imgae" width={square} height={square}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Siberian_black_tabby_blotched_cat_03.jpg/800px-Siberian_black_tabby_blotched_cat_03.jpg"
        alt="ThreeDeeCase imgae" width={square} height={square}
      />
      </div>
      {/* <button className="right-button"><Icon icon={thinRight}/></button> */}
    </div>
  );
};

export default Gallery;
