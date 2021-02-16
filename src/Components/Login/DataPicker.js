import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: 26,
        marginTop: '30px',
    },
    textField: {
        width: '100%',
        marginLeft: '20%',
        marginRight: '20%',
        fontWeight: 500,
        fontSize: 26,
    },
}))

const DataPicker = () => {
    const classes = useStyles()
    const [data, setData] = useState("")
    console.log(data)
    localStorage.setItem("Birthday",data)
    return (
        <form className={classes.container} noValidate>
            <TextField onChange={(event)=>(setData(event.target.value))}
                id="date"
                type="date"
                defaultValue="1990-05-24"
                className={classes.textField}
                color="secondary"
                size="medium"
            />
        </form>
    )
}

export default DataPicker
