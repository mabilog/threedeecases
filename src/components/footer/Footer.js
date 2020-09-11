import React, { useEffect, useState, useRef } from "react";
import "./Footer.css";
import { Icon } from 'react-icons-kit'
import {instagram} from 'react-icons-kit/entypo/instagram'

const Footer = () => {
    return (
        <div className="footer-container">
            <p className="logo-container">ThreeDeeCases</p>
            <div className="socials">
                <a href="https://www.instagram.com/threedeecases/" className="instagram"><Icon size={"10%"} icon={instagram} /></a>
            </div>
            <a className="chin">Kickstarter</a>
        </div>
    )
}

export default Footer;