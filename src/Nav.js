import React, { useState } from 'react';
import "./App.css";
import { Link } from "react-router-dom";
import Button1 from "./images/page1/bt_mundo1.png";
import Button2 from "./images/page1/bt_mundo2.png";
import Button3 from "./images/page1/bt_mundo3.png";

export default function Nav() {

    const navStyle = {
        color: 'white'
	}

    

    return (
        <nav>
            <h3>World</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/file">
                    {/* <li>File</li> */}
                    <button><img src={Button1} /></button>
                </Link>
                <Link style={navStyle} to="/file">
                    <button><img src={Button2} /></button>
                </Link>
                <Link style={navStyle} to="/file">
                    <button><img src={Button3} /></button>
                </Link>
            </ul>
        </nav>
    );
}