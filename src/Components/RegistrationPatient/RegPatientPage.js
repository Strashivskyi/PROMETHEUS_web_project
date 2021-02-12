import React, { useState } from 'react'
import SimpleHeader from '../Header/SimpleHeader'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/arrow.png'
import MenuItem from '@material-ui/core/MenuItem'
import AvatarUpload from '../Fields/AvatarUpload'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import app from '../../Firebase/firebase'
import './RegPatientPage.css'

const currenciesGenders = [
    {
        value: 'male',
        label: 'чоловік',
    },
    {
        value: 'female',
        label: 'жінка',
    },
    {
        value: 'other',
        label: 'інше',
    },
]

const currenciesBlood = [
    {
        value: '4+',
        label: '4+',
    },
    {
        value: '4-',
        label: '4-',
    },
    {
        value: '3+',
        label: '3+',
    },
    {
        value: '3-',
        label: '3-',
    },
    {
        value: '2+',
        label: '2+',
    },
    {
        value: '',
        label: '2-',
    },
    {
        value: '1+',
        label: '1+',
    },
    {
        value: '1-',
        label: '1-',
    },
]

export default function RegistrationPatient() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }))
    const classes = useStyles()

    //     "Ім'я"
    //     "Прізвище"
    //     "Діагноз"
    //     "Батьки"

    //     вік
    //     {/* date of birth */}
    //     Місто
    //     Країна
    //     Введіть вагу
    //     Введіть зріст
    //     {/* blood type */}

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [diagnose, setDiagnose] = useState('')
    const [parents, setParents] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [date, setDate] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [blood, setBlood] = useState('')

    const db = app.firestore()

    const firstNameChange = (event) => {
        setFirstName(event.target.value)
        console.log(firstName)
    }
    const secondNameChange = (event) => {
        setSecondName(event.target.value)
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
    const weightChange = (event) => {
        setWeight(event.target.value)
    }
    const heightChange = (event) => {
        setHeight(event.target.value)
        console.log(height)
    }
    const bloodChange = (event) => {
        setBlood(event.target.value)
        console.log(blood)
    }

    async function handleSubmit() {
        await db.collection('Patient').add({
            firstName: firstName,
            secondName: secondName,
            diagnose: diagnose,
            parents: parents,
            gender: gender,
            age: age,
            date: date,
            city: city,
            country: country,
            weight: weight,
            height: height,
            blood: blood,
        })
    }

    return (
        <>
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
                    }}
                >
                    Реєстрація пацієнта
                </h2>
            </div>
            {/* --------------------------------- */}
            {/* --------  Main  content  -------- */}
            {/* --------------------------------- */}
            <div className="content-wrapper">
                <div>
                    <AvatarUpload />
                </div>
                <div className="column-direction-list">
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="patient-title">
                            <TextField
                                id="standard-basic"
                                label="Прізвище"
                                onChange={(event) => secondNameChange(event)}
                            />
                            <TextField
                                id="standard-basic"
                                label="Ім'я"
                                onChange={(event) => firstNameChange(event)}
                            />
                        </div>
                        <div className="patient-subtitle">
                            <TextField
                                id="standard-basic"
                                label="Діагноз"
                                onChange={(event) => diagnoseChange(event)}
                            />
                        </div>
                        <div className="zebra-table">
                            <TextField
                                id="standard-basic"
                                label="Батьки"
                                onChange={(event) => parentsChange(event)}
                            />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Оберіть стать"
                                value={gender}
                                onChange={(event) => genderChange(event)}
                                variant="outlined"
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
                            <TextField
                                id="standard-number"
                                placeholder="Введіть вік"
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

                            {/* date of birth */}
                            <TextField
                                id="date"
                                type="date"
                                defaultValue="1990-05-24"
                                className={classes.textField}
                                color="secondary"
                                size="medium"
                                onChange={(event) => dateChange(event)}
                            />
                            <TextField
                                id="standard-basic"
                                label="Місто"
                                onChange={(event) => cityChange(event)}
                            />
                            <TextField
                                id="standard-basic"
                                label="Країна"
                                onChange={(event) => countryChange(event)}
                            />
                            <TextField
                                id="standard-number"
                                placeholder="Введіть вагу"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => weightChange(event)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            кг
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="standard-number"
                                placeholder="Введіть зріст"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => heightChange(event)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            см
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Оберіть групу крові"
                                value={blood}
                                onChange={(event) => bloodChange(event)}
                                variant="outlined"
                            >
                                {currenciesBlood.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* blood type */}
                        </div>
                    </form>
                    <button
                        className="save_button"
                        // type="submit"
                        style={{
                            top: '1rem',
                            right: '2rem',
                            cursor: 'pointer',
                            position: 'absolute',
                        }}
                        onClick={handleSubmit}
                    >
                        Зберегти
                    </button>
                </div>
            </div>
        </>
    )
}
