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
        rootForTitle: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '28ch',
            },
        },
        rootForSubTitle: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '15ch',
            },
        },
        rootForDate: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '15ch',
            },
        },
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
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
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [blood, setBlood] = useState('')
    const [image, _setImage] = useState(null)
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
        const res = await db
            .collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .add({
                Name: name,
                Diagnos: diagnose,
                Parents: parents,
                Gender: gender,
                Age: age,
                BirthDate: date,
                City: city,
                Country: country,
                KidWeight: weight,
                KidHeight: height,
                BloodType: blood,
                Image:
                    'https://pulson.ru/wp-content/uploads/2013/10/krasivyie-foto-detey4.jpg',
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
                <div className="avatar-reg-wrapper">
                    <CenteredContent>
                        <Avatar
                            alt="Avatar"
                            src={image}
                            variant="square"
                            style={{
                                width: '256px',
                                height: '256px',
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
                            <div className="label-area">Ім'я та Прізвище:</div>

                            <TextField
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
                                className="patient-subtitle-input"
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
                                        onChange={(event) =>
                                            parentsChange(event)
                                        }
                                    />
                                </div>
                                <div className="white-stipe-zebra">
                                    <div className="label-area">Стать:</div>
                                    <TextField
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
                                    />
                                </div>
                                <div className="white-stipe-zebra">
                                    <div className="label-area">Країна:</div>
                                    <TextField
                                        onChange={(event) =>
                                            countryChange(event)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="zebra-table-right-part">
                                <div className="grey-stripe-zebra">
                                    <div className="label-area">Вага:</div>
                                    <TextField
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(event) =>
                                            weightChange(event)
                                        }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    кг
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <div className="white-stipe-zebra">
                                    <div className="label-area">Зріст:</div>
                                    <TextField
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(event) =>
                                            heightChange(event)
                                        }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    см
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <div className="grey-stripe-zebra">
                                    <div className="label-area">
                                        Група крові:
                                    </div>
                                    <TextField
                                        select
                                        value={blood}
                                        onChange={(event) => bloodChange(event)}
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/">
                        <button
                            className="save_button"
                            style={{
                                top: '3.1rem',
                                right: '5.6rem',
                                cursor: 'pointer',
                                position: 'absolute',
                            }}
                            onClick={handleSubmit}
                        >
                            Зберегти
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
