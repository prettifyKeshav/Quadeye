"use client";

import React, { useEffect, useRef } from "react";
import { Snap } from "vevet";

const images = [
    "/assets/images/career/swiper/1.png",
    "/assets/images/career/swiper/2.png",
    "/assets/images/career/swiper/3.png",
    "/assets/images/career/swiper/4.png",
    "/assets/images/career/swiper/5.png",
    "/assets/images/career/swiper/1.png",
    "/assets/images/career/swiper/2.png",
    "/assets/images/career/swiper/3.png",
    "/assets/images/career/swiper/4.png",
    "/assets/images/career/swiper/5.png",
];

const EmpoweringEnriching = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (!carouselRef.current) return;

        const carousel = new Snap({
            container: carouselRef.current,
            direction: "horizontal",
            grabCursor: true,
            centered: true,
            loop: true,
            gap: 10,
            duration: 500,
        });

        carousel.on("update", () => {
            const depth = 200;
            const rotation = 20;
            const scale = 1 / (180 / rotation);
            const halfAngle = ((rotation * Math.PI) / 180) / 2;

            carousel.slides.forEach(
                ({ element, coord, progress, size }) => {
                    const factor =
                        1 - Math.cos(progress * scale * Math.PI);

                    const xOffset =
                        progress * (size / 3) * factor;

                    const zOffset =
                        ((size * 0.5) / Math.sin(halfAngle)) *
                        factor -
                        depth;

                    const rotateY = progress * rotation;

                    element.style.transform = `
                        translateX(${coord + xOffset}px)
                        translateZ(${zOffset}px)
                        rotateY(${rotateY}deg)
                    `;
                }
            );
        });

        carouselRef.current.classList.add("ready");

        const autoplay = setInterval(() => {
            try {
                carousel.next();
            } catch (error) {
                console.log("Autoplay error:", error);
            }
        }, 0);

        return () => {
            clearInterval(autoplay);
            carousel.destroy?.();
        };
    }, []);

    return (
        <section>
            <div className="career-secB">
                <div className="container">
                    <div className="heading">
                        <h2>Empowering Careers. Enriching Lives. </h2>
                    </div>

                    <div
                        className="panorama-carousel"
                        ref={carouselRef}
                    >
                        {images.map((image, index) => (
                            <div
                                className="slide"
                                key={index}
                            >
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmpoweringEnriching;