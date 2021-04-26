import React from 'react'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import $ from 'jquery'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './SignUpForm2.css'
import {withRouter} from 'react-router'
import Country from '../../assets/earth_signup.svg'
import City from '../../assets/city_signup.svg'
import Caret from '../../assets/CaretRight.svg'
import CaretLeft from '../../assets/CaretLeft.svg'

function SignUpForm2() {
    localStorage.setItem('step', 2)
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        if (selectedFile) {
            setPreview(undefined)
            $('#div1').remove()
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    const [country, setCountry] = useState('')
    console.log(country)
    localStorage.setItem('Country', country)
    const [city, setCity] = useState('')
    localStorage.setItem('City', city)
    console.log(city)
    return (
        <div class="container">
            <div class="row justify-content-center">
                <LoginNavigation class="col-6" />
                <form className="form-itself col-12 row justify-content-center">
                    <div className="col-12 row justify-content-center">
                        <label
                            for="image_input"
                            className="col-12 row justify-content-center"
                        >
                            <div
                                id="div1"
                                className="col-4 image_container_simulator"
                            >
                                Завантажити фото
                            </div>
                        </label>
                        <input
                            className="col-12"
                            type="file"
                            id="image_input"
                            onChange={onSelectFile}
                        />
                    </div>
                    {selectedFile && (
                        <img src={preview} className="col-4 input_image" />
                    )}
                    <div className="col-12 row justify-content-center">
                        <div class="col-10 col-md-7 row input-image">
                            <img
                                src={Country}
                                alt="person image"
                                className="signin-icons col-3"
                            />
                            <input
                                onChange={(event) =>
                                    setCountry(event.target.value)
                                }
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Країна"
                                className="transparent-input col-9"
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                        <div class="col-10 col-md-7 row input-image">
                            <img
                                src={City}
                                alt="person image"
                                className="signin-icons col-3"
                            />
                            <input
                                onChange={(event) =>
                                    setCity(event.target.value)
                                }
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Місто"
                                className="transparent-input col-9"
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                    </div>
                </form>
                <div className="easy_nav_box_2 col-12 row">
                    <Link to="/registration/" className="col-3 easy_nav">
                        <img
                            src={CaretLeft}
                            alt="tick image"
                            className="col-3"
                        />
                        Назад
                    </Link>
                    <div className="col-6" />
                    <Link to="/registration/signup2" className="col-3 easy_nav">
                        Далі
                        <img src={Caret} alt="tick image" className="col-3" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SignUpForm2)
