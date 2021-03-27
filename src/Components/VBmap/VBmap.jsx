import React, {useEffect, useState} from 'react'
import {storage} from '../../Firebase/firebase'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import './VBmap.css'
import VBmapFile from './VBmapFile'

function About() {
    const [filesList, setFilesList] = useState([])
    const [filename, setFile] = useState('')
    // let filesData = []
    // let storageRef = storage.ref(FOLDER_NAME);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }
    const handleUpload = () => {
        const uploadTask = storage
            .ref(
                `patients/${localStorage.getItem('child')}/vbmap/${
                    filename.name
                }`
            )
            .put(filename)
        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
                console.log(error)
            },
            () => {
                storage
                    .ref('patients/' + localStorage.getItem('child') + '/vbmap')
                    .child(filename.name)
                    .getDownloadURL()
                    .then((url) => {
                        // console.log(url)
                        setFilesList((filesList) => [
                            ...filesList,
                            {name: filename.name},
                        ])
                    })
            }
        )
    }

    // console.log("image:", filename)
    useEffect(() => {
        // let filesData = []
        const FOLDER_NAME = `patients/${localStorage.getItem('child')}/vbmap`
        let storageRef = storage.ref(FOLDER_NAME)

        storageRef
            .listAll()
            .then(function (result) {
                result.items.forEach(function (imageRef) {
                    // And finally display them
                    let fileData = {}
                    fileData['name'] = imageRef.name
                    // console.log(imageRef.name)
                    let fullRef = storageRef.child(`${imageRef.name}`)
                    // Get metadata properties
                    fullRef
                        .getMetadata()
                        .then((metadata) => {
                            // Metadata now contains the metadata for 'images/forest.jpg'
                            fileData['timeCreated'] = metadata.timeCreated
                            fileData['updated'] = metadata.updated
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                    displayImage(imageRef, fileData)
                    // console.log('222')
                })
            })
            .catch(function (error) {
                console.log(error)
            })

        function displayImage(imageRef, fileData) {
            imageRef
                .getDownloadURL()
                .then(function (url) {
                    fileData['url'] = url
                    // filesData.push(fileData)
                    // console.log('333')
                    console.log(fileData + 'fileData')
                    setFilesList((filesList) => [...filesList, fileData])
                    // setCount(fileList.push()[filesData]);
                    // setCount([filesData]);
                    // count.forEach(element => console.log(element));
                    console.log(filesList + 'filesList')
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }, [])

    return (
        <Container>
            {console.log(filesList, '111')}
            <Row className="justify-content-start">
                <Col
                    md={{offset: 1, span: 7}}
                    xs={12}
                    lg={{offset: 2, span: 5}}
                    sm={{offset: 1, span: 7}}
                    className="vertical-align-center"
                >
                    <Form class="file-form">
                        <Form.Group>
                            <Form.File
                                id="exampleFormControlFile1"
                                label=""
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Col>
                {/* <Col xl={2} lg={2} md={2} xs={12} sm={4} className="">
                    <Button onClick={handleUpload} variant="primary submit-button">Завантажити</Button>
                </Col> */}
            </Row>
            <Row className="justify-content-evenly ">
                {filesList.map(({name, timeCreated, updated, url}, idx) => (
                    <VBmapFile
                        filename={name}
                        timeCreated={timeCreated}
                        updated={updated}
                        url={url}
                        key={`${name}_${idx}`}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default About
