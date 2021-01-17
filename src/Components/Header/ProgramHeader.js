import React from "react";
import {
    HeaderSection,
} from "./Header.styled";
import Logo from "../../assets/Logo.png";
import "./ProgramHeader.css"



function ProgramHeader() {
    return (
        <>
            <HeaderSection>
                <div style={{display: "flex"}}>
                <img src={Logo} width="250" style={{marginLeft: "3.2rem", marginTop: "0.5rem"}}/>
                <div style={{marginTop: "27px", marginBottom:"27px"}}>
                <button className="save_button" style={{top: "1rem"}}>Зберегти</button>
                </div>
                </div>
                 <hr style={{
                     marginLeft: "4rem"
                 }}/>
            </HeaderSection>
        </>
    );
}

export default ProgramHeader;