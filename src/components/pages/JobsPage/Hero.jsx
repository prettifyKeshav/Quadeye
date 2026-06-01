"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");
        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };
        const handleBlur = function () {
            if (!this.value.trim()) {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };
        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });
        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    return (
        <div className="hero-banner jobs-banner">
            <div className="bg-background">
                <video autoPlay muted loop playsInline >
                    <source src="/assets/video/career-banner.mp4" type="video/mp4" />
                </video>

                <div className="container">
                    <div className="bg-wrapper">
                        <h1>We recognize that our people are our future success</h1>

                        <form action="" className="form form-grid">
                            <div className="form-group">
                                <input type="text" name="jobTitle" className="form-control" id="jobTitle" />
                                <label htmlFor="jobTitle">Job title or skill*</label>
                            </div>

                            <div className="form-group">
                                <input type="text" name="location" className="form-control" id="location" />
                                <label htmlFor="location">City, state/province or country</label>
                            </div>

                            <button className="btn primary-btn" type="button">
                                Search
                            </button>

                        </form>
                    </div>
                    <Link href="#jobs_secA" className="mouse-ico">
                        <Image src="/assets/icon/mouse.svg" width={20} height={20} alt='mouse icon'></Image>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;