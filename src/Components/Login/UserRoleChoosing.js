import React from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import app from '../../Firebase/firebase'
import SwitchSelector from 'react-switch-selector'
import './UserRoleChoosing.css'
import NextButtonComponent from '../Login/NextButtonComponent'
import {Link} from 'react-router-dom'

function SignUpForm3() {
    const options = [
        {
            label: 'Супервізор',
            value: {
                role: 'Supervisors',
            },
        },
        {
            label: 'Терапіст',
            value: {
                role: 'Therapists',
            },
        },
    ]

    const onChange = (newValue) => {
        localStorage.setItem('proffesion', newValue.role)
        console.log(newValue.role)
    }
    localStorage.setItem('step', 1)
    localStorage.setItem('proffesion', 'Supervisors')
    return (
        <div>
            <LoginNavigation colorBackground={'white'} colorText={'#48535F'} />
            <div className="before_register">
                Передусім оберіть вашу роль як користувача:
            </div>
            <div
                style={{
                    width: 350,
                    height: 55,
                    paddingTop: '70px',
                    fontSize: '28px',
                    textAlign: 'center',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                }}
            >
                <SwitchSelector
                    onChange={onChange}
                    options={options}
                    backgroundColor={'#48535F'}
                    fontColor={'#FFFFFF'}
                    selectedFontColor={'#48535F'}
                    selectionIndicatorMargin="4"
                    wrapperBorderRadius="8"
                    optionBorderRadius="7"
                    fontSize="15px"
                    selectedBackgroundColor="#FFFFFF"
                />
            </div>

            <div className="have_acc">
                <span className="still_no_acc_text">
                    Вже маєте акаунт? &nbsp;&nbsp;&nbsp;
                </span>
                <div className="login_link_reg">
                    <a href="/" className="login_please">
                        Залогуватись
                    </a>
                </div>
            </div>
            <Link to="/registration/signup2">
                <NextButtonComponent />
            </Link>
        </div>
    )
}

export default SignUpForm3
