import React, { useEffect, useState, Component} from "react";
import { Link } from "react-router-dom";
import {storage} from '../firebase';
import '../style.css';
import SizePopup from '../components/SizePopup';

export default function List() {

    
    var listRef = storage.ref('images');
    const [data, setData] = useState([]);
    const [refsUrls,setRefsUrls] = useState([]);

    async function getList(){
        var x = await listRef.listAll();

        var refs = x._delegate.items;

        //var refsUrls = [];

        x.items.forEach(function (itemRef) {

            itemRef.getDownloadURL().then(function (url) {
                console.log(url);
                //refsUrls.push(url);
                setRefsUrls(refsUrls.push(url));


            }).catch(function (error) {
                // Handle any errors
            });
        });

        setTimeout(() => {
            for (let i = 0; i < refs.length; i++){
                refs[i] = {...refs[i], name: refs[i].name, refUrl: refsUrls[i]}
            }
            setData(refs);
        }, 1000);     
        
    }


    useEffect(() => {
            getList();
    }, []);

    console.log(data);

    var styleImg = {
        height: 50,
        width: 50
    }

    var styleText = {
        width: 150
    }


    const bg = "BG_1_.png";
    const divStyle = {
        backgroundImage: `url(${bg})`
    }

    const [sizePopup, setSizePopup] = useState(false);

    

    return (
    <div>
        <div style={divStyle}>
            {data.map(item => 
                    <div class="styleDiv">
                    <img src={item.refUrl} style={styleImg}/>
                    <span key={item.name} style={styleText}>{item.name} </span> 
                    <button class="styleButton" onClick={()=>setSizePopup(true)}>escolher arquivo</button> 
                    <button class="styleButton">substituir</button> 
                </div>)}
        </div>
        <SizePopup trigger={sizePopup} setTrigger={setSizePopup}>
	        <h3>Erro</h3>
	        <p>tamanho de imagem incorreto</p>
        </SizePopup>
    </div>

    );

}