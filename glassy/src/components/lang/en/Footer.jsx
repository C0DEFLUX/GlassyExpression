import React from 'react'
import Fb from "../../../assets/img/fb_icon.svg";
import Ig from "../../../assets/img/ig_icon.svg";
import ChevUp from '../../../assets/img/chev_up.svg'

function Footer() {


    return (
        <footer id="contact" className="min-h-[20rem] border-t-[2px] border-gray-200 relative flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center font-bold absolute top-[-35px] bg-white px-10 left-1/2 transform -translate-x-1/2 lg:px24 md:top-[-18px] lg:px-24">Glassy Expression</h1>
            <div className="footer-wrapper gap-8 mt-20 flex flex-col justify-between items-center container lg:flex-row lg:gap-0">
                <div className="footer-info items-center flex flex-col gap-4 w-[20rem] lg:items-start">
                    <a href="tel:+37127909600">+371 27 909 600</a>
                    <a href="mailto:glassyexpression@gmail.com">glassyexpression@gmail.com</a>
                </div>
                <div className="footer-socials flex gap-10 items-center">
                    <a href="https://www.facebook.com/profile.php?id=100089113908817" target="_blank"><img className="h-[28px]" src={Fb} alt="Facebook icon"/></a>
                    <a href="https://www.instagram.com/glassyexpression" target="_blank"><img className="h-[32px]" src={Ig} alt="Instagram icon"/></a>
                </div>
                <div className="footer-nav mb-4 flex flex-col items-center gap-4 w-[20rem] lg:items-end lg:mb-0">
                    <a className="underline" href="/">Home</a>
                    <a className="underline" href="#about">About</a>
                    <a className="underline" href="#work">Work</a>
                    <a className="underline" href="#contact">Contact</a>
                </div>

            </div>
            <a  onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }} className="mb-4 flex gap-2 items-center font-bold" href=""><p>BACK TO TOP</p> <img className="h-[26px]" src={ChevUp} alt="Chevron up"/></a>
            <p className="text-center">© 2023. All Rights Reserved.</p>
        </footer>
    )

}

export default Footer