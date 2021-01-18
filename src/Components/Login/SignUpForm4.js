import React, { useCallback } from "react";
import "./SignUpForm1.css";
import LoginNavigation from "./Navigation/LoginNavigation";
import "fontsource-dm-sans"
import "./SignUpForm4.css"
import { withRouter } from "react-router";
import app from "../../Firebase/firebase";

function SignUpForm4({ history }) {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password,passwordCheck,phone} = event.target.elements;
        try {
            if (password.value===passwordCheck.value){
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            await app.auth().currentUser.sendEmailVerification()
            localStorage.setItem("phoneNumber",phone)
            history.push("/");}
            else{
                alert("Будь ласка, перевірте ваш пароль")
            }
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
           <LoginNavigation/>
            <form className="forth_form" onSubmit={handleSignUp}>
                <div className="contact_text">Контакти</div>
                <input className="inputE" type="text" id="fname" name="email" placeholder="Email" />
                <input className="inputP" type="text" id="lname" name="password" placeholder="Пароль" />
                <input className="inputCp" type="text" id="lname" name="passwordCheck" placeholder="Підтвердження паролю" />
                <input className="inputPh" type="text" id="lname" name="phone" placeholder="Номер телефону" />
                <input style={{marginTop: "50px"}} className="forth_form_submit" type="submit" value="Зареєструватись" />
                
            </form>

        </div>
    );
}
export default withRouter(SignUpForm4);