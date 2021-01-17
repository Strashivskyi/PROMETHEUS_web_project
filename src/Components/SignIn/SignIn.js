import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Firebase/firebase";
import "../Login/Login1.css";
import "./SignIn.css";
import { AuthContext } from "../../Firebase/AuthSetup/Auth";


function SignIn({ history }) {
    localStorage.setItem("child","patient.id")
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
                    
                }
            } catch (error) {
                
            }
        },
        [history]
    );
    if (currentUser && currentUser.emailVerified == true) {
        return <Redirect to="/home" />;
    }else{
        
    }

    return(
        <>
    <div className="image-form-division">
        <div className="image"/>
        <div className="form">
            <div className="sign-up-text"> Увійти на сайт</div>
            <form className="login_form" onSubmit={handleLogin}>
            <input className="login_text_input" type="text" id="fname" name="email" placeholder="Email"/>
            <input className="login_text_input_second" type="text" id="lname" name="password" placeholder="Пароль"/>
            <input className="login_submit" type="submit" value="Увійти"/>
            <div className="login_link_reg">
            <a href="/registration">Зареєстуватися</a>
            </div>
            <div className="login_link_pass">
            <a href="/forgetPassword">Забули пароль?</a>
            </div>
           
            </form>
        </div>
    </div>

    </>
    );
}
export default withRouter(SignIn);