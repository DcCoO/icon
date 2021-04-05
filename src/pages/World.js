import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../images/page1/bt_mundo1.png";
import Button2 from "../images/page1/bt_mundo2.png";
import Button3 from "../images/page1/bt_mundo3.png";

export default function World() {

    const navStyle = {
        color: 'white'
	}   
    
    const setWorld1 = () => {
        console.log("Setting world to 1");
        global.world = 1;
    }
    const setWorld2 = () => {
        console.log("Setting world to 2");
        global.world = 2;
    }
    const setWorld3 = () => {
        console.log("Setting world to 3");
        global.world = 3;
    }

    return (
        <div>    
            <h3>Tela de Mundo</h3>
            <Link style={navStyle} to="/file">
                <button onClick={setWorld1}><img src={Button1} /></button>
            </Link>
            <Link style={navStyle} to="/file">
                <button onClick={setWorld2}><img src={Button2} /></button>
            </Link>
            <Link style={navStyle} to="/file">
                <button onClick={setWorld3}><img src={Button3} /></button>
            </Link>

        </div>

    );
}