import React, { useCallback, useContext } from 'react'
import { useState } from 'react'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import app from '../../Firebase/firebase'
import '../Login/Login1.css'
import './ForgetPassword.css'



function recover(Email, history) {

    app.auth().sendPasswordResetEmail(Email)
        .then(function (user) {
            alert('Please check your email...')
            history.push("/");
        }).catch(function (e) {
            alert(e)
        })
}

function ForgetPassword() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    console.log(email)
    return (
        <>
            <div className="image-form-division">
                <div className="image" />
                <div className="form">
                    <div className="sign-up-text"> Відновлення паролю</div>
                    <form className="forget_form" >
                        <div>**Якщо Ви забули свій пароль, будь ласка,
                        введіть поточну електронну адресу і перевірте свою пошту.
                        Вам має прийти лист з посиланням,за яким Ви повинні перейти і
                            ввести новий пароль.</div>
                        <input
                            className="forget_text_input"
                            type="text"
                            id="fname"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => (setEmail(e.target.value))}
                        />

                        <p className="forget_submit"
                            onClick={() => recover(email, history)}
                        >Відправити</p>



                    </form>
                </div>
            </div>
        </>
    )

}
export default ForgetPassword
