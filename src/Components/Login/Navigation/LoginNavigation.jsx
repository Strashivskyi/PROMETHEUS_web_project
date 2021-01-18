import React from "react";
import "../SignUpForm1.css";
import "fontsource-dm-sans"
import { Link } from "react-router-dom";
function LoginNavigation() {
    return (
        <nav className="number-buttons">
            <Link to="/registration"><button className="number-button">1</button></Link>
            <div className="line-between-number-buttons" />
            <Link to="/registration/signup2"><button className="number-button">2</button></Link>
            <div className="line-between-number-buttons" />
            <Link to="/registration/signup3"><button className="number-button">3</button></Link>
            <div className="line-between-number-buttons" />
            <Link to="/registration/signup4"><button className="number-button">4</button></Link>
        </nav>

    )
}
export default LoginNavigation