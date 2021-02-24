import React, { useState } from 'react'
import './ProgramHeader.css'
import './Header.css'
import Logo from '../../assets/Logo.svg';
import app from '../../Firebase/firebase'
function signOut() {
    localStorage.setItem("user",'@gmail')
    app.auth().signOut()
    
}
function Header() {

   
    return (
        <>
            <div className="header">
                <img
                    src={Logo}
                    onClick={() => signOut()}
                    width="14.7%"
                    style={{
                        position: 'relative',
                        left: '4%',
                        marginTop: '1.1%',
                        marginBottom: "-20px"
                    }}
                />
                <input
                    className="search"
                    onChange={console.log("qqq")}
                    placeholder="Пошук..."
                />
                <h1
                    style={{
                        border: 'none',
                        borderBottom: ' 1px solid #6F6F6F',
                        position: 'relative',
                        top: '8.2%',
                        left: '3.33%',
                        width: '93.2%',
                    }}
                />
            </div>
        </>
    )
}


export default Header
