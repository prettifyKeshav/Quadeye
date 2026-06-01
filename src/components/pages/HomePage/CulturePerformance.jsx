"use client"

import React from 'react'
import { useModalStore } from '../../../../store/modelStore'

const CulturePerformance = () => {
    const openVideo = useModalStore((state) => state.openVideo)
  return (
    <>
        <section>
            <div className="home-secD">
                <div className="banner">
                    <video autoPlay muted loop playsInline >
                        <source src="/assets/video/home-secD.mp4" type="video/mp4" />
                    </video>

                    <div className="container">
                        <div className="bg-wrapper">
                            <div className="play-button">
                                <button type="button" className="play-btn" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z"  ></button>
                            </div>
                            <h2>Where Culture Drives Performance</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CulturePerformance