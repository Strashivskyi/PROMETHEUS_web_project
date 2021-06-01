import React, { useState, createRef } from 'react'
import SimpleHeader from '../Header/SimpleHeader'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/arrow.png'
import MenuItem from '@material-ui/core/MenuItem'
import { Avatar, Button as MuiButton } from '@material-ui/core'
import { spacing } from '@material-ui/system'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import app from '../../Firebase/firebase'
import './RegPatientPage.css'
import default_avatar from '../../assets/default_avatar.png'
import Redirect, { withRouter } from 'react-router'
import MobileHeader from '../Header/MobileHeader'
import toast, { Toaster } from 'react-hot-toast'
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
/* -
----------------------------
|  Style components block  |
----------------------------
 */
const Button = styled(MuiButton)(spacing)

const CenteredContent = styled.div`
    text-align: center;
`

/* -
------------------------
|    Main component    |
------------------------
 */

const currenciesGenders = [
    {
        value: 'чоловік',
        label: 'чоловік',
    },
    {
        value: 'жінка',
        label: 'жінка',
    },
    {
        value: 'інше',
        label: 'інше',
    },
]

// const currenciesBlood = [
//     {
//         value: '4+',
//         label: '4+',
//     },
//     {
//         value: '4-',
//         label: '4-',
//     },
//     {
//         value: '3+',
//         label: '3+',
//     },
//     {
//         value: '3-',
//         label: '3-',
//     },
//     {
//         value: '2+',
//         label: '2+',
//     },
//     {
//         value: '2-',
//         label: '2-',
//     },
//     {
//         value: '1+',
//         label: '1+',
//     },
//     {
//         value: '1-',
//         label: '1-',
//     },
//     {
//         value: 'None',
//         label: 'None',
//     },
// ]

function RegistrationPatient({ history }) {
    const useStyles = makeStyles((theme) => ({
        rootForTitle: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '20ch',
            },
        },
        rootForSubTitle: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '20ch',
            },
        },
        rootForDate: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '20ch',
            },
        },
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '20ch',
            },
        },
    }))
    const classes = useStyles()
    const [name, setName] = useState('')
    const [diagnose, setDiagnose] = useState('')
    const [parents, setParents] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [date, setDate] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    // const [weight, setWeight] = useState('')
    // const [height, setHeight] = useState('')
    // const [blood, setBlood] = useState('')
    const [image, _setImage] = useState(null)
    const [imageBase64String, setImageBase64String] = useState(default_avatar)
    const inputFileRef = createRef(null)

    // FOR IMAGE
    const cleanup = () => {
        URL.revokeObjectURL(image)
        inputFileRef.current.value = null
    }

    const setImage = (newImage) => {
        if (image) {
            cleanup()
        }
        _setImage(newImage)
    }

    const handleOnChange = (event) => {
        const newImage = event.target?.files?.[0]
        if (newImage) {
            setImage(URL.createObjectURL(newImage))
        }
        const reader = new FileReader()
        reader.onloadend = () => {
            setImageBase64String(reader.result)
        }
        reader.readAsDataURL(newImage)
    }

    /**
     *
     * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
     */
    const handleClick = (event) => {
        if (image) {
            event.preventDefault()
            setImage(null)
        }
    }

    //FOR INPUTS
    const db = app.firestore()

    const nameChange = (event) => {
        setName(event.target.value)
    }
    const diagnoseChange = (event) => {
        setDiagnose(event.target.value)
    }
    const parentsChange = (event) => {
        setParents(event.target.value)
    }
    const genderChange = (event) => {
        setGender(event.target.value)
    }
    const ageChange = (event) => {
        setAge(event.target.value)
    }
    const dateChange = (event) => {
        setDate(event.target.value)
        console.log(date)
    }
    const cityChange = (event) => {
        setCity(event.target.value)
    }
    const countryChange = (event) => {
        setCountry(event.target.value)
    }
    // const weightChange = (event) => {
    //     setWeight(event.target.value)
    // }
    // const heightChange = (event) => {
    //     setHeight(event.target.value)
    //     console.log(height)
    // }
    // const bloodChange = (event) => {
    //     setBlood(event.target.value)
    //     console.log(blood)
    // }

    const dataVBMapp = [
        "Поведінка,Співпраця",
        "МАНД-ПРОХАННЯ",
        "ТАКТ-НАЗИВАННЯ",
        "Поведінка cлухача-розуміння мовлення",
        "ФКХ-розрізнення по функціях категоріях",
        "Візуальне сприйняття",
        "Вокальна Імітація",
        "інтровербальні навички-відповіді на питання ",
        "Моторна Імітація",
        "Гра",
        "Соціальна поведінка",
        "Поведінка в групі,Слідування розпорядку",
        "Крупна моторика",
        "Дрібна моторика",
        "Переодягання",
        "Прийом Їжі",
        "Гігієна",
        "Читання",
        "Письмо",
        "Математика",
        "Лінгвістика,Граматика"]
    async function handleSubmit(history) {
        if (
            name == '' ||
            diagnose == '' ||
            parents == '' ||
            gender == '' ||
            age == '' ||
            date == '' ||
            city == '' ||
            country == ''
        ) {
            toast.error('Заповніть всі поля!')
        } else {
            const res = await db
                .collection("Users")
                .doc(localStorage.getItem('user'))
                .collection(localStorage.getItem('proffesion'))
                .add({
                    Name: name,
                    Diagnos: diagnose,
                    Parents: parents,
                    Gender: gender,
                    Age: age,
                    BirthDate: date,
                    City: city,
                    Country: country,
                    // KidWeight: weight,
                    // KidHeight: height,
                    // BloodType: blood,
                    Image: imageBase64String,
                    Supervisor: localStorage.getItem('user'),
                }).then((doc) => {
                    for (let i = 0; i < 21; i++) {
                        db
                            .collection("Users")
                            .doc(localStorage.getItem('user'))
                            .collection(localStorage.getItem('proffesion'))
                            .doc(doc.id).collection("VB-MAPP_protocol").doc(dataVBMapp[i]).set({ prior: +(i + 1) })

                        for (let j = 0; j < getRandomInt(10, 26); j++) {
                            for (let k = 0; k < getRandomInt(1, 5); k++) {
                                db.collection("Users")
                                    .doc(localStorage.getItem('user'))
                                    .collection(localStorage.getItem('proffesion'))
                                    .doc(doc.id).collection("VB-MAPP_protocol").doc(dataVBMapp[i]).collection("protocols").doc("a" + (j + 1)).set({ id: "a" + (j + 1) })
                                db.collection("Users")
                                    .doc(localStorage.getItem('user'))
                                    .collection(localStorage.getItem('proffesion'))
                                    .doc(doc.id).collection("VB-MAPP_protocol").doc(dataVBMapp[i]).collection("protocols").doc("a" + (j + 1)).collection("stage").doc().set({ SphereOfDevelopment: dataVBMapp[i] })
                            }
                        }


                    }



                })
            history.push('/')
        }
    }

    return (
        <div className="general_container">
            <MobileHeader />
            <SimpleHeader />
            <div
                className="patient_upper_flex_container"
                style={{ marginTop: '10px' }}
            >
                <h2 style={{ marginLeft: '100px' }}>
                    <Link to="/" className="patients_link">
                        Пацієнти
                    </Link>
                </h2>
                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '28px',
                        color: 'black',
                    }}
                />
                <h2
                    style={{
                        color: 'GrayText',
                        fontSize: '25px',
                    }}
                >
                    Реєстрація пацієнта
                </h2>
            </div>
            {/* --------------------------------- */}
            {/* --------  Main  content  -------- */}
            {/* --------------------------------- */}
            <div className="content-wrapper">
                <div className="avatar-reg-wrapper">
                    <CenteredContent>
                        <Avatar
                            alt="Avatar"
                            src={image}
                            variant="square"
                            style={{
                                marginLeft: 'auto',
                                width: '256px',
                                height: '256px',
                                marginLeft: 'auto',
                            }}
                        />
                        <input
                            ref={inputFileRef}
                            accept="image/*"
                            hidden
                            id="avatar-image-upload"
                            type="file"
                            onChange={handleOnChange}
                        />
                        <label htmlFor="avatar-image-upload">
                            <Button
                                className="upload-image-btn"
                                variant="contained"
                                color="grey"
                                component="span"
                                mb={2}
                                onClick={handleClick}
                            >
                                {image ? 'Очистити' : 'Завантажити'}
                            </Button>
                        </label>
                    </CenteredContent>
                </div>
                <div className="column-direction-list">
                    {/* Start of inputs */}
                    <div
                        className={classes.rootForTitle}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="patient-title">
                            <div className="label-area">Ім'я та <br />Прізвище:</div>

                            <TextField
                                style={{
                                    position: 'relative',
                                    paddingLeft: '12.5%'
                                }}
                                require
                                className="patient-subtitle-input"
                                color="secondary"
                                onChange={(event) => nameChange(event)}
                            />
                        </div>
                    </div>
                    <div
                        className={classes.rootForSubTitle}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="patient-subtitle">
                            <div className="patient-subtitle-label">
                                Діагноз:
                            </div>
                            <TextField
                                style={{
                                    position: 'relative',
                                    paddingLeft: '17%'
                                }}
                                require
                                className="patient-subtitle-input"
                                color="secondary"
                                onChange={(event) => diagnoseChange(event)}
                            />
                        </div>
                    </div>
                    <div className={classes.root} noValidate autoComplete="off">
                        <div className="zebra-table">
                            <div className="zebra-table-left-part">
                                <div className="grey-stripe-zebra">
                                    <div className="label-area">Батьки:</div>

                                    <TextField
                                        style={{
                                            position: 'relative',
                                            paddingLeft: '17%'
                                        }}
                                        color="secondary"
                                        onChange={(event) =>
                                            parentsChange(event)
                                        }
                                    />
                                </div>
                                <div className="white-stipe-zebra">
                                    <div className="label-area">Стать:</div>
                                    <TextField
                                        style={{
                                            position: 'relative',
                                            paddingLeft: '20%'
                                        }}
                                        color="secondary"
                                        select
                                        value={gender}
                                        onChange={(event) =>
                                            genderChange(event)
                                        }
                                    >
                                        {currenciesGenders.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="grey-stripe-zebra">
                                    <div className="label-area">Вік:</div>
                                    <TextField
                                        style={{
                                            position: 'relative',
                                            paddingLeft: '20%'
                                        }}
                                        className="big_input"
                                        color="secondary"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(event) => ageChange(event)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    років
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <div className="white-stipe-zebra">
                                    <div className="label-area">
                                        Дата народження:
                                    </div>
                                    <TextField
                                        style={{
                                            position: 'relative',
                                            paddingLeft: '20%'
                                        }}
                                        type="date"
                                        className={classes.textField}
                                        color="secondary"
                                        size="medium"
                                        onChange={(event) => dateChange(event)}
                                    />
                                </div>
                                <div className="grey-stripe-zebra">
                                    <div className="label-area">Місто:</div>
                                    <TextField
                                        onChange={(event) => cityChange(event)}
                                        color="secondary"
                                    />
                                </div>
                                <div className="white-stipe-zebra">
                                    <div className="label-area">Країна:</div>
                                    <TextField
                                        style={{
                                            position: 'relative',
                                            paddingLeft: '20%'
                                        }}
                                        onChange={(event) =>
                                            countryChange(event)
                                        }
                                        color="secondary"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button style={{
                        margin: '1%',
                    }}
                        type="submit"
                        className="save_button save_button_add_patient btn-background-slide"
                        onClick={() => handleSubmit(history)}
                        value="Зберегти"
                    >
                        {' '}
                        Зберегти{' '}
                    </button>

                    <Toaster
                        position="bottom-top"
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                minWidth: '350px',
                                minHeight: '60px',
                                paddingLeft: '20px',
                            },
                            error: {
                                duration: 5000,
                                icon: '⚠️',
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default withRouter(RegistrationPatient)
