import React, {useEffect, useState} from 'react'
import app from '../../../Firebase/firebase'

import ArrowHeaderTemplate from './ArrowHeaderTemplate'
import HeaderHomeTemplate from '../../Header/HeaderHomeTemplate'
import ProgramTemplateViewPrivate from './ProgramTemplateViewPrivate'
import ProgramTemplateViewPublic from './ProgramTemplateViewPublic'
import ProgramEditableTemplate from './ProgramEditableTemplate'

// MAIN COMPONENT
export default function ProgramTemplateView() {
    if (localStorage.getItem('templateType') == 'private') {
        return (
            <>
                <ProgramEditableTemplate />
            </>
        )
    }
    if (localStorage.getItem('templateType') == 'public') {
        return (
            <>
                <ProgramTemplateViewPublic />
            </>
        )
    }
}

//  -------
// |  END  |
//  -------
