// import React from 'react'

// const QuadeyeGlance = () => {
//     return (
//         <>
//             <section>
//                 <div className="about-secD">
//                     <div className="container">
//                         <div className="heading">
//                             <h2><span>Quadeye</span> at a Glance</h2>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default QuadeyeGlance


"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const galleryImages = [
    "/assets/images/about/glance/1.png",
    "/assets/images/about/glance/2.jpg",
    "/assets/images/about/glance/3.jpg",
    "/assets/images/about/glance/1.png",
    "/assets/images/about/glance/2.jpg",
    "/assets/images/about/glance/3.jpg",
];

const QuadeyeGlance = () => {
    return (
        <section className="about-secD">
            <div className="container">
                <div className="heading">
                    <h2><span>Quadeye</span> at a Glance</h2>
                </div>

                <div className="swiper-nav">
                    <button className="gallery-prev">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14 7l-5 5l5 5"
                                strokeWidth="1"
                            />
                        </svg>
                    </button>

                    <button className="gallery-next">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m10 17l5-5l-5-5"
                                strokeWidth="1"
                            />
                        </svg>
                    </button>
                </div>

                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    className="gallerySwiper"
                    effect="coverflow"
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    spaceBetween={10}
                    speed={400}
                    navigation={{
                        prevEl: ".gallery-prev",
                        nextEl: ".gallery-next",
                    }}
                    coverflowEffect={{
                        rotate: -34,
                        stretch: 40,
                        depth: 165,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <figure>
                                <Image
                                    src={image}
                                    width={568}
                                    height={402}
                                    alt={`Gallery ${index + 1}`}
                                />
                            </figure>
                            <figcaption>
                                <h4>270+ Employees</h4>
                            </figcaption>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
export default QuadeyeGlance