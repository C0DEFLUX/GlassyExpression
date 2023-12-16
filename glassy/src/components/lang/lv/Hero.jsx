import React, { useState } from 'react';
import HeroImg from '../../../assets/img/hero.jpg'

function Hero() {


    return (
        <div className="h-[90vh] relative">
            <img className="h-full w-full object-cover brightness-[80%]" src={HeroImg} alt="dasda" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col gap-6">
                <h1 className="text-4xl font-semibold lg:text-6xl">Stikla kapakmeņi un memoriāļi</h1>
                <div className="flex justify-center gap-8">
                    <a href="#work"><button className="hero-btn">Projekti</button></a>
                    <a href="#contact"><button className="hero-btn">Kontakti</button></a>
                </div>
            </div>
        </div>
    )
}

export default Hero;