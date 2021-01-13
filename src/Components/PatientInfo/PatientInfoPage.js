import React from "react"
import "./PatientInfoPage.css";
import Header from "../Header/Header";
import Arrow from "../../assets/arrow.png";
import Kid from "../../assets/kid.jpg";
import {Link} from "react-router-dom";


function PatientInfoPage() {

    return ( 
        <>
        <Header/>
        <div className = "patient_upper_flex_container">
        <h2 style={{marginLeft: "4rem"}}><Link to="/" className="patients_link">Пацієнти</Link></h2>
        <img src={Arrow} height="20" style={{marginLeft: "30px", marginRight: "30px" ,marginTop: "28px", color:"black"}}/>
        <h2 style={{color: "#6F6F6F"}}>Ліля Чорна</h2>
        </div>
        <div className = "patient_grid_container">
        <img src={Kid} height="270"/>
        <div className = "column_outer_flex_container">
        <div className = "kid_name" > Лілія Чорна </div> 
        <div className="diagnosis_flex_container">
            <h7 className="">Діагноз: &nbsp;&nbsp;&nbsp;&nbsp;</h7>
            <div style={{color: "#6F6F6F"}}>Аутизм</div>
        </div>
        <div className="zebra_rows_flex_container" style={{backgroundColor: "#EEEEEE"}}>
        <div>Батьки:</div>
        <div className="zebra_rows_parents_data">Людмила Чорна</div>
        </div>
        <div className="zebra_rows_flex_container">
        <div>Стать:</div>
        <div className="zebra_rows_gender_data">жіноча</div>
        </div>
        <div className="zebra_rows_flex_container" style={{backgroundColor: "#EEEEEE"}}>
        <div>Вік:</div>
        <div className="zebra_rows_age_data">5 років</div>
        </div>
        <div className="zebra_rows_flex_container">
        <div>Дата народження:</div>
        <div className="zebra_rows_birthday_data">10/10/2010</div>
        </div>
        <div className="zebra_rows_flex_container" style={{backgroundColor: "#EEEEEE"}}>
        <div>Місто:</div>
        <div className="zebra_rows_town_data">Львів</div>
        </div>
        <div className="zebra_rows_flex_container">
        <div>Країна:</div>
        <div className="zebra_rows_country_data">Україна</div>
        </div>
        </div>
        {/* second column */}
        <div className = "second_column_outer_flex_container">
        <div className="zebra_rows_flex_container" style={{backgroundColor: "#EEEEEE"}}>
        <div>Вага:</div>
        <div className="zebra_rows_weight_data">15</div>
        </div>
        <div className="zebra_rows_flex_container">
        <div>Зріст:</div>
        <div className="zebra_rows_height_data">137 см</div>
        </div>
        <div className="zebra_rows_flex_container" style={{backgroundColor: "#EEEEEE"}}>
        <div>Група крові:</div>
        <div className="zebra_rows_blood_data">3+</div>
        </div>
        </div>
        </div>
        <div className="patient_page_buttons">
        <Link to="#" className="patient_page_buttons_therapy">Результати терапії</Link>
        <Link to="#" className="patient_page_buttons_program">Програма</Link>
        </div>
        </>

    );
};
export default PatientInfoPage;