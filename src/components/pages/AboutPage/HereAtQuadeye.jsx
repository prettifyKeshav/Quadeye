"use client"
import React, { useState } from "react";
import Image from "next/image";

const cardData = [
    {
        icon: "/assets/images/about/think.svg",
        title: "Think",
        description: "We identify profitable trading opportunities and brainstorm every idea.",
    },
    {
        icon: "/assets/images/about/strategize.svg",
        title: "Strategize",
        description: "We strategise using complex mathematical and statistical modeling",
    },
    {
        icon: "/assets/images/about/build.svg",
        title: "Build",
        description: "We build and rigorously test automated trading systems to transform ideas into reliable, scalable solutions.",
    },
    {
        icon: "/assets/images/about/trade.svg",
        title: "Trade",
        description: "We execute our strategies across markets while continuously monitoring and optimizing performance.",
    },
];

const HereAtQuadeye = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section>
            <div className="about-secB">
                <div className="container">
                    <div className="heading">
                        <h2>Here at Quadeye</h2>
                        <p>We specialize in Quantitative Proprietary Trading. We, along with our sister concerns, have presence in multiple markets across global exchanges. Quadeye’s liquidity provision plays a vital role in the overall health and efficiency of the global financial markets, especially in times of market turbulence.</p>
                    </div>

                    <div className="row">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    activeIndex === index ? "active" : ""
                                }`}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <figure>
                                    <Image src={card.icon} width={65} height={54} alt="ico" ></Image>
                                </figure>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <div className="plus"><span>+</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HereAtQuadeye;