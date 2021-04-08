import React, { useEffect, useState, Component} from "react";
import { Link } from "react-router-dom";
import {storage} from '../firebase';
import '../style.css';

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
        height: 40,
        width: 40
    }

    var style

    

    return (
    <>
        {data.map(item => 
                <div class="styleDiv">
                <img src={item.refUrl} style={styleImg}/>
                <span key={item.name}>{item.name} </span> 
                <button class="styleButton">Button</button> 
            </div>)}
    </>

    );

}