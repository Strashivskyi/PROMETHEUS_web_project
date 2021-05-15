import Duplicate from '../../../assets/duplicate_task.svg'
import Visible from '../../../assets/visible.svg'
import UnVisible from '../../../assets/unVisible.svg'
import Delete from '../../../assets/delete.svg'
import { useState, useEffect } from 'react'
import app from '../../../Firebase/firebase'
import { Link } from 'react-router-dom'
import EditIcon from '../../../assets/edit_new.svg'
import SecondModal from '../../ModalWindow/SecondModal'
export default function HistoryProtocolItem({

    number,
    sphereOfDevelopment,
    skill,
 

}) {
    let [colorItem, setColorItem] = useState('')

    if (+number % 2 != true) {
        colorItem = '#EEEEEE'
    }


    return (
        <>
            <div className="protocol_item" style={{ backgroundColor: colorItem }}>
                <p className="protocol_item_text ">
                    Протокол {number}.{sphereOfDevelopment}.{skill}
                </p>
                <div className="icon_place">
                </div>
            </div>
        </>
    )
}
