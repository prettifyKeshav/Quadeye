"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useModalStore } from "../../../../store/modelStore";

const Benefits = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const openVideo = useModalStore((state) => state.openVideo)

    const tabs = [
        "Health & Protection",
        "Insurance",
        "Fitness & Wellness",
        "Daily Convenience",
        "Learning & Growth",
    ];

    const handleTabClick = (index) => {
        swiperRef.current?.slideToLoop(index);
        setActiveIndex(index);
    };

    return (
        <section>
            <div className="career-secA">
                <div className="container">

                    <div className="heading">
                        <h2>Benefits</h2>
                        <p>
                            At Quadeye, we foster an environment where talented
                            people can thrive, with curated benefits that support
                            your well-being, growth, and overall work experience.
                            Benefits may evolve as the company grows.
                        </p>
                    </div>

                    <ul className="swiper-tabing">
                        {tabs.map((tab, index) => (
                            <li
                                key={index}
                                className={activeIndex === index ? "active" : ""}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>

                    <Swiper
                        centeredSlides={true}
                        slidesPerView={1.7}
                        spaceBetween={50}
                        loop={true}
                        speed={700}
                        initialSlide={0}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                    >
                        <SwiperSlide>
                            <div className="benefit-slide">
                                <figure>
                                    <img
                                        src="/assets/images/career/benefits/1.jpg"
                                        width={726}
                                        height={444}
                                        alt="Health & Protection"
                                    />
                                    <figcaption>
                                        <div className="play-button">
                                            <button type="button" className="play-btn" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z"  ></button>
                                        </div>
                                        <h4>Family floater medical insurance. Term insurance coverage as per the Firm’s policy.</h4>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="benefit-slide">
                                <figure>
                                    <img
                                        src="/assets/images/career/benefits/2.jpg"
                                        width={726}
                                        height={444}
                                        alt="Insurance"
                                    />
                                    <figcaption>
                                        <div className="play-button">
                                            <button type="button" className="play-btn" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z"  ></button>
                                        </div>
                                        <h4>Family floater medical insurance. Term insurance coverage as per the Firm’s policy.</h4>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="benefit-slide">
                                <figure>
                                    <img
                                        src="/assets/images/career/benefits/3.jpg"
                                        width={726}
                                        height={444}
                                        alt="Fitness & Wellness"
                                    />
                                    <figcaption>
                                        <div className="play-button">
                                            <button type="button" className="play-btn" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z"  ></button>
                                        </div>
                                        <h4>Family floater medical insurance. Term insurance coverage as per the Firm’s policy.</h4>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="benefit-slide">
                                <figure>
                                    <img
                                        src="/assets/images/career/benefits/1.jpg"
                                        width={726}
                                        height={444}
                                        alt="Daily Convenience"
                                    />
                                    <figcaption>
                                        <div className="play-button">
                                            <button type="button" className="play-btn" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z"  ></button>
                                        </div>
                                        <h4>Family floater medical insurance. Term insurance coverage as per the Firm’s policy.</h4>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="benefit-slide">
                                <figure>
                                    <img
                                        src="/assets/images/career/benefits/1.jpg"
                                        width={726}
                                        height={444}
                                        alt="Daily Convenience"
                                    />
                                    <figcaption>
                                        <div className="play-button">
                                            <button type="button" className="play-btn" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z"  ></button>
                                        </div>
                                        <h4>Family floater medical insurance. Term insurance coverage as per the Firm’s policy.</h4>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default Benefits;