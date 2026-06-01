import Hero from '@/components/molecules/Hero'
import React from 'react'
import AboutSec from './AboutSec'
import "@/uploads/styles/home/home.css"
import EngineerExcellence from './EngineerExcellence'
import CultureExcellence from './CultureExcellence'
import CulturePerformance from './CulturePerformance'
import StrategytoExecution from './StrategytoExecution'

const HomePage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/home-banner.mp4"
                poster="/assets/video/home-banner.png"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="home-banner"
                heading="Powering Global Opportunities Through Intelligent Trading"
                description="We are a diversified trading firm innovating across both traditional and cutting-edge markets."
                slideTo="#home_secA"
                isLinkAvalible
                linkHref= "/"
                linkText= "Explore Careers"
            />
            <AboutSec/>
            <EngineerExcellence/>
            <CultureExcellence/>
            <CulturePerformance/>
            <StrategytoExecution/>
        </>
    )
}

export default HomePage