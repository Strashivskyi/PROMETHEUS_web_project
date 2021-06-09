import {Link} from 'react-router-dom'
import Arrow from '../../assets/arrow.png'
function TreeArrowHeader({ patient, page }) {
    return (
        <> <div className="patient_upper_flex_container" style={{ width: "35rem", justifyContent: "space-around", margin: '1% 0 1% 3.4%' }}>
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

            >
                <Link to="/patient" className="patients_link">
                    {patient}
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
              
                    {page}
               

            </h2>

        </div>
        </>
    )
}
export default TreeArrowHeader