import {Link} from 'react-router-dom'
import Arrow from '../../../assets/arrow.png'
import '../Program.css'
import '../../PatientItem/PatientItem.css'
function ArrowHeader() {
    return (
        <>
            <div
                className="patient_upper_flex_container"
                style={{marginTop: '10px'}}
            >
                <h2 style={{marginLeft: '100px'}}>
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
                <h2>
                    <Link to="/patient" className="patients_link">
                        {localStorage.getItem('childName')}
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
                <h2>
                    <Link className="program_link" to="/protocol-list">
                        Програма
                    </Link>
                </h2>
            </div>
        </>
    )
}
export default ArrowHeader
