import {Link} from 'react-router-dom'
import Arrow from '../../assets/arrow.png'
function TreeArrowHeader({page }) {
    
    return (
        <>

        
         <div className="patient_upper_flex_container" style={{justifyContent: "left", margin: '1% 0 1% 0' }}>
            < h2>
                <Link to="/" className="patients_link">
                    Пацієнти
                                </Link>
            </h2>

            {page.map((pageElement)=>   (<> 
                
                <img
                    src={Arrow}
                    height="15"
                    style={{alignSelf:"center",margin:"0 0.3rem"}}
                />
                 <h2
                    className="patients_link"
    
                >
                    <Link to="/patient" className="patients_link">
                        {pageElement}
                    </Link></h2>
                </>)
                )}
        </div>
        </>
    )
}
export default TreeArrowHeader