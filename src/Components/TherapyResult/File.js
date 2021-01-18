import React from "react";
import "./File.css";

const File = ({ file, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <ul className="list-group mb-4">
            <li className="list-group-item">
                <form
                    action={`http://127.0.0.1:5000/get_files/${localStorage.getItem(
                        "telegramUserName"
                    )}/${file.toString()}`}
                >
                    <input
                        type="submit"
                        value={file.toString()}
                        className="download-button"
                    />
                </form>
            </li>
        </ul>
    );
};

export default File;
