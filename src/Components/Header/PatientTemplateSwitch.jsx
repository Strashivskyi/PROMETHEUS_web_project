import { Link } from "react-router-dom"
import { GoPrimitiveDot } from "react-icons/go";
function PatientTemplateSwitch(params) {

    if (localStorage.getItem("homeType") == "home") {
        return (
            <>
                <div style={{
                    width: "35%",
                    height: "5%",
                    display: "flex",
                    flexDirection: "row",
                    alignSelf:"center",
                    justifyContent: "center",
                    fontSize: "80%"
                }}>
                    <Link to="/home"
                        style={{ color: '#6F6F6F' }}>
                        <h1>
                            Пацієнти
                        </h1>
                    </Link>
                    <div style={{
                        alignSelf: "center",
                        margin: "1.5% 1% 0 1%"
                    }}>
                        <GoPrimitiveDot />
                    </div>
                    <Link to="/home-template"  style={{ color: "black" }}><h1
                    >Шаблони</h1>
                    </Link>
                </div>
            </>
        )
    }
    if (localStorage.getItem("homeType") != "home" ) {

        return (
            <>
                <div style={{
                    width: "30%",
                    height: "5%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    fontSize: "80%"
                }}>
                    <Link to="/home"
                        style={{ color:"black" }}>
                        <h1>
                            Пацієнти
                        </h1>
                    </Link>
                    <div style={{
                        alignSelf: "center",
                        margin: "1.5% 1% 0 1%"
                    }}>
                        <GoPrimitiveDot />
                    </div>
                    <Link to="/home-template"  style={{ color:  '#6F6F6F' }}><h1
                    >Шаблони</h1>
                    </Link>
                </div>
            </>
        )
    }
   
}
export default PatientTemplateSwitch