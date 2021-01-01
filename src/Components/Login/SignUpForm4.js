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
                alert("Please check your password")
            }
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
           <LoginNavigation/>
            <form className="form-itself" onSubmit={handleSignUp}>
                <div className="contact_text">CONTACTS</div>
                <input type="text" id="fname" name="email" placeholder="Email" />
                <input type="text" id="lname" name="password" placeholder="Password" />
                <input type="text" id="lname" name="passwordCheck" placeholder="Confirm password" />
                <input type="text" id="lname" name="phone" placeholder="Phone number" />
                <input style={{ marginTop: "55px" }} className="third_form_submit" type="submit" value="Next" />

            </form>

        </div>
    );
}
export default withRouter(SignUpForm4);