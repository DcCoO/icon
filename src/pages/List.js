import React, { useEffect, useState, Component} from "react";

import { Link } from "react-router-dom";
import {storage} from '../firebase';
import '../style.css';
import SizePopup from '../components/SizePopup';
import { Container, Row , Col } from 'react-bootstrap';
import Voltar from "../images/page2/bt_voltar.png";
import Message from "../images/page3/message3.png";

export default function List() {

    
    var listRef = storage.ref('images');

    const [imageMap, setImageMap] = useState([]);
    const [image, setImage] = useState(null);
    const [boo, setBoo] = useState(false);
    

    async function getList(){
        var x = await listRef.listAll();
        var refs = x._delegate.items;

        var names = [];
        var urls = [];
        var promises = [];

        x.items.forEach(function (itemRef) {
            names.push(itemRef.name);
            promises.push(itemRef.getDownloadURL());            
        }); 
        
        var urls = await Promise.all(promises);
        var listNameImage = [];

        for(var i = 0; i < urls.length; i++) listNameImage.push({name: names[i], image: urls[i]});
        return listNameImage;
    }

    useEffect(async () => {           
        var listNameImage = await getList();
        setImageMap(listNameImage);
    }, [boo]);

    var styleImg = {
        height: 100,
        width: 100
    }

    var styleText = {
        width: 400,
        color: "#000000"
    }

    var buttonText = {
        width: 200,
    }

    const divStyle = {
        color: "#B9CEEB",
        maxHeight: "300px",
        width: "50%",
        overflow: "auto"
    }

    const [sizePopup, setSizePopup] = useState(false);

    const GetPhrase = () => {
        if(global.world == 1) return "Mundo1 - Activity Icon";
        if(global.world == 2) return "Mundo2 - Activity Icon";
        if(global.world == 3) return "Mundo3 - Activity Icon";
        return "";
    }

    const GetSpecs = () => {
        if(global.world == 1) return "269x338";
        if(global.world == 2) return "376x211";
        if(global.world == 3) return "376x211";
        return "";
    }

    const GetExample = () => {
        if(global.world == 1) return "k1_p1_s1.jpg";
        if(global.world == 2) return "j2_p2_s3.jpg";
        if(global.world == 3) return "t3_p5_h2.jpg";
        return "";
    }


    var estilao = { fontSize: 60, color: "#ffffff"};

    const handleChange = e => {
	    if(e.target.files[0]){
		    setImage(e.target.files[0]);
	    }
    }

    const handleUpload = (fileName) => {      
        const uploadTask = storage.ref(`images/${fileName}`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(progress);
        }, 
        (error) => {console.log(error);}, 
        () => {
            storage.ref('images').child(fileName).getDownloadURL().then(url => {
                console.log(url);
                setBoo(!boo);
            })
        })
    }

    return (

        <Container fluid>
        
            <Row className="fileRow1">                
                <Col>
                    <Link to="/file">
                        <img src={Voltar}/>
                    </Link>
                </Col>
                <Col>
                    <div style={estilao}>{GetPhrase()}</div>
                </Col>
            </Row>

            <Row className="fileRow2">                
            
                <Col>
                    <img src={Message}/>
                </Col>
            </Row>

            <Row className="fileRow2">                
                <Col>
                    <p style={{color: "#FF0000", fontSize: 40, fontWeight: 'bold'}}>
                        *Especifica&#231;&#245;es de arquivo: {" "}
                        <span style={{color: "#000000", fontWeight: 'normal'}}>
                            formato jpg, tamanho {GetSpecs()}, exemplo nomenclatura: {GetExample()}
                        </span>
                    </p>
                </Col>
            </Row>

            <Row className="fileRow2"> 
                <br></br><br></br><br></br><br></br>
            </Row>

            <Row className="fileRow2"> 
                <div style={divStyle}>{
                    imageMap.map(item => 

                        <div key={item.name}>
                            <img src={item.image} className="mb-3" style={styleImg}/>                        
                            <span style={styleText}>{item.name} </span> 
                            <input type="file" onChange={handleChange} />
                            <button style={buttonText} name={item.name} onClick={(event)=> {handleUpload(event.target.name)}}>upload</button> 
                            <br/><br/>
                        </div>
                )}
                </div>
            
            </Row>


        </Container>

    
    );

}