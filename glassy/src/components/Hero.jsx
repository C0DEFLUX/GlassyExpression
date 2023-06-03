import React from 'react';
import HeroImg from '../assets/img/hero.jpg'

function Hero() {
    return (
        <div className="h-[90vh]">
            <img className="h-full w-full object-cover " src={HeroImg} alt="dasda" />
        </div>
    )
}

export default Hero;