import React from "react";
import {
    HeaderSection,
    Search,
    hr,



} from "./Header.styled";
import Logo from "../../assets/Logo.png";



function Header({handleInput}) {
    return (
        <>
            <HeaderSection>
                <img src={Logo} width="250" style={{marginLeft: "3.2rem", marginTop: "0.5rem"}}/>
                <Search onChange={handleInput} placeholder="Пошук..." style={{}}/>
                 <hr style={{
                     marginLeft: "4rem"
                 }}/>
            </HeaderSection>
        </>
    );
}

export default Header;