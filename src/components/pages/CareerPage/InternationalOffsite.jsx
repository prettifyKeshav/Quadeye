"use client";

import React, { useState } from "react";
import Image from "next/image";

const InternationalOffsite = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section>
            <div className="career-secC">
                <div className="container">
                    <div className="heading">
                        <h2>Annual International Offsite</h2>
                    </div>

                    <div className="custom-swiper">
                        <div className="custom-swiper-wrapper">
                            {OffsiteData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`custom-swiper-slide ${activeIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <Image src={item.image} width={1920} height={1440} alt={item.title} />
                                    <figcaption>
                                        <span>
                                            <Image src="/assets/images/career/plus-icon.png" width={36} height={36} alt="icon" />
                                        </span>

                                        <h3>{item.title}</h3>
                                    </figcaption>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternationalOffsite;

const OffsiteData = [
    {
        image: "/assets/images/career/offsite/1.png",
        title: "Annual international offsite for all employees.",
    },
    {
        image: "/assets/images/career/offsite/2.png",
        title: "Advanced R&D and Product Development",
    },
    {
        image: "/assets/images/career/offsite/3.png",
        title: "Stringent Quality Control Systems",
    },
    {
        image: "/assets/images/career/offsite/4.png",
        title: "High-capacity Production & Assembly Lines",
    },
    {
        image: "/assets/images/career/offsite/1.png",
        title: "End-to-end Machinery & Tool Room Infrastructure",
    },
];