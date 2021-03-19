import React from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import app from '../../Firebase/firebase'
import './SignUpForm3.css'
import Select from 'react-select'
import { useState } from 'react'
import NextButtonComponent from './NextButtonComponent'

const options = [
   
    { value: 'therapist', label: 'терапевт' },
    { value: 'ordinary doctor', label: 'звичайний лікар' },
    { value: 'psychologist', label: 'психолог' },
    { value: 'child psychologist', label: 'дитячий психолог' },
]

function SignUpForm3() {
  
    const [profession, setProfession] = useState('')
    console.log(profession)
 
    const [organization, setOrganization] = useState('')
    localStorage.setItem('Organization', organization)
    console.log(organization)
    
    return (
        <div>
            <LoginNavigation />
            <form className="third_form">
                <div className="work_text">Робота</div>
                <div className="choose_profession">Оберіть вашу професію:</div>
                <Select
                    onChange={(event) => setProfession(event.value)}
                    className="third_form_select"
                    defaultValue={options[2]}
                    label="Single select"
                    options={options}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'whitesmoke',
                            primary: '#48535F',
                        },
                    })}
                />
                <div className="input-work-second">
                    <input
                        onChange={(event) =>
                            setOrganization(event.target.value)
                        }
                        type="text"
                        id="organizationname"
                        name="organizationname"
                        placeholder="Назва організації"
                    />
                </div>
                <div></div>
                
            </form>
            <NextButtonComponent />
        </div>
    )
}
export default SignUpForm3

