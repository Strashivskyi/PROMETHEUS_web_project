import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import './PatientInfoPage.css'
import Header from '../Header/Header'
import MobileHeader from '../Header/MobileHeader'
import Arrow from '../../assets/arrow.png'
import Kid from '../../assets/default_avatar.png'
import {Link} from 'react-router-dom'
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
            .collection('Supervisors')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
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
            .collection('Supervisors')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Therapists')
            .onSnapshot((snapshot) => {
                db.collection('Supervisors')
                    .doc(localStorage.getItem('user'))
                    .collection('Patient')
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
                .collection('Supervisors')
                .doc(localStorage.getItem('user'))
                .collection('Patient')
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
            .collection('Supervisors')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
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
        path = '/program-template'
    } else {
        path = '/protocol-list'
    }
    localStorage.setItem('childData', JSON.stringify(patients[0]))
    return (
        <div>
            <MobileHeader />
            <Header />
            <ul className="no_left">
                {patients.map((patient) => (
                    <>
                        {localStorage.setItem('childName', patient.Name)}

                        <div className="patient_upper_flex_container">
                            <h2 style={{marginLeft: '4rem'}}>
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
                                className="patients_link"
                                style={{color: '#6F6F6F'}}
                            >
                                {patient.Name}
                            </h2>
                        </div>
                        <div className="patient_grid_container">
                            <img
                                src={patient.Image}
                                height="200"
                                className="mobile_child_image"
                            />
                            <img
                                src={patient.Image}
                                height="270"
                                className="child_image"
                            />
                            <div className="column_outer_flex_container">
                                <div className="kid_name">{patient.Name} </div>
                                <div className="diagnosis_flex_container">
                                    <h7 className="">
                                        Діагноз: &nbsp;&nbsp;&nbsp;&nbsp;
                                    </h7>
                                    <div style={{color: '#6F6F6F'}}>
                                        {patient.Diagnos}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{backgroundColor: '#EEEEEE'}}
                                >
                                    <div>Батьки:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Parents}
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Стать:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Gender}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{backgroundColor: '#EEEEEE'}}
                                >
                                    <div>Вік:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Age} років
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Дата народження:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.BirthDate}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{backgroundColor: '#EEEEEE'}}
                                >
                                    <div>Місто:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.City}
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Країна:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Country}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{backgroundColor: '#EEEEEE'}}
                                >
                                    <div>
                                        Рівень оцінки вербальних
                                        навичок(VB-MAPP):
                                    </div>
                                    <div className="zebra_rows_flex_container_value">
                                        <About />
                                    </div>
                                </div>
                                {/* 
                                <div className="zebra_rows_flex_container">
                                    <div>Зріст:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.KidHeight} см
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Група крові:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.BloodType}
                                    </div> */}
                                {/* </div> */}
                            </div>
                            {/* second column */}
                            <div className="second_column_outer_flex_container">
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
                                                                ({therapist.id})
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
            </ul>
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
    db.collection('Supervisors')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Therapists')
        .doc(therapistId)
        .delete()
    db.collection('Therapists')
        .doc(therapistId)
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .delete()
    toast.success(`Видалено терапіста за електронною поштою: ${therapistId}`)
}

function addTherapist(therapistInput) {
    const db = app.firestore()
    if (therapistInput != '') {
        db.collection('Therapists')
            .doc(therapistInput)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log('zaebis pashe')
                    db.collection('Supervisors')
                        .doc(localStorage.getItem('user'))
                        .collection('Patient')
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
                    ).then((data) => {})
                } else {
                    toast.loading(
                        `Відправлено лист на реєстрацію на: ${therapistInput}`
                    )
                    db.collection('Supervisors')
                        .doc(localStorage.getItem('user'))
                        .collection('Patient')
                        .doc(localStorage.getItem('child'))
                        .collection('Therapists')
                        .doc(therapistInput)
                        .set({Name: 'Очікуємо реєстрації'})

                    db.collection('Therapists')
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
                    ).then((data) => {})
                }
            })
            .catch((error) => {
                console.log(error)
            })
    } else {
        toast.error('Спочатку вкажіть пошту терапевта')
    }
}
