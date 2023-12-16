import React from 'react'
import AboutImg from '../../../assets/img/about_img.jpg'


function About() {

    return (
        <section className="flex flex-col items-center">
            <div className="container min-h-screen flex pt-20 flex-wrap">
                <div className="about-text-wrapper flex flex-col gap-10 w-full lg:w-1/2 lg:mt-20">
                    <h2 className="text-5xl font-medium lg:mb-8">A little about us</h2>
                    <div className="flex gap-4 mb-16 lg:mb-0">
                        <div className="about-text-row w-[300px] h-[6px] bg-black mt-2"></div>
                        <div className="about-text flex flex-col gap-8 pr-0">
                            <p>Glassy Expression is a company that understands the significance of our beloved memorial places and how important it is to remember the departed.</p>
                            <p>In our creative approach, we combine traditional techniques with innovative design solutions to create remarkable memorial works that reflect the spirituality and resilience of the individual. Each glass gravestone and memorial we create is a testament to our unwavering commitment to quality. We use only excellent materials to ensure clarity and durability. We believe that each memorial should be as unique as the person it commemorates.</p>
                            <p>Glassy Expression understands that the funeral process is very personal and sensitive. With compassion and empathy, our team is here to support you throughout the creation process, offering assistance, understanding, and attentive listening. We believe that open communication and collaboration are essential to create a memorial that exceeds your expectations and brings peace during these difficult times.</p>
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