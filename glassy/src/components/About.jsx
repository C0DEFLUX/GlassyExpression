import React from 'react'
import AboutImg from '../assets/img/about_img.jpg'


function About() {

    return (
        <section className="flex flex-col items-center">
            <div className="container min-h-screen flex pt-20 flex-wrap">
                <div className="about-text-wrapper flex flex-col gap-10 w-full lg:w-1/2 lg:mt-20">
                    <h2 className="text-5xl font-medium lg:mb-8">A little about us</h2>
                    <div className="flex gap-4 mb-16 lg:mb-0">
                        <div className="about-text-row w-[300px] h-[6px] bg-black mt-2"></div>
                        <div className="about-text flex flex-col gap-8 pr-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem illo itaque recusandae! Accusamus eveniet iure mollitia nam quae quo reiciendis saepe voluptatum! Beatae ipsum iure laudantium magnam nesciunt quidem repellat sed, sit unde voluptatum?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nam quo veniam vitae? Ad architecto libero mollitia nulla odit officia quis quos sunt unde voluptas.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, placeat?</p>
                            <a className="underline" href="mailto:glassyexpression@gmail.com">glassyexpression@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="about-image-container flex justify-end w-full mb-20 lg:w-1/2 lg:h-[45rem]">
                    <img className="h-auto object-contain lg:h-full" src={AboutImg} alt="About section image"/>
                </div>
            </div>
        </section>
    )

}

export default About;