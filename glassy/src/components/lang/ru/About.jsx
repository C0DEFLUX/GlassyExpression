import React from 'react'
import AboutImg from '../../../assets/img/about_img.jpg'


function About() {

    return (
        <section id="about" className="flex flex-col items-center">
            <div className="container min-h-screen flex pt-20 flex-wrap">
                <div className="about-text-wrapper flex flex-col gap-10 w-full lg:w-1/2 lg:mt-20">
                    <h2 className="text-5xl font-medium lg:mb-8">Немного о нас</h2>
                    <div className="flex gap-4 mb-16 lg:mb-0">
                        <div className="about-text-row w-[300px] h-[6px] bg-black mt-2"></div>
                        <div className="about-text flex flex-col gap-8 pr-0">
                            <p>Glassy Expression — компания, которая понимает важность памятников нашим близким и важность поминовения ушедших.</p>
                            <p>В нашем творческом подходе мы сочетаем традиционные технологии с инновационными дизайнерскими решениями для создания удивительных мемориальных произведений. Мы используем только высококачественные материалы, чтобы обеспечить прозрачность и долговечность. Мы считаем, что каждый памятник должен быть таким же уникальным, как и человек, которому он посвящен.</p>
                            <p>Мы считаем, что открытое общение и сотрудничество необходимы для создания памятника, который превзойдет ваши ожидания и обеспечит душевное спокойствие в эти трудные времена.</p>
                            <a className="underline" href="#contact">Связаться</a>
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