"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'

const FromSec = () => {

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
        <>
            <section>
                <div className="contact-secF" id='contact_sec'>
                    <div className="container">
                        <div className="heading">
                            <h2>Talk to Our Experts</h2>
                            <p>Drop us a message let’s turn your questions into clear, data-driven answers.</p>
                        </div>

                        <form action="" className="form form-grid" >
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">Name*</label>
                            </div>

                            <div className="form-group">
                                <input type="email" name="email" className="form-control" id="email" />
                                <label htmlFor="email">Email*</label>
                            </div>

                            <div className="form-group">
                                <input type="tel" name="phone" className="form-control" id="phone" />
                                <label htmlFor="email">Phone*</label>
                            </div>

                            <div className="form-group">
                                <input type="text" name="subject" className="form-control" id="subject" />
                                <label htmlFor="subject">Subject *</label>
                            </div>

                            <div className="form-group full">
                                <textarea name="message" id="message" className="form-control"></textarea>
                                <label htmlFor="message">Message*</label>
                            </div>

                            <button className='btn white-btn full'>
                                <span>Submit</span>
                                <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FromSec