import React, {useCallback, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import close from '../../assets/img/close.svg';
import img from '../../assets/img/about_img.jpg';



function ProjectSlider () {

    function showModal(id) {
        const dialog = document.getElementById('dialog-'+id)

        dialog.style.display = "flex"

        //Disable scroll when modal is shown
        let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
        let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function() {
            window.scrollTo(LeftScroll, TopScroll);
        };
    }

    function hideModal(id){

        const dialog = document.getElementById('dialog-'+id)

        dialog.style.display = "none"

        //Re-enable scrolling when modal is hidden
        window.onscroll = function() {};


    }

    return (
        <section id="work" className="flex flex-col items-center p-2">
            <div className="container flex flex-col min-h-[90vh] gap-12 lg:mt-20">
                <h2 className="text-5xl text-center font-medium">Mūsu Projekti</h2>
                <div className="slider-wrapper">
                    
                    <Swiper
                        className="sample-slider"
                        // spaceBetween={60}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        loop={true}
                        // dynamicBullets={false}
                        navigation={true}
                        autoplay={{
                            "delay": 2000,
                            "disableOnInteraction": false,
                            "pauseOnMouseEnter": true,
                            "stopOnLastSlide": false,
                            "waitForTransition": true
                        }}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{1: {slidesPerView: 1,}, 768: {slidesPerView: 2,}, 1024: {spaceBetween: 20, slidesPerView: 3,}, 1280: {spaceBetween: 20, slidesPerView: 3,},
                        }}
                    >
                        <SwiperSlide className="bg-red-200">
                            <div onClick={() => showModal(1)} id="showDialog" className="h-[65vh] cursor-pointer">
                                <img className="object-cover" src={img} alt=""/>
                            </div>
                        </SwiperSlide>
                        <div id="dialog-1" className="dialog-container items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.65)] z-40 hidden">
                            <div className="bg-white w-full h-[40rem] lg:w-[80%] p-4">
                                <div className="dialog-header flex justify-end w-full">
                                    <button className="" onClick={() => hideModal(1)}>
                                        <img className="h-[25px]" src={close} alt="Close icon"/>
                                    </button>
                                </div>
                                <div className="dialog-content">

                                </div>
                            </div>
                        </div>

                        <SwiperSlide className="bg-red-200">
                            <div onClick={() => showModal(2)} id="showDialog" className="h-[65vh] cursor-pointer">
                                Imageset two
                            </div>
                        </SwiperSlide>
                        <div id="dialog-2" className="dialog-container items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.65)] z-40 hidden">
                            <div className="bg-white w-full h-[40rem] lg:w-[80%] p-4">
                                <div className="dialog-header w-full flex justify-end">
                                    <button className="" onClick={() => hideModal(2)}>
                                        <img className="h-[25px]" src={close} alt="Close icon"/>
                                    </button>
                                </div>
                                <div className="dialog-content">

                                </div>
                            </div>
                        </div>

                        <SwiperSlide className="bg-red-200">
                            <div onClick={() => showModal(3)} id="showDialog" className="h-[65vh] cursor-pointer">
                                Imageset three
                            </div>
                        </SwiperSlide>
                        <div id="dialog-3" className="dialog-container items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.65)] z-40 hidden">
                            <div className="bg-white w-full h-[40rem] lg:w-[80%] p-4">
                                <div className="dialog-header w-full flex justify-end">
                                    <button className="" onClick={() => hideModal(3)}>
                                        <img className="h-[25px]" src={close} alt="Close icon"/>
                                    </button>
                                </div>
                                <div className="dialog-content">

                                </div>
                            </div>
                        </div>

                        <SwiperSlide className="bg-red-200">
                            <div onClick={() => showModal(4)} id="showDialog" className="h-[65vh] cursor-pointer">
                                Imageset three
                            </div>
                        </SwiperSlide>
                        <div id="dialog-4" className="dialog-container items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.65)] z-40 hidden">
                            <div className="bg-white w-full h-[40rem] lg:w-[80%] p-4">
                                <div className="dialog-header w-full flex justify-end">
                                    <button className="" onClick={() => hideModal(4)}>
                                        <img className="h-[25px]" src={close} alt="Close icon"/>
                                    </button>
                                </div>
                                <div className="dialog-content">

                                </div>
                            </div>
                        </div>

                        <SwiperSlide className="bg-red-200">
                            <div onClick={() => showModal(4)} id="showDialog" className="h-[65vh] cursor-pointer">
                                Imageset three
                            </div>
                        </SwiperSlide>
                        <div id="dialog-4" className="dialog-container items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.65)] z-40 hidden">
                            <div className="bg-white w-full h-[40rem] lg:w-[80%] p-4">
                                <div className="dialog-header w-full flex justify-end">
                                    <button className="" onClick={() => hideModal(4)}>
                                        <img className="h-[25px]" src={close} alt="Close icon"/>
                                    </button>
                                </div>
                                <div className="dialog-content">

                                </div>
                            </div>
                        </div>

                    </Swiper>

                </div>
            </div>
        </section>
    )

}

export default ProjectSlider;