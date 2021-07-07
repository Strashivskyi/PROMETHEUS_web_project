import React from 'react'
import Header from '../Header/Header'
import './TherapyResult.css'
import Arrow from '../../assets/arrow.png'
import {Link} from 'react-router-dom'
import {withRouter, Redirect} from 'react-router'
import PaginationRounded from './Pagination'
import MobileHeader from '../Header/MobileHeader'
import TreeArrowHeader from '../ArrowHeader/TreeArrowHeader'
function TherapyResult({history}) {
    return (
        <>
            <MobileHeader />
            <Header />
            <div className="container">
                <div className="row terapy-top">
                    <TreeArrowHeader
                         page={[localStorage.getItem('childName'),'Результати терапії']}
                      
                    />
                    <div className="container_file">
                        <p class="choose-file-title">
                            Натисніть на файл, щоб завантажити його
                        </p>
                        <br />
                        <br />
                        <PaginationRounded history={history} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(TherapyResult)
