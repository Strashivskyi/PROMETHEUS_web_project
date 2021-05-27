import Arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom'
function ArrowHeader({ patient }) {
    return (
        <> <div className="patient_upper_flex_container" style={{ width: "22rem", justifyContent: "space-around", margin: '1% 0 1% 3%' }}>
            < h2>
                <Link to="/" className="patients_link">
                    Пацієнти
                                </Link>
            </h2>
            <img
                src={Arrow}
                height="25"

            />
            <h2
                className="patients_link"
                style={{ color: '#6F6F6F' }}
            >
                {patient.Name}
            </h2>

        </div>
        </>
    )
}
export default ArrowHeader