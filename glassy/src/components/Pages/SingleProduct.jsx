import React, {useEffect, useState} from 'react';
import Header from "../Header";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {getPreferredLanguage, setPreferredLanguage} from "../../utils/languageUtils";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Navigation, Thumbs } from 'swiper';
import img from "../../assets/img/about_img.jpg";
import Fb from "../../assets/img/fb_icon.svg";
import Ig from "../../assets/img/ig_icon.svg";
import ChevUp from "../../assets/img/chev_up.svg";
import {Loader} from "../Helpers";

SwiperCore.use([Navigation ,Thumbs]);

const loadLanguage = async (language) => {
    const response = await fetch(`/locales/${language}.json`);
    return response.json();
};

const SingleProduct = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const navigate = useNavigate()
    const params = useParams()
    const [item, setItem] = useState([])
    const [language, setLanguage] = useState(getPreferredLanguage());
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        const fetchData = () => {
            axios.get(`${API_URL}/product-by-id/${params.id}`)
                .then(response => {
                    setItem(response.data)
                    setLoader(false)


                })
                .catch(error => {
                    console.log(error)
                })
        }

        const fetchTranslations = async () => {
            const data = await loadLanguage(language);
            setTranslations(data);
        };

        fetchData()
        fetchTranslations();
    }, [language]);

    const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        setPreferredLanguage(newLanguage);
    };
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <>
            <Header currentLanguage={language} onChangeLanguage={handleChangeLanguage}/>
            <div className="flex justify-center">
                <div className="container flex justify-center lg:flex-row flex-col h-fit w-full mb-5 lg:space-x-10">
                    {loader ? (
                        <Loader/>
                    ):(
                        <>
                            <div className="lg:w-1/2 w-full">
                                <div>
                                    <Swiper
                                        spaceBetween={10}
                                        thumbs={{ swiper: thumbsSwiper}}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        loop={true}
                                        className="mySwiper2 w-full"
                                        modules={[Navigation, Thumbs]}
                                        centeredSlides={true}

                                    >
                                        <SwiperSlide className="main-swiper-slide">
                                            <img className="select-none object-contain h-[30rem]" src={item.main_img} />
                                        </SwiperSlide>
                                        {item.gallery.map((image, index) => (
                                            <SwiperSlide className="main-swiper-slide" key={index}>
                                                <img className="select-none object-contain h-[30rem]" src={image} alt={`Slide ${index}`} />
                                            </SwiperSlide>
                                        ))}
                                        <div className="swiper-button-next select-none"></div>
                                        <div className="swiper-button-prev select-none"></div>

                                    </Swiper>

                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        loop={true}
                                        className="mySwiper"
                                        style={{marginTop: '10px', height: '150px'}}
                                        centeredSlides={true}
                                        slideToClickedSlide={true}
                                        freeMode={true}

                                        breakpoints={{
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 10,
                                            },
                                            640: {
                                                slidesPerView: 3,
                                                spaceBetween: 10,
                                            },
                                            320: {
                                                slidesPerView: 2,
                                                spaceBetween: 10,
                                            },
                                        }}
                                    >
                                        <SwiperSlide className="select-none thumbs-style">
                                            <img className="select-none object-cover aspect-square cursor-pointer" src={item.main_img}/>
                                        </SwiperSlide>
                                        {item.gallery.map((image, index) => (
                                            <SwiperSlide className="select-none thumbs-style" key={index}>
                                                <img className="select-none object-cover aspect-square cursor-pointer" src={image} alt={`Thumbnail ${index}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 lg:mt-0 mt-8 text-center lg:text-start">
                                <h1 className="text-xl"><span className="opacity-50">{item.category[`${language}`]} /</span> {item[`product_title_${language}`]}</h1>
                                <p>{item[`product_desc_${language}`]}</p>
                                <a href="#contact" className="admin-btn">{translations.hero_btn_contact}</a>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <footer id="contact" className="mt-20 min-h-[20rem] border-t-[2px] border-gray-200 relative flex flex-col items-center justify-center">
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
    );
};

export default SingleProduct;