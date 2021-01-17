import React from "react";
import "./ProgramHeader.css";
import Logo from "../../assets/Logo.svg";
import app from "../../Firebase/firebase";



function Header({ handleInput }) {
    return (
        <>
            <div>
                <img src={Logo} onClick={() => app.auth().signOut()}  width="14.7%" style={{ position: "relative", left: "4%", marginTop: "1.1%" }} />
                <input className="search" onChange={handleInput} placeholder="Пошук..." style={{}} />
                <h1 style={{
                    border: "none",
                    borderBottom: " 1px solid #6F6F6F",
                    position: "relative", top: "8.2%",
                    left:'3.33%',
                    width: "93.2%"
                }} />
            </div>
        </>
    );
}

export default Header;