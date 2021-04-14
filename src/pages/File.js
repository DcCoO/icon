import React from "react";
import { Link } from "react-router-dom";

import Girl2 from "../images/page2/mensagem2.png";
import Voltar from "../images/page2/bt_voltar.png";
import Botao from "../images/page2/bt_substituir_ativo.png";
import { Container, Row , Col } from 'react-bootstrap';

import "../style.css"

export default function File() {

    console.log(global.world);

    const goToActivityIcon = () => {
        console.log("EEE");
    }

    const GetPhrase = () => {
        if(global.world == 1) return "Mundo1: RedKids";
        if(global.world == 2) return "Mundo2: RedJunior";
        if(global.world == 3) return "Mundo3: Reds";
        return "";
    }

    var estilao = { fontSize: 60};

    return (
          
        <Container fluid>
            <Row className="fileRow1">                
                <Col>
                    <Link to="/">
                        <img src={Voltar}/>
                    </Link>
                </Col>
                <Col>
                    <div style={estilao}>{GetPhrase()}</div>
                </Col>
            </Row>

            <Row className="fileRow2">                
                <Col>
                    <img src={Girl2}/>
                </Col>
            </Row>

            <Row className="fileRow2">                
                <Col>
                    <Link to="/list" onClick={goToActivityIcon}>
                        <img src={Botao}/>
                    </Link>
                </Col>
                <Col>
                    <img src={Botao}/>
                </Col>
            </Row>

            <Row className="fileRow2">                
                <Col>
                    <img src={Botao}/>
                </Col>
                <Col>
                    <img src={Botao}/>
                </Col>
            </Row>
        </Container>

    );



    return (
        <div>
            <Link to="/">
                Home
            </Link>

            <Link to="/list">
                <button disabled={false} onClick={goToActivityIcon}>Activity Icon</button>
            </Link>
            <button disabled={true} onClick={goToActivityIcon}>stuff 1</button>
            <button disabled={true} onClick={goToActivityIcon}>stuff 2</button>
            <button disabled={true} onClick={goToActivityIcon}>stuff 3</button>


        </div>
    );
}