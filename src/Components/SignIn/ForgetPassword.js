import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from '../../Firebase/firebase'
import '../Login/Login1.css'
import './ForgetPassword.css'

function ForgetPassword() {
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
                        />
                        <input
                            className="forget_submit"
                            type="submit"
                            value="Відправити"
                        />
                    </form>
                </div>
            </div>
        </>
    )

}
export default ForgetPassword
