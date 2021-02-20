import React from 'react'
import '../SignUpForm1.css'
import 'fontsource-dm-sans'
import { Link } from 'react-router-dom'

function LoginNavigation() {
    let colorBackground = 'white'
    let colorText = '#48535f'

    return (
        <nav className="number-buttons">
            <Link to="/registration">
                <StepButton colorBackground={colorBackground} colorText={colorText} stepNumber={1} />
            </Link>
            <div className="line-between-number-buttons" />
            <Link to="/registration/signup2">
                <StepButton colorBackground={colorBackground} colorText={colorText} stepNumber={2} />
            </Link>
            <div className="line-between-number-buttons" />
            <Link to="/registration/signup3">
                <StepButton colorBackground={colorBackground} colorText={colorText} stepNumber={3} />
            </Link>
            <div className="line-between-number-buttons" />
            <Link to="/registration/signup4">
                <StepButton colorBackground={colorBackground} colorText={colorText} stepNumber={4} />
            </Link>
        </nav>
    )
}
export default LoginNavigation

function StepButton({ colorBackground, colorText, stepNumber }) {
    if (localStorage.getItem("step") == stepNumber) {
        return (
            <button style={{ backgroundColor: colorBackground, color: colorText }} className="number-button">{stepNumber}</button>)
    } else {
        return (
            <button className="number-button">{stepNumber}</button>)

    }
}