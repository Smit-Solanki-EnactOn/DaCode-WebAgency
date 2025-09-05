'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface SwiperComponentProps {
    data: {
        id: number;
        image: string;
        alt: string;
        description: string;
    }[];
}


const SwiperComponent = (props: SwiperComponentProps) => {
    const { data } = props;
    return (
        <div className="swiper-container-wrapper">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: false }}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                modules={[Navigation]}
                className='mySwiper'
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                { }
                {data.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-image-wrapper">
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                width={472}
                                height={297}
                                priority
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                            <p className="slide-description">{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="custom-swiper-button-next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default SwiperComponent;