import "./Program.css"
import Arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";


function Program() {
    return (
        <>
            <Header/>
            <h3 style={{ marginLeft: "4rem" }}> Протокол 1.  Поведінка слухача .  Відкликатися на ім’я</h3>
            <div className="program_upper_flex_container">
                <h2 style={{ marginLeft: "4rem" }}><Link to="/" className="patients_link">Пацієнти</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2><Link to="patient" className="patients_link">Галя Теодозівна</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2 style={{ color: "#6F6F6F" }}>Галя Теодозівна</h2>
            </div>
            <div className="program_big_flex_container">
                <div className="each_element_grid_container">
                    <div style={{backgroundColor : "#EEEEEE" }} className="element_name">Сфера розвитку</div>
                    <div style={{backgroundColor : "#EEEEEE" }} className="element_value">Поведінка слухача</div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Навик:</div>
                    <div style={{ marginTop: "1rem" }} className="element_value">Відкликатися на ім’я</div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE" }} className="element_name">Метод:</div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE"}} className="element_value">Список інструкцій</div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Бажана реакція:</div>
                    <div style={{ marginTop: "1rem" }} className="element_value">Дитина буде встановлювати...</div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE" }} className="element_name">Критерій узагальнення навику: </div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE" }} className="element_name"></div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Рівні інтенсивності підказки:</div>
                    <div style={{ marginTop: "1rem", }} className="element_value">Оберіть інтервал часу або тип виконання:<select style={{ marginLeft: "0.5rem", background: "#F8FCFF",
                        border: "2px solid #CCE9FF",
                        boxSizing: "border-box",
                        height: "52px",
                        fontSize: "24px",
                        lineHeight: "29px",}}>
                        <option>0 секунд</option>
                        <option>2 секунди</option>
                        <option>4 секунди</option>
                        <option>6 секунд</option>
                        <option>Самостійна реакція</option>
                    </select>
                    </div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE" }} className="element_name">Критерій зниження рівня інтенсивності підказки:</div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE"}} className="element_value">89% самостійних реакцій на навчальному рівні під час 3-х сесій.</div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Критерій підвищення рівня інтенсивності підказки:</div>
                    <div style={{ marginTop: "1rem" }} className="element_value">Менше, ніж 89% правильних відповідей на навчальному рівні протягом 2-x сесій.</div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE" }} className="element_name">Спосіб забирання підказки:</div>
                    <div style={{ marginTop: "1rem", backgroundColor : "#EEEEEE" }} className="element_name"><select style={{ marginLeft: "0.5rem", background: "#F8FCFF",
                        border: "2px solid #CCE9FF",
                        boxSizing: "border-box",
                        height: "52px",
                        fontSize: "24px",
                        lineHeight: "29px",}}>
                        <option>Тимчасова затримка</option>
                        <option>Від найменшої до найбільшої</option>
                    </select></div>
                </div>
            </div>

        </>

    );
};
export default Program;