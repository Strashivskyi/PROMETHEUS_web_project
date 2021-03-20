import React, { useEffect, useState } from 'react'
import app from '../../../Firebase/firebase'
import ProtocolItemTemplate from './ProtocolItemTemplate'

import { Link } from 'react-router-dom'
import ArrowHeaderTemplate from './ArrowHeaderTemplate'
import HeaderHomeTemplate from '../../Header/HeaderHomeTemplate'

import ListMoreInfoPrivate from "./ListMoreInfoPrivate";
import ListMoreInfoPublic from "./ListMoreInfoPublic";
export default function ListMoreInfoTemplate() {
    let test = []

    const [protocols, setProtocols] = useState([])
    if (localStorage.getItem("templateType") == "private") {
        return (<>
<ListMoreInfoPrivate/>
                </>)
    }
    if (localStorage.getItem("templateType") == "public") {
        return (<>
        <ListMoreInfoPublic/>
                </>)
    }

}