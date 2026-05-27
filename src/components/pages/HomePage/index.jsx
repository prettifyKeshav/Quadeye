import Hero from '@/components/molecules/Hero'
import React from 'react'

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
            />
        </>
    )
}

export default HomePage