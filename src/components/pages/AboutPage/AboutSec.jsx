"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const AboutSec = () => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <>
        <section id="about_secA">
            <div className="about-secA" >
                <div className="container">
                    <div className="flex-box">
                        <div className="col">
                            <ul className="tab-nav">
                                {cardData.map((item, index) => (
                                    <li
                                        key={index}
                                        className={activeTab === index ? "active" : ""}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>

                            <h2>{cardData[activeTab].content.heading}</h2>
                            <p>{cardData[activeTab].content.description}</p>

                            <Link href="/" className='btn primary-btn'>
                                <span>join our team</span>
                                <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                            </Link>
                        </div>

                        <div className="col">
                            <figure>
                                <Image src="/assets/images/about/Vector.png" width={470} height={470} alt="vector ico"></Image>
                                <div className="video-wrapper">
                                    <video autoPlay muted loop playsInline >
                                        <source src="/assets/video/about-secA.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutSec;

const cardData = [
    {
        title: "Who We Are",
        content: {
            heading: "Where Agility Meets Experience",
            description:
                "Quadeye combines the best of both worlds: the opportunity and spirit of a startup and the stability of an established, experienced firm. Our employees work hard to solve interesting problems, and their results are rewarded. We value continuous learning from our outcomes, from the environment and from each other."
        }
    },
    {
        title: "What We Do",
        content: {
            heading: "Building the Future of Trading",
            description:
                "We leverage technology, quantitative research, and market expertise to create innovative trading strategies across global markets."
        }
    }
];