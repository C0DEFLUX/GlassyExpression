import React from 'react'
import Logo from '../assets/img/logo_small.png'
import Fb from '../assets/img/fb_icon.svg'
import Ig from '../assets/img/ig_icon.svg'


function Header() {
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
                <select name="lang" id="myLangSelect">
                    <option value="lat">LAT</option>
                    <option value="eng">ENG</option>
                    <option value="ru">RU</option>
                </select>
            </div>
        </header>
    )
}

export default Header;