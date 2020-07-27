import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo.png'

const Header = (props) => {
    return (
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
