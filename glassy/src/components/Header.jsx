import React, {useEffect, useState} from 'react'
import Logo from '../assets/img/logo_small.png'
import Fb from '../assets/img/fb_icon.svg'
import Ig from '../assets/img/ig_icon.svg'
import {useLocation, useNavigate} from "react-router-dom";



function Header() {

    const history = useNavigate()
    const location = useLocation();

    const [selectedLanguage, setSelectedLanguage] = useState('');

    useEffect(() => {
        const pathname = location.pathname;
        const language = pathname.substr(1);
        setSelectedLanguage(language);
    }, [location.pathname]);

    function handleLanguageChange(event) {
        const selectedLanguage = event.target.value;
        history(`/${selectedLanguage}`);
    }


    return (
        <header className="absolute top-0 left-0 z-40 min-h-[6rem] w-full flex justify-between items-center px-28 bg-white text-black">
            <div className="flex gap-8">
                <div className="nav-logo">
                    <img className="h-[60px]" src={Logo} alt="GlassyExpression Logo"/>
                </div>
                <div className="flex items-center">
                    <a href="tel:+37127909600">+371 27 909 600</a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=100089113908817" target="_blank"><img className="h-[18px]" src={Fb} alt="Facebook icon"/></a>
                <a href="https://www.instagram.com/glassyexpression" target="_blank"><img className="h-[22px]" src={Ig} alt="Instagram icon"/></a>
                <select value={selectedLanguage} onChange={handleLanguageChange} name="lang" id="myLangSelect">
                    <option value="">LAT</option>
                    <option value="en" >ENG</option>
                    <option value="ru">RU</option>
                </select>
            </div>
        </header>
    )
}

export default Header;