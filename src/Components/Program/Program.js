import ProgramHeader from "../Header/ProgramHeader";
import "./Program.css"
import Arrow from "../../assets/arrow.png";
import Delete from "../../assets/delete.png";

import { Link } from "react-router-dom";


function SingleProgram() {
    return (
        <>
            <ProgramHeader />
            <div className="program_upper_flex_container">
                <h2 style={{ marginLeft: "4rem" }}><Link to="/" className="patients_link">Пацієнти</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2><Link to="patient" className="patients_link">Галя Теодозівна</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2 style={{ color: "#6F6F6F" }}>Галя Теодозівна</h2>
            </div>
            <div className="program_big_flex_container">
                <div className="element_name"> Протокол 1.  Поведінка слухача .  Відкликатися на ім’я</div>
                <div className="each_element_grid_container">

                    <div style={{ backgroundColor: "#EEEEEE" }} className="element_name">Сфера розвитку</div>
                    <div style={{ backgroundColor: "#EEEEEE" }} className="element_value">Поведінка слухача</div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Навик:</div>
                    <div style={{ marginTop: "1rem" }} className="element_value">Відкликатися на ім’я</div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Метод:</div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_value">Список інструкцій</div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Бажана реакція:</div>
                    <div style={{ marginTop: "1rem" }} className="element_value">Дитина буде встановлювати...</div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Критерій узагальнення навику: </div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_value">
                        <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}><ol style={{
                            fontFamily: "Inter", marginTop: "0.3rem", marginLeft: "-0.9rem",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "24px",
                            lineHeight: "29px"
                        }}>
                             <li><div className="step_grid_container">
                                <div>Дитина демонструє навик ще з одним вчителем</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <li><div className="step_grid_container">
                                <div>Демонструє навик з 3-а людьми в 3-х різних ситуаціях (вдома, на занятті, на дитячому майданчику)</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <li><div className="step_grid_container">
                                <div>Узагальнюємо навик в різних ситуаціях, з різними продуктами та людьми</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                        </ol> 
                        <div style={{display:"flex", flexDirection: "row", marginLeft:"20px"}}>
                            <button className="add_button"><h1 style={{ marginTop:"5px", marginBottom: "5px", textAlign: "center", width:"30px", color: "#4d4d4d" }}>+</h1></button>
                            <div className="transparent_input">
                            <input type="text" name="name" placeholder="Додати критерій...." />
                            </div>
                            </div> 
                        </div>
                    </div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Рівні інтенсивності підказки:</div>
                    <div style={{ marginTop: "1rem", }} className="element_value">Оберіть інтервал часу або тип виконання:<select style={{
                        marginLeft: "0.5rem", background: "#F8FCFF",
                        border: "2px solid #CCE9FF",
                        boxSizing: "border-box",
                        height: "52px",
                        fontSize: "24px",
                        lineHeight: "29px",
                        padding: "10px"
                    }}>
                        <option>0 секунд</option>
                        <option>2 секунди</option>
                        <option>4 секунди</option>
                        <option>6 секунд</option>
                        <option>Самостійна реакція</option>
                    </select>
                    </div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Критерій зниження рівня інтенсивності підказки:</div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_value">89% самостійних реакцій на навчальному рівні під час 3-х сесій.</div>
                    <div style={{ marginTop: "1rem" }} className="element_name">Критерій підвищення рівня інтенсивності підказки:</div>
                    <div style={{ marginTop: "1rem" }} className="element_value">Менше, ніж 89% правильних відповідей на навчальному рівні протягом 2-x сесій.</div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Спосіб забирання підказки:</div>
                    <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name"><select style={{
                        marginLeft: "0.5rem", background: "#F8FCFF",
                        border: "2px solid #CCE9FF",
                        boxSizing: "border-box",
                        height: "52px",
                        fontSize: "24px",
                        lineHeight: "29px",
                    }}>
                        <option>Тимчасова затримка</option>
                        <option>Від найменшої до найбільшої</option>
                    </select></div>
                    <div className="element_name">Стимули до етапів</div>
                    <div className="element_value">
                        <ul>

                            <li><div className="stymul_grid_container">
                                <div>Apple</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <li><div className="stymul_grid_container">
                                <div>Banana</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />
                            </div>
                            </li>
                            <div style={{display:"flex", flexDirection: "row"}}>
                            <button className="add_button"><h1 style={{ marginTop:"5px", marginBottom: "5px", textAlign: "center", width:"30px", color: "#4d4d4d" }}>+</h1></button>
                            <div className="transparent_input">
                            <input type="text" name="name" placeholder="Додати стимул...." />
                            </div>
                            </div>
                        </ul>
                    </div>
                    <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Опис етапів</div>
                    <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Покликати дитину на ім’я , підійти до вас, за допомогою жестів та міміки , використовуючи якісь заохочуючі предмети (ви маєте спокійно і чітко вимовити кожну літеру імені дитини)(може бути улюблена іграшка) </div>
                    {/*step 1*/}
                    <div className="element_name">Етап 1</div>
                    <div className="element_value"></div>
                    <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                    <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Повторіть інструкцію і негайно підкажіть за допомогою запланованої підказки (Фізична)</div>
                    <div className="element_name">Інструкції до етапу::</div>
                    <div className="element_value">
                        <ol>

                            <li><div className="step_grid_container">
                                <div>Для введення першої картки будуть потрібні 2 дорослих. Один - комунікативний партнер, інший - фея. </div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <li><div className="step_grid_container">
                                <div>Навпроти дитини сидить комунікативний партнер і грає іграшкою або тримає мотиваційний предмет. На столі лежить картка PECS із зображенням цієї іграшки. Позаду дитини знаходиться фея</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <div style={{display:"flex", flexDirection: "row"}}>
                            <button className="add_button"><h1 style={{ marginTop:"5px", marginBottom: "5px", textAlign: "center", width:"30px", color: "#4d4d4d" }}>+</h1></button>
                            <div className="transparent_input">
                            <input type="text" name="name" placeholder="Додати інструкцію...." />
                            </div>
                            </div>
                        </ol>
                    </div>
                    {/*step 2*/}
                    <div className="element_name">Етап 2</div>
                    <div className="element_value"></div>
                    <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                    <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Повторіть інструкцію і негайно підкажіть за допомогою запланованої підказки (Фізична)</div>
                    <div className="element_name">Інструкції до етапу::</div>
                    <div className="element_value">
                        <ol>

                            <li><div className="step_grid_container">
                                <div>Для введення першої картки будуть потрібні 2 дорослих. Один - комунікативний партнер, інший - фея. </div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <li><div className="step_grid_container">
                                <div>Навпроти дитини сидить комунікативний партнер і грає іграшкою або тримає мотиваційний предмет. На столі лежить картка PECS із зображенням цієї іграшки. Позаду дитини знаходиться фея</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <div style={{display:"flex", flexDirection: "row"}}>
                            <button className="add_button"><h1 style={{ marginTop:"5px", marginBottom: "5px", textAlign: "center", width:"30px", color: "#4d4d4d" }}>+</h1></button>
                            <div className="transparent_input">
                            <input type="text" name="name" placeholder="Додати інструкцію...." />
                            </div>
                            </div>
                        </ol>
                    </div>
                    {/*step 3*/}
                    <div className="element_name">Етап 3</div>
                    <div className="element_value"></div>
                    <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                    <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Повторіть інструкцію і негайно підкажіть за допомогою запланованої підказки (Фізична)</div>
                    <div className="element_name">Інструкції до етапу::</div>
                    <div className="element_value">
                        <ol>

                            <li><div className="step_grid_container">
                                <div>Для введення першої картки будуть потрібні 2 дорослих. Один - комунікативний партнер, інший - фея. </div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <li><div className="step_grid_container">
                                <div>Навпроти дитини сидить комунікативний партнер і грає іграшкою або тримає мотиваційний предмет. На столі лежить картка PECS із зображенням цієї іграшки. Позаду дитини знаходиться фея</div>
                                <img src={Delete} height="15" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                            </div>
                            </li>
                            <div style={{display:"flex", flexDirection: "row"}}>
                            <button className="add_button"><h1 style={{ marginTop:"5px", marginBottom: "5px", textAlign: "center", width:"30px", color: "#4d4d4d" }}>+</h1></button>
                            <div className="transparent_input">
                            <input type="text" name="name" placeholder="Додати інструкцію...." />
                            </div>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </>

    );
};
export default SingleProgram;