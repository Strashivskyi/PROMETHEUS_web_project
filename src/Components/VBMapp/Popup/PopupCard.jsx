import React from 'react'
import '../Popup/PopupCard.css'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import app from '../../../Firebase/firebase'
import {Link} from 'react-router-dom'

const statuses = [
    {
        value: 'white',
        label: 'неактивний',
    },
    {
        value: 'yellow',
        label: 'активний',
    },
    {
        value: 'green',
        label: 'виконано',
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '8rem',
        },
    },
}))

const Card = ({programElement, id, idStage}) => {
    const classes = useStyles()

    const statusChange = (event) => {
        UpdateColor(id, idStage, programElement, event.target.value)
    }

    return (
        <div className="popup-card">
            <div className="popup-card-title">
                <p>{programElement.SphereOfDevelopment}</p>
                <p>{programElement.Method}</p>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <div className="popup-card-wrap">
                    <div className="popup-card-status">
                        <div>Статус:</div>
                        <TextField
                            select
                            value={programElement.color}
                            onChange={(event) => statusChange(event)}
                        >
                            {statuses.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    <div
                                        className="popup-status-choice"
                                        style={{
                                            backgroundColor: option.value,
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="popup-link-title">Посилання:</div>
                    <a
                        className="popup-link"
                        href="https://youtu.be/IO9XlQrEt2Y?t=22"
                        target="blank"
                    >
                        відео терапії
                    </a>
                    <a
                        className="popup-link"
                        href="https://youtu.be/IO9XlQrEt2Y?t=22"
                        target="blank"
                    >
                        навички роботи з фігурками
                    </a>
                    <Link className="open-protocol-btn">
                        Перейти до програми
                    </Link>
                </div>
            </form>
        </div>
    )
}

function UpdateColor(id, idStage, proto, color) {
    const db = app.firestore()
    db.collection('Users')
        .doc(localStorage.getItem('user'))
        .collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('child'))
        .collection('VB-MAPP_protocol')
        .doc(id)
        .collection('protocols')
        .doc(idStage)
        .collection('stage')
        .doc(proto.id)
        .update({color: color})

    db.collection('Users')
        .doc(localStorage.getItem('user'))
        .collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(proto.id)
        .set(proto)
}

export default Card
