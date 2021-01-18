import React from "react";
import Header from "../Header/Header";
import "./TherapyResult.css";
import Arrow from "../../assets/arrow.png";
import { Link, useHistory } from "react-router-dom";
import PaginationRounded from "./Pagination";

const TherapyResult = () => {
    var history = useHistory();

    return (
        <>
            <Header />
            <div className="patient_upper_flex_container">
                <h2 style={{ marginLeft: "4rem" }}>
                    <Link
                        to="/"
                        className="patients_link"
                        onClick={() =>
                            localStorage.removeItem("telegramUserName")
                        }
                    >
                        Пацієнти
                    </Link>
                </h2>
                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: "30px",
                        marginRight: "30px",
                        marginTop: "28px",
                        color: "black",
                    }}
                />

                <button
                    onClick={() => {
                        history.goBack();
                        localStorage.removeItem("telegramUserName");
                    }}
                    class="button_patient"
                >
                    <h2 style={{ color: "#6F6F6F" }}>
                        {localStorage.getItem("childName")}
                    </h2>
                </button>

                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: "30px",
                        marginRight: "30px",
                        marginTop: "28px",
                        color: "black",
                    }}
                />
                <h2>Результати терапії</h2>
            </div>
            <div className="container">
                <p class="choose-file-title">
                    Натисніть на файл, щоб завантажити його
                </p>
                <PaginationRounded />
            </div>
        </>
    );
};

export default TherapyResult;
