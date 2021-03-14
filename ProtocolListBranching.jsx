import { useState, useEffect } from 'react'
import app from '../../Firebase/firebase'
import ProtocolListSuperVisor from './ProtocolList'
import ProtocolListTherapist from './ProtocolListTherapist'

export default function RenderProgramList() {

    if (localStorage.getItem('proffesion') == 'Supervisors') {
        return <ProtocolListSuperVisor />
    } else {
        return <ProtocolListTherapist />
    }
}
