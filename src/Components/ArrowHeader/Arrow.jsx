import Arrow from '../../assets/arrow.png'
import {Link} from 'react-router-dom'
import './ArrowHeader.css'
function ArrowHeader({patient}) {
    return (
        <>
            {' '}
            <div className=" container arrow-header">
                <div className="row">
                    <Link to="/" className="patients_link_second col-auto">
                        Пацієнти
                    </Link>

                    <img src={Arrow} height="18" className="col-auto" />
                    <div className="patients_link_second patients_link_grey col-auto">
                        {patient.Name}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ArrowHeader
