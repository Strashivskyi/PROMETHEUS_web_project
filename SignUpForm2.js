import React from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import Upload from '../../assets/Vector.svg'
import $ from 'jquery'
import { useState, useEffect } from 'react'
import app from '../../Firebase/firebase'
import './SignUpForm2.css'

function SignUpForm2() {
    
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
    localStorage.setItem("step",3)
    return (
        <div>
            <LoginNavigation />

            <form className="form-second-personal-data">
                <p className="personal_text">Особиста інформація</p>

                <div className="custom_image_input">
                    <label for="image_input">
                        <img
                            src={Upload}
                            height="25"
                            style={{
                                cursor: 'pointer',
                                marginLeft: '25px',
                                marginRight: '15px',
                                marginTop: '9px',
                                color: '#EEEEEE',
                            }}
                        />
                        <span className="download_image" id="file-chosen">
                            Завантажити фото профілю
                        </span>
                        <hr />
                    </label>
                    <input
                        type="file"
                        id="image_input"
                        onChange={onSelectFile}
                    />
                </div>
                {selectedFile && <img src={preview} className="input_image" />}
                <div id="div1" className="image_container_simulator">
                    Фото
                </div>
                <div className="input-city">
                    <input
                        onChange={(event) => setCountry(event.target.value)}
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Країна"
                    />
                </div>
                <div className="input-city">
                    <input
                        onChange={(event) => setCity(event.target.value)}
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Місто"
                    />
                </div>
            </form>
        </div>
    )
}
export default SignUpForm2
// function addSecondInputRegistr(photo, country, city) {
//     const db = app.firestore();
//     db.collection("User").doc(localStorage.getItem("user")).set({Photo: photo, Country: country, City: city})
// }
