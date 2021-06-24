import {Link} from 'react-router-dom'
import Arrow from '../../assets/arrow.png'
import './ArrowHeader.css'
function TreeArrowHeader({patient, page}) {
    return (
        <>
            {' '}
            <Link to="/" className="patients_link_second arrow-header col-auto">
                Пацієнти
            </Link>
            <img src={Arrow} height="18" className="arrow-header col-auto" />
            <Link
                to="/patient"
                className="patients_link_second arrow-header col-auto"
            >
                {patient}
            </Link>
            <img src={Arrow} height="18" className="arrow-header col-auto" />
            <div className="patients_link_second patients_link_grey arrow-header col-auto">
                {page}
            </div>
        </>
    )
}
export default TreeArrowHeader
