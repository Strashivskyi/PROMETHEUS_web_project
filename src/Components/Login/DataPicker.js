import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import "./DataPicker.css"



const DataPicker = () => {
    const [data, setData] = useState('')
    console.log(data)
    localStorage.setItem('Birthday', data)
    return (
        <form className="container_calendar" noValidate>
            <TextField
                onChange={(event) => setData(event.target.value)}
                id="date"
                type="date"
                defaultValue="1990-05-24"
                className="textField_calendar"
                color="secondary"
                size="medium"
                fullWidth 
            />
        </form>
    )
}

export default DataPicker
