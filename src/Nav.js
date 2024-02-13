import React, { useEffect, useState } from 'react'
import './css/Nav.css'
import { auth } from './firebase'

function Nav() {
    const [show, setShow] = useState(false)
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)

        return () => {
            window.removeEventListener('scroll', transitionNavbar)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img src="/logo.png" alt="" className='logo' />
                <img src="/avatar.png" alt="" onClick={e => { auth.signOut() }} className='nav_avatar' />
            </div>
        </div>
    )
}

export default Nav
