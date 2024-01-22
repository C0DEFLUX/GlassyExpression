import React from 'react'
import swiper_img_3 from '../../../assets/img/swiper_img_3.jpg'


function About() {

    return (
        <section className="flex flex-col items-center">
            <div className="container min-h-screen flex pt-20 flex-wrap">
                <div className="about-text-wrapper flex flex-col gap-10 w-full lg:w-1/2 lg:mt-20">
                    <h2 className="text-5xl font-medium lg:mb-8">A little about us</h2>
                    <div className="flex gap-4 mb-16 lg:mb-0">
                        <div className="about-text-row w-[300px] h-[6px] bg-black mt-2"></div>
                        <div className="about-text flex flex-col gap-8 pr-0">
                            <p>Glassy Expression is a company that understands the importance of memorials to our loved ones and the importance of commemorating the departed.</p>
                            <p>In our creative approach, we combine traditional technologies with innovative design solutions to create amazing memorial works. We use only premium materials to ensure clarity and durability. We believe that every memorial should be as unique as the person it commemorates.</p>
                            <p>We believe that open communication and collaboration are essential to creating a memorial that exceeds your expectations and provides peace of mind during these difficult times.</p>
                            <a className="underline" href="#contact">Get in touch</a>
                        </div>
                    </div>
                </div>
                <div className="about-image-container flex justify-end w-full mb-20 lg:w-1/2 lg:h-[45rem]">
                    <img className="h-auto object-contain lg:h-full" src={swiper_img_3} alt="About section image"/>
                </div>
            </div>
        </section>
    )

}

export default About;