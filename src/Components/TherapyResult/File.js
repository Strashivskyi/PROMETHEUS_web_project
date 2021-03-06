import React from 'react'
import './File.css'

const File = ({ file, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    const exportExcel = (someValue,file) => {
        console.log(`${someValue}/${file.toString()}`)
        fetch(`https://john-steck-api.herokuapp.com/get_files/${someValue}/${file.toString()}`).then((data) => {
            console.log(data.status)
        })
    }
 
    return (
        <ul className="list-group mb-4">
            <li className="list-group-item">
                <form
                className="protocol_text"   
                onClick={()=>(exportExcel(localStorage.getItem('child'),file))}
                >
                    <input
                        type="submit"
                        value={file.toString()}
                        className="download-button"
                    />
                </form>
            </li>
        </ul>
    )
}

export default File
