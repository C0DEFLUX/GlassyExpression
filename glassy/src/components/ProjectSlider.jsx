import React, {useCallback, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';




function ProjectSlider () {

        const sliderRef = useRef(null);

        const handlePrev = useCallback(() => {
            if (!sliderRef.current) return;
            sliderRef.current.swiper.slidePrev();
        }, []);

        const handleNext = useCallback(() => {
            if (!sliderRef.current) return;
            sliderRef.current.swiper.slideNext();
        }, []);




    return (
        <section className="flex flex-col items-center">
            <div className="container flex flex-col min-h-[90vh] gap-12 lg:mt-20">
                <h2 className="text-5xl text-center font-medium">Our Projects</h2>
                <div className="slider-wrapper">
                    <Swiper
                        ref={sliderRef}
                        spaceBetween={60}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        loop={true}
                        dynamicBullets={false}
                        // navigation={true}

                        // autoplay={{
                        //     "delay": 2000,
                        //     "disableOnInteraction": false,
                        //     "pauseOnMouseEnter": false,
                        //     "stopOnLastSlide": false,
                        //     "waitForTransition": true
                        // }}
                        modules={[Autoplay, Navigation, Pagination]}
                    >
                        <SwiperSlide className="bg-red-500">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-500">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-500">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-500">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-500">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-red-500">
                            <div className="h-[65vh]">
                                asd
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex gap-10 items-center">
                        <div className="prev-arrow" onClick={handlePrev} >Prev</div>
                        <div className="next-arrow" onClick={handleNext} >Next</div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProjectSlider;