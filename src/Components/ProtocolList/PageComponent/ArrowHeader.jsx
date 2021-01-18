import { Link } from "react-router-dom";
import Arrow from "../../../assets/arrow.png";
function ArrowHeader() {
    return (
        <>
            <div className="patient_upper_flex_container">
                <h2 style={{ marginLeft: "4rem" }}><Link to="/" className="patients_link">Пацієнти</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2 ><Link to="/patient" className="patients_link" style={{ color: "#6F6F6F" }}>{localStorage.getItem("childName")}</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2 >Програма</h2>
            </div>
        </>
    )
}
export default ArrowHeader