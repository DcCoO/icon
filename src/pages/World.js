import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../images/page1/bt_mundo1.png";
import Button2 from "../images/page1/bt_mundo2.png";
import Button3 from "../images/page1/bt_mundo3.png";
import Girl from "../images/page1/mensagem.png";
import { Container, Row , Col } from 'react-bootstrap';
import '../style.css';



export default function World() {

    const navStyle = {
        color: 'white'
	}  
    
    const bg = "BG_1_.png";
    const divStyle = {
        backgroundImage: `url(${bg})`
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
          
        <Container fluid>
            <Row className="worldRow1">
                
                <Col>
                    <img src={Girl}/>
                </Col>
            </Row>

            <Row className="worldRow2">
                <Col>
                    <Link style={navStyle} to="/file" onClick={setWorld1}>
                        <img className="styleButton" src={Button1} />
                    </Link>
                </Col>
                <Col>
                    <Link style={navStyle} to="/file" onClick={setWorld2}>
                        <img className="styleButton" src={Button2} />
                    </Link>
                </Col>
                <Col>
                    <Link style={navStyle} to="/file" onClick={setWorld3}>
                        <img className="styleButton" src={Button3} />
                    </Link>
                </Col>
            </Row>
        </Container>

    );
}