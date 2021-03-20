import React,{useState} from 'react';
import { Link } from 'react-router-dom'


export default function ButtonsTemplate() {
   
    // const [colorButtonPublic, setcolorButtonPublic] = useState("#000000") 
    // const [colorButtonPrivate, setcolorButtonPrivate] = useState("#000000") 
    let colorButtonPublic = "#000000"
    let colorButtonPrivate = "#000000"
    localStorage.setItem("homeType","template")
    if (localStorage.getItem("templateType")=="public"){
        colorButtonPrivate = "#000000"
        colorButtonPublic = "#EF4F59"
    }
    if (localStorage.getItem("templateType")=="private"){
        colorButtonPrivate  = "#EF4F59"
        colorButtonPublic = "#000000"
    }
    return(  
        <>
            <div className="buttons-template">
                <Link to="/home-template">
                <button id="temp-button-prv" className="buttons-template-private" onClick={() =>localStorage.setItem("templateType","private")} style={{color: colorButtonPrivate}}>Мої шаблони</button>
                </Link>
                <Link to="/home-template">
                <button id="temp-button-pub" className="buttons-template-public" onClick={() =>localStorage.setItem("templateType","public")} style={{color: colorButtonPublic}}>Загальні шаблони</button>
                </Link>
            </div>
        </>
    );
    
}
