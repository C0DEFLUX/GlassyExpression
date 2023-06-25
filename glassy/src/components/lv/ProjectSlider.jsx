import React, {useCallback, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import chevRight from '../../assets/img/chev_right.svg';
import chevLeft from '../../assets/img/chev_left.svg';



function ProjectSlider () {

    const showBtn = document.getElementById('showDialog')
    const dialog = document.getElementById('dialog')

    showBtn.addEventListener('click', () => {
        dialog.showModal()
    })

    return (
        <section id="work" className="flex flex-col items-center p-2">
            <div className="container flex flex-col min-h-[90vh] gap-12 lg:mt-20">
                <h2 className="text-5xl text-center font-medium">Mūsu Projekti</h2>
                <div className="slider-wrapper">
                    <Swiper
                        className="sample-slider"
                        spaceBetween={60}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        loop={true}
                        dynamicBullets={false}
                        navigation={true}
                        // autoplay={{
                        //     "delay": 2000,
                        //     "disableOnInteraction": false,
                        //     "pauseOnMouseEnter": true,
                        //     "stopOnLastSlide": false,
                        //     "waitForTransition": true
                        // }}
                        modules={[Autoplay, Navigation, Pagination]}

                        breakpoints={{
                            // when window width is >= 576px
                            1: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 1024px
                            1024: {
                                spaceBetween: 20,
                                slidesPerView: 3,
                            },
                            1280: {
                                spaceBetween: 20,

                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide className="bg-red-200">
                            <div id="showDialog" className="h-[65vh]">

                            </div>
                            <dialog id="dialog">
                                asd
                            </dialog>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-200">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-200">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-200">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-200">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-200">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    )

}

export default ProjectSlider;