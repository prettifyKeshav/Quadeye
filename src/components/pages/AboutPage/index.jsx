import Hero from '@/components/molecules/Hero'
import React from 'react'
import "@/uploads/styles/aboutUs/aboutUs.css"
import AboutSec from './AboutSec'
import HereAtQuadeye from './HereAtQuadeye' 

const AboutPage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/about-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="home-banner"
                heading="Leaders in Quant Trading. Driving What’s Next."
                description="Driven by talent, powered by technology, and united by culture, we innovate to achieve excellence in everything we do."
                slideTo="#about_secA"
            />
            <AboutSec />
            <HereAtQuadeye />
            <section>
                <Hero
                    bgType="video"
                    imgSrc="/assets/video/about-secC.mp4"
                    imgHeight="626"
                    imgWidth="1028"
                    bannerClassName="about-secC"
                    heading="Love solving challenging Maths & Programming problems?"
                    description="You Will Love Working @ Quadeye."
                    slideTo="#about_secA"
                    // sLinkAvalible
                    // linkHref= "/"
                    // linkText= "check all the openings"
                />
            </section>
        </>
    )
}

export default AboutPage