import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "../Login/Login1.css";
import "./SignIn.css";

function SignIn() {
    return(
        <>
    <div className="image-form-division">
        <div className="image"/>
        <div className="form">
            <div className="sign-up-text"> Sign in</div>
            <form className="login_form">

            <input className="login_text_input" type="text" id="fname" name="username" placeholder="Username"/>
            <input className="login_text_input" type="text" id="lname" name="password" placeholder="Password"/>
            <div class="remember">
            <input className="login_checkbox" type="checkbox" id="rm" />
            <label for="rm">Remember me</label>
            </div>
            <input className="login_submit" type="submit" value="Login"/>
            <div className="login_links">
            <a href="/registration">Sign up</a>
            <a href="/forgetPassword">Forget password?</a>
            </div>
           
            </form>
        </div>
    </div>

    </>
    );
}
export default SignIn;