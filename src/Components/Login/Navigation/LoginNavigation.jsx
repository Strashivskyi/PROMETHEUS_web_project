import React from 'react'
import '../SignUpForm1.css'
import 'fontsource-dm-sans'
import {Link} from 'react-router-dom'
import './SignUpNavigation.css'
function LoginNavigation() {
    let colorBackground = 'white'
    let colorText = '#48535f'

    return (
        <nav className="number-buttons container">
            <div className="row row-cols-3 justify-content-center">
                <Link to="/registration">
                    <StepButton
                        colorBackground={colorBackground}
                        colorText={colorText}
                        stepNumber={1}
                    />
                </Link>
                <Link to="/registration/signup1">
                    <StepButton
                        colorBackground={colorBackground}
                        colorText={colorText}
                        stepNumber={2}
                    />
                </Link>
                <Link to="/registration/signup2">
                    <StepButton
                        colorBackground={colorBackground}
                        colorText={colorText}
                        stepNumber={3}
                    />
                </Link>
            </div>
        </nav>
    )
}
export default LoginNavigation

function StepButton({colorBackground, colorText, stepNumber}) {
    if (localStorage.getItem('step') == stepNumber) {
        return (
            <button
                style={{backgroundColor: colorBackground, color: colorText}}
                className="number-button"
            >
                {stepNumber}
            </button>
        )
    } else {
        return <button className="number-button">{stepNumber}</button>
    }
}
