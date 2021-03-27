import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function ButtonsTemplate() {
    let decorPublic = 'none'
    let decorPrivate = 'none'

    if (localStorage.getItem('templateType') == 'public') {
        decorPublic = 'underline'
        decorPrivate = 'none'
    }
    if (localStorage.getItem('templateType') == 'private') {
        decorPrivate = 'underline'
        decorPublic = 'none'
    }
    return (
        <>
            <div className="buttons-template">
                <Link to="/home-template">
                    <button
                        id="temp-button-prv"
                        className="buttons-template-private"
                        onClick={() =>
                            localStorage.setItem('templateType', 'private')
                        }
                        style={{textDecoration: decorPrivate}}
                    >
                        Мої шаблони
                    </button>
                </Link>
                <Link to="/home-template">
                    <button
                        id="temp-button-pub"
                        className="buttons-template-public"
                        onClick={() =>
                            localStorage.setItem('templateType', 'public')
                        }
                        style={{textDecoration: decorPublic}}
                    >
                        Загальні шаблони
                    </button>
                </Link>
            </div>
        </>
    )
}
