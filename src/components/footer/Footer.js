import React, { useEffect, useState, useRef } from "react";
import "./Footer.css";
import { Icon } from 'react-icons-kit'
import {instagram} from 'react-icons-kit/entypo/instagram'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-container">LOGO</div>
            <div className="socials">
                <a href="https://www.instagram.com/threedeecases/" className="instagram"><Icon size={"10%"} icon={instagram} /></a>
            </div>
            <div className="chin">CHIN</div>
        </div>
    )
}

export default Footer;