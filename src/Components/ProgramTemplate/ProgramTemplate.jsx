import React, {useState} from "react";
import './ProgramTemplate.css'
import Delete from "../../assets/delete.svg";
import { Link } from "react-router-dom";
import Item from "./PageComponentTemplate/Item";
import Header from "../Header/Header";
import AHeader from "./PageComponentTemplate/AHeader";

function ProgramTemplate() {
    const [protocols, setProtocols] = useState([]);
    return(
        <>
            <Header/>
            <AHeader/>
            <div className="template_title">
            <div className="templates_string"> Створити програму на основі шаблону серед наведених нище АБО</div>
            <Link className="template_link">Створити пусту програму</Link>
            </div>
            <div id="template" className="template_place">
                <img className="template_img" src={Delete}></img>
                <div className="template_categories">
                <div className="template_program">Програма: </div>
                <div className="template_diagnos">Діагноз: </div>
                <div className="template_age">Вік: </div>
                <div className="template_protocols">Кількість протоколів: </div>
                </div>
            </div>
        </>
    )
}
export default ProgramTemplate