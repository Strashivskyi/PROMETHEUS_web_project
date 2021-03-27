import React from 'react'
import {Col} from 'react-bootstrap'
import {storage} from '../../Firebase/firebase'
import Delete from '../../assets/trash.svg'

import close_img from '../../assets/cancel.svg'
import avi from '../../assets/avi.svg'
import csv from '../../assets/csv.svg'
import docx from '../../assets/docx.svg'
import exe from '../../assets/exe.svg'
import excel from '../../assets/exel.svg'
import html from '../../assets/html.svg'
import file from '../../assets/file1.svg'
import jpg from '../../assets/jpg.svg'
import mp3 from '../../assets/mp3.svg'
import mp4 from '../../assets/mp4.svg'
import pdf from '../../assets/pdf.svg'
import png from '../../assets/png.svg'
import txt from '../../assets/txt.svg'
import zip from '../../assets/zip.svg'

const getFileExtension = (filename) => {
    return filename.slice(
        (Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1
    )
}

const FileExtensionsArray = {
    avi: ['avi'],
    csv: ['csv'],
    docx: ['docx', 'docm', 'doc', 'dotx', 'dotm', 'dot', 'DOC', 'DOCX'],
    exe: ['exe'],
    excel: [
        'excel',
        'xlsx',
        'xlsm',
        'xlsb',
        'xls',
        'xml',
        'xltx',
        'xltm',
        'xlt',
        'xlx',
        'XLSX',
        'XLX',
    ],
    html: ['html'],
    jpg: ['jpg', 'jpeg'],
    mp3: ['mp3'],
    mp4: ['mp4'],
    pdf: ['pdf'],
    png: ['png'],
    txt: ['txt', 'log'],
    zip: ['zip', 'rar'],
}
// var n = fruits.includes("Mango");

const getFileIcon = (fileExtension) => {
    if (FileExtensionsArray.avi.includes(fileExtension)) {
        return avi
    } else if (FileExtensionsArray.csv.includes(fileExtension)) {
        return csv
    } else if (FileExtensionsArray.docx.includes(fileExtension)) {
        return docx
    } else if (FileExtensionsArray.exe.includes(fileExtension)) {
        return exe
    } else if (FileExtensionsArray.excel.includes(fileExtension)) {
        return excel
    } else if (FileExtensionsArray.html.includes(fileExtension)) {
        return html
    } else if (FileExtensionsArray.jpg.includes(fileExtension)) {
        return jpg
    } else if (FileExtensionsArray.mp3.includes(fileExtension)) {
        return mp3
    } else if (FileExtensionsArray.mp4.includes(fileExtension)) {
        return mp4
    } else if (FileExtensionsArray.pdf.includes(fileExtension)) {
        return pdf
    } else if (FileExtensionsArray.png.includes(fileExtension)) {
        return png
    } else if (FileExtensionsArray.txt.includes(fileExtension)) {
        return txt
    } else if (FileExtensionsArray.zip.includes(fileExtension)) {
        return zip
    } else {
        return file
    }
}

function deleteFile(filename, url, folder = 'docs') {
    let answer = window.confirm('Видалити файл?')
    if (answer) {
        let fileRef = storage.refFromURL(url)
        // console.log("File in database before delete exists : " + fileRef.exists())
        fileRef
            .delete()
            .then(function () {
                // File deleted successfully
                console.log('File Deleted')
            })
            .catch(function (error) {
                console.log(error)
            })
    } else {
        console.log('Помилка видалення файлу')
    }
}

const VBmapFile = ({filename, timeCreated, updated, url}) => (
    <Col md="auto" sm={5} xs={10} className="file-box ">
        <img
            src={getFileIcon(getFileExtension(filename))}
            className="file-img "
            alt="file image"
        />
        <img
            src={Delete}
            id="delete-file-img"
            onClick={() => deleteFile(filename, url)}
            className="close-img"
            alt="close"
        />
        <span className="file-name">{filename}</span>
    </Col>
)

export default VBmapFile

// Create a reference to the file to delete
//     let desertRef = storage.child(`files/desert.jpg`);
//     // Delete the file
//     desertRef.delete().then(() => {
//         // File deleted successfully
//     }).catch((error) => {
//         console.log(error)
//     });
//     alert("close")
