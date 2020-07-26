import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo.png'

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
