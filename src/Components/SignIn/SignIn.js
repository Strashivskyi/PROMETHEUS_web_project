
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Firebase/firebase";
import "../Login/Login1.css";
import "./SignIn.css";
import { AuthContext } from "../../Firebase/AuthSetup/Auth";


function SignIn({ history }) {
    const { currentUser } = useContext(AuthContext);
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                if (currentUser.emailVerified == true) {
                    history.push("/home");
                }
                else {
                    alert("please verifie your email")
                }
            } catch (error) {

            }
        },
        [history]
    );
    if (currentUser && currentUser.emailVerified == true) {
        return <Redirect to="/home" />;
    }

    return(
        <>
    <div className="image-form-division">
        <div className="image"/>
        <div className="form">
            <div className="sign-up-text"> Sign in</div>
            <form className="login_form" onSubmit={handleLogin}>

            <input className="login_text_input" type="text" id="fname" name="email" placeholder="Please enter your email"/>
            <input className="login_text_input" type="text" id="lname" name="password" placeholder="Please enter your password"/>

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
export default withRouter(SignIn);