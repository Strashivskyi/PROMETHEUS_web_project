import {Link} from 'react-router-dom'
import Arrow from '../../../assets/arrow.png'

function ArrowHeaderEdit() {
    return (
        <>
            <div className="patient_upper_flex_container">
                <h2 style={{marginLeft: '6rem'}}>
                    <Link
                        to="/vb-mapp"
                        className="patients_link"
                        onClick={() =>
                            localStorage.setItem('templateType', 'private')
                        }
                    >
                        Шаблони
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
                <Link to="/template-more-info">
                    <h2 style={{color: '#6F6F6F'}}>Редагування шаблона</h2>
                </Link>
            </div>
        </>
    )
}
export default ArrowHeaderEdit
