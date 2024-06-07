import React, {useEffect, useState} from 'react'
import Logo from '../assets/img/logo_small.png'
import Fb from '../assets/img/fb_icon.svg'
import Ig from '../assets/img/ig_icon.svg'
import {useLocation, useNavigate} from "react-router-dom";
import LanguageSelector from "./Helpers/LanguageSelector";

const Header = ({ currentLanguage, onChangeLanguage }) => {
    const navigate = useNavigate()

    const openHomePage = () => {
        navigate(`/`)
    }


    return (
        <header className="min-h-[6rem] w-full flex justify-center items-center bg-white text-black">
            <div className="container flex justify-between items-center lg:p-0 p-2">
                <div className="flex items-center flex-col sm:flex-row sm:space-x-5">
                    <div onClick={openHomePage} className="nav-logo flex items-center space-x-1 cursor-pointer">
                        <img className="h-[60px]" src={Logo} alt="GlassyExpression Logo"/>
                        <h1 className="text-xl">Glassy Expression</h1>
                    </div>
                    <div className="flex items-center mt-2">
                        <a className="" href="tel:+37127909600">+371 27 909 600</a>
                    </div>
                </div>
                <div className="flex items-center mt-4 sm:mt-0 justify-center sm:flex-row flex-col space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap">
                    <div className="flex space-x-2">
                        <a href="https://www.facebook.com/profile.php?id=100089113908817" target="_blank">
                            <img className="h-5 w-5" src={Fb} alt="Facebook icon"/>
                        </a>
                        <a href="https://www.instagram.com/glassyexpression" target="_blank">
                            <img className="h-5 w-5" src={Ig} alt="Instagram icon"/>
                        </a>
                    </div>
                    <LanguageSelector currentLanguage={currentLanguage} onChangeLanguage={onChangeLanguage} />
                </div>
            </div>
        </header>
    )
}

export default Header;