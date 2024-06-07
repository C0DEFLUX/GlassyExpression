import React, {useEffect, useState} from 'react'
import Header from '../Header'
import Footer from "./Footer";
import {getPreferredLanguage, setPreferredLanguage} from "../../utils/languageUtils";
import HeroImg from "../../assets/img/hero.jpg";
import swiper_img_3 from "../../assets/img/swiper_img_3.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import img from "../../assets/img/about_img.jpg";
import swiper_img_2 from "../../assets/img/swiper_img_2.jpg";
import swiper_img_1 from "../../assets/img/swiper_img_1.jpg";
import swiper_img_4 from "../../assets/img/swiper_img_4.jpg";
import {useNavigate} from "react-router-dom";
import Fb from "../../assets/img/fb_icon.svg";
import Ig from "../../assets/img/ig_icon.svg";
import ChevUp from "../../assets/img/chev_up.svg";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const loadLanguage = async (language) => {
    const response = await fetch(`/locales/${language}.json`);
    return response.json();
};

const Page = () => {

    const navigate = useNavigate()

    const openCatalog = () => {
        navigate(`/catalog`)
    }

    const [language, setLanguage] = useState(getPreferredLanguage());
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        const fetchTranslations = async () => {
            const data = await loadLanguage(language);
            setTranslations(data);
        };

        fetchTranslations();
    }, [language]);

    const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        setPreferredLanguage(newLanguage);
    };


    return (
        <>
            <Header currentLanguage={language} onChangeLanguage={handleChangeLanguage}/>
            <div className="h-[90vh] relative">
                <img className="h-full w-full object-cover brightness-[80%]" src={HeroImg} alt="dasda" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold lg:text-6xl">{translations.hero_title}</h1>
                    <div className="flex justify-center gap-8">
                        <button onClick={openCatalog} className="hero-btn">{translations.hero_btn_products}</button>
                        <a href="#contact"><button className="hero-btn">{translations.hero_btn_contact}</button></a>
                    </div>
                </div>
            </div>
            <section id="about" className="flex flex-col items-center">
                <div className="container min-h-screen flex pt-20 flex-wrap">
                    <div className="about-text-wrapper flex flex-col gap-10 w-full lg:w-1/2 lg:mt-20">
                        <h2 className="text-5xl font-medium lg:mb-8">{translations.about_title}</h2>
                        <div className="flex gap-4 mb-16 lg:mb-0">
                            <div className="about-text-row w-[300px] h-[6px] bg-black mt-2"></div>
                            <div className="about-text flex flex-col gap-8 pr-0">
                                <p>{translations.about_text_1}</p>
                                <p>{translations.about_text_2}</p>
                                <p>{translations.about_text_3}</p>
                                <a className="underline" href="#contact">{translations.about_btn}</a>
                            </div>
                        </div>
                    </div>
                    <div className="about-image-container flex justify-end w-full mb-20 lg:w-1/2 lg:h-[45rem]">
                        <img className="h-auto object-contain lg:h-full" src={swiper_img_3} alt="About section image"/>
                    </div>
                </div>
            </section>
            <section id="work" className="flex flex-col items-center p-2">
                <div className="container flex flex-col min-h-[90vh] gap-12 lg:mt-20">
                    <h2 className="text-5xl text-center font-medium">{translations.project_title}</h2>
                    <div className="slider-wrapper">
                        <Swiper
                            className="sample-slider flex"
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                            loop={true}
                            navigation={true}
                            autoplay={{
                                "delay": 2000,
                                "disableOnInteraction": false,
                                "pauseOnMouseEnter": true,
                                "stopOnLastSlide": false,
                                "waitForTransition": true
                            }}
                            modules={[Autoplay, Navigation, Pagination]}
                            breakpoints={{
                                1: {slidesPerView: 1,},
                                768: {slidesPerView: 2,},
                                1024: {slidesPerView: 3, spaceBetween: 30},
                            }}
                        >
                            <SwiperSlide>
                                <div className="h-[65vh]">
                                    <img className="object-cover" src={img} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[65vh]">
                                    <img className="object-cover" src={swiper_img_2} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div  className="h-[65vh]">
                                    <img className="object-cover" src={swiper_img_3} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[65vh]">
                                    <img className="object-cover" src={swiper_img_1} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[65vh]">
                                    <img className="object-cover" src={swiper_img_4} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div  className="h-[65vh]">
                                    <img className="object-cover" src={swiper_img_2} alt=""/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
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
                        <a className="underline" href="/">{translations.footer_btn_home}</a>
                        <a className="underline" href="#about">{translations.footer_btn_about}</a>
                        <a className="underline" href="#work">{translations.footer_btn_work}</a>
                        <a className="underline" href="#contact">{translations.footer_btn_contact}</a>
                    </div>

                </div>
                <a  onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} className="mb-4 flex gap-2 items-center font-bold" href=""><p>{translations.footer_back_to_top}</p> <img className="h-[26px]" src={ChevUp} alt="Chevron up"/></a>
                <p className="text-center">© 2023. All Rights Reserved.</p>
            </footer>
        </>
    )

}

export default Page