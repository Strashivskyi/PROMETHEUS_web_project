import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import './PatientInfoPage.css'
import Header from '../Header/Header'
import MobileHeader from '../Header/MobileHeader'

import Kid from '../../assets/default_avatar.png'
import {Link} from 'react-router-dom'
import ArrowHeader from '../ArrowHeader/Arrow'
import Delete from '../../assets/delete.svg'
import toast, {Toaster} from 'react-hot-toast'
import About from '../VBmap/VBmap'

export default function PatientInfoUser() {

    let [patients, setPatients] = useState([])

    let [therapistInput, setTherapistInput] = useState('')

    let test = []

    const [terapists, setTerapists] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection("Users")
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
            .doc(localStorage.getItem('child'))
            .collection('Therapists')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setTerapists(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )

                    console.log('Сука ')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    terapists.map((terapist) => test.push(terapist.id))
    console.log(test)
    localStorage.setItem('therapistID', JSON.stringify(test))

    const [therapists, setTherapists] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection("Users")
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
            .doc(localStorage.getItem('child'))
            .collection('Therapists')
            .onSnapshot((snapshot) => {
                db.collection("Users")
                    .doc(localStorage.getItem('user'))
                    .collection('Supervisors')
                    .doc(localStorage.getItem('child'))
                    .update({Supervisor: localStorage.getItem('user')})
                if (snapshot.size) {
                    setTherapists(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )

                    console.log('Сука ')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db
                .collection("Users")
                .doc(localStorage.getItem('user'))
                .collection('Supervisors')
                .get()
            setPatients(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        fetchData()
    }, [])

    patients = patients.filter(
        (patient) => patient.id == localStorage.getItem('child')
    )
    localStorage.setItem('childName', '')
    console.log(patients)

    let path = '/protocol-list'

    const [protocols, setProtocols] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection("Users")
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )

                    console.log('Сука ')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])
    if (protocols.length == 0) {
        path = '/vb-mapp'
    } else {
        path = '/protocol-list'
    }
    localStorage.setItem('childData', JSON.stringify(patients[0]))
    return (
        <div>
            <MobileHeader/>
            <Header/>
            {/*<ul className="no_left">*/}
                {patients.map((patient) => (
                    <>
                        {localStorage.setItem('childName', patient.Name)}

                        <ArrowHeader patient={patient}/>

                        <div className="container">

                            <div className="row ">
                                <div className="col-md-4">
                                    <img className="child_image" src={patient.Image}/>
                                </div>

                                <div className="col-md-8 kid_info">
                                    <h5>{patient.Name} </h5>
                                    <h6>Діагноз: <span>{patient.Diagnos}</span></h6>
                                    <p className="grey_bg">Батьки:<span>{patient.Parents}</span></p>
                                    <p>Стать:<span>{patient.Gender}</span></p>
                                    <p className="grey_bg">Вік:<span>{patient.Age} років</span></p>
                                    <p>Дата народження:<span>{patient.BirthDate}</span></p>
                                    <p className="grey_bg">Адреса:<span>{`${patient.City}, ${patient.Country}`}</span></p>
                                </div>
                            </div>



                            {/* second column */}
                            <div className="row">
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div>Терапевти:</div>
                                    <div className="therapist_info">
                                        {/* <ReactSortable list={protocols} setList={setProtocols}> */}
                                        {therapists
                                            .sort((a, b) => +a.id - +b.id)
                                            .map((therapist) => (
                                                <>
                                                    <div className="therapist_container">
                                                        <div>
                                                            {therapist.Name}
                                                            <div
                                                                className="zebra_rows_flex_container_value"
                                                                style={{
                                                                    marginTop:
                                                                        '0px',
                                                                }}
                                                            >
                                                                ({`${therapist.id} 3456`})
                                                            </div>
                                                        </div>
                                                        <div className="icon_place_therapist">
                                                            <img
                                                                className="icon_patient"
                                                                onClick={() =>
                                                                    DeleteTherapist(
                                                                        therapist.id
                                                                    )
                                                                }
                                                                src={Delete}
                                                                width="8px"
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                    </div>

                                    <div className="add_therapist_container">
                                        <button
                                            onClick={() =>
                                                addTherapist(therapistInput)
                                            }
                                            className="add_therapist_button"
                                        >
                                            +
                                        </button>
                                        <input
                                            type="text"
                                            onChange={(event) =>
                                                setTherapistInput(
                                                    event.target.value
                                                )
                                            }
                                            name="name"
                                            placeholder="Додати за поштою...."
                                            className="add_therapist_input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="patient_page_buttons">
                            <Link
                                to={{
                                    pathname: '/program-template',
                                    myCustomProps: {patient},
                                }}
                                className="patient_page_buttons_therapy"
                            >
                                Історія програми
                            </Link>
                            <button
                                onClick={() => uploadGraphsForSevenDaysToDB()}
                                className="patient_page_button_create_info"
                            >
                                Згенерувати звіт за останні 7 днів
                            </button>
                            <Link
                                to={{
                                    pathname: '/patient/result_of_therapy',
                                    myCustomProps: {patient},
                                }}
                                className="patient_page_buttons_therapy"
                            >
                                Результати терапії
                            </Link>
                            <Link
                                to={path}
                                onClick={() => setData()}
                                className="patient_page_buttons_program"
                            >
                                Програма
                            </Link>
                        </div>
                        <Toaster
                            position="bottom-top"
                            reverseOrder={false}
                            toastOptions={{
                                style: {
                                    minWidth: '350px',
                                    minHeight: '60px',
                                    paddingLeft: '20px',
                                },
                                success: {
                                    minWidth: '600px',
                                    minHeight: '120px',
                                    duration: 5000,
                                },
                                loading: {
                                    minWidth: '600px',
                                    minHeight: '120px',
                                    duration: 5000,
                                    icon: '✉️',
                                },
                                error: {
                                    duration: 5000,
                                    icon: '⚠️',
                                },
                            }}
                        />
                    </>
                ))}

        </div>
    )
}

function uploadGraphsForSevenDaysToDB() {
    try {
        fetch(
            `https://john-steck-api.herokuapp.com/progress/${localStorage.getItem(
                'user'
            )}/${localStorage.getItem('child')}`
        ).then(
            window.open(
                `https://john-steck-api.herokuapp.com/get_progress_file/${localStorage.getItem(
                    'user'
                )}/${localStorage.getItem('child')}`
            )
        )

        toast.success('Файл успішно згенеровано')
    } catch {
        toast.error('Помилка при генерації файлу')
    }
}

function setData() {
    localStorage.setItem('templateType', 'private')
    localStorage.setItem('program', 'ok')
}

function DeleteTherapist(therapistId) {
    console.log('хуй')
    const db = app.firestore()
    db.collection("Users")
        .doc(localStorage.getItem('user'))
        .collection('Supervisors')
        .doc(localStorage.getItem('child'))
        .collection('Therapists')
        .doc(therapistId)
        .delete()


    db
        .collection("Users")
        .doc(therapistId)
        .collection('Therapists')
        .doc(localStorage.getItem('child'))
        .delete()
    toast.success(`Видалено терапіста за електронною поштою: ${therapistId}`)
}

function addTherapist(therapistInput) {
    const db = app.firestore()
    if (therapistInput != '') {
        db.collection("Users")
            .doc(therapistInput)
            .get()
            .then((doc) => {
                if (doc.id == localStorage.getItem('user')) {
                    toast.error('Ви не можете добавити самого себе в ролі терапіста!')
                } else if (doc.exists) {
                    console.log('zaebis pashe')
                    db
                        .collection("Users")
                        .doc(localStorage.getItem('user'))
                        .collection('Supervisors')
                        .doc(localStorage.getItem('child'))
                        .collection('Therapists')
                        .doc(therapistInput)
                        .set({Name: doc.data().Name})
                    toast.success(
                        `Терапіст ${
                            doc.data().Name
                        } доданий за електронною поштою: ${therapistInput}`
                    )
                    fetch(
                        `https://john-steck-api.herokuapp.com/email/reg_child/${
                            localStorage.getItem('Name') +
                            ' ' +
                            localStorage.getItem('Surname')
                        }/${localStorage.getItem(
                            'childName'
                        )}/${therapistInput}`
                    ).then((data) => {
                    })
                } else {
                    toast.loading(
                        `Відправлено лист на реєстрацію на: ${therapistInput}`
                    )
                    db.collection("Users")
                        .doc(localStorage.getItem('user'))
                        .collection('Supervisors')
                        .doc(localStorage.getItem('child'))
                        .collection('Therapists')
                        .doc(therapistInput)
                        .set({Name: 'Очікуємо реєстрації'})

                    db
                        .collection("Users")
                        .doc(therapistInput)
                        .set({Name: 'Очікуємо реєстрації'})
                    fetch(
                        `https://john-steck-api.herokuapp.com/email/reg/${
                            localStorage.getItem('Name') +
                            ' ' +
                            localStorage.getItem('Surname')
                        }/${localStorage.getItem(
                            'childName'
                        )}/${therapistInput}`
                    ).then((data) => {
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    } else {
        toast.error('Спочатку вкажіть пошту терапевта')
    }
}