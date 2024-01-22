import React, {useCallback, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import close from '../../../assets/img/close.svg';
import img from '../../../assets/img/about_img.jpg';
import swiper_img_1 from '../../../assets/img/swiper_img_1.jpg'
import swiper_img_2 from '../../../assets/img/swiper_img_2.jpg'
import swiper_img_3 from '../../../assets/img/swiper_img_3.jpg'
import swiper_img_4 from '../../../assets/img/swiper_img_4.jpg'
import swiper_img_5 from '../../../assets/img/swiper_img_5.jpg'







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
                            <div id="showDialog" className="h-[65vh]">
                                <img className="object-cover" src={img} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div id="showDialog" className="h-[65vh]">
                                <img className="object-cover" src={swiper_img_2} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div id="showDialog" className="h-[65vh]">
                                <img className="object-cover" src={swiper_img_3} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div id="showDialog" className="h-[65vh]">
                                <img className="object-cover" src={swiper_img_1} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div id="showDialog" className="h-[65vh]">
                                <img className="object-cover" src={swiper_img_4} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div id="showDialog" className="h-[65vh]">
                                <img className="object-cover" src={swiper_img_2} alt=""/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )

}

export default ProjectSlider;