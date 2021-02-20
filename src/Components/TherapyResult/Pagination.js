import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { List, makeStyles, Divider, Box } from '@material-ui/core'
import app from '../../Firebase/firebase'
import File from './File'
import './Pagination.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(4),
        },
    },
    items: {
        padding: theme.spacing(2),
    },
}))

const PaginationRounded = () => {
    const classes = useStyles()
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [filesPerPage] = useState(4)

    console.log('')
    var storageRef = app.storage().ref()
    var patientResultRef = storageRef.child(
        'patient_result/' + localStorage.getItem('telegramUserName')+"/"+localStorage.getItem("childName")
    )

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            patientResultRef.listAll().then(function (result) {
                setFiles(
                    result.items.map((url) => {
                        return url
                            .toString()
                            .replace(
                                'gs://ionkid-abd2f.appspot.com/patient_result/' +
                                    localStorage.getItem('telegramUserName') +"/"+localStorage.getItem("childName")+
                                    '/',
                                ''
                            )
                    })
                )
            })
            setLoading(false)
        }
        fetchData()
    }, []) // [files, setFiles]

    const handleChange = (event, value) => {
        setPage(value)
    }

    console.log('sho?   \n' + files.length)
    return (
        <>
            <div
                className="table-wrapper"
                style={{ position: 'relative', bottom: '5rem' }}
            >
                {files
                    .slice((page - 1) * filesPerPage, page * filesPerPage)
                    .map((file) => {
                        return <File file={file} loading={loading} />
                    })}
                {/* 'Divider' protrudes to the left || Need to fix or delete */}
                {/* <Divider /> */}
            </div>
            <Box component="span" className="pagination-box">
                <Pagination
                    count={Math.ceil(files.length / filesPerPage)}
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    color="primary"
                    size="large"
                    variant="outlined"
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    classes={{ ul: classes.paginator }}
                />
            </Box>
        </>
    )
}

export default PaginationRounded
