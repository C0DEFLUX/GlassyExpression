import React, { useState } from 'react';
import HeroImg from '../../assets/img/hero.jpg'

function Hero() {


    return (
        <div className="h-[90vh] relative">
            <img className="h-full w-full object-cover brightness-[80%]" src={HeroImg} alt="dasda" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col gap-8">
                <h1 className="text-4xl font-semibold lg:text-6xl">Glass gravestones and memorials</h1>
                <div className="flex justify-center gap-8">
                    <button className="px-8 py-3 bg-white text-black hover:bg-neutral-200">Projects</button>
                    <button className="px-8 py-3 bg-white text-black hover:bg-neutral-200">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;