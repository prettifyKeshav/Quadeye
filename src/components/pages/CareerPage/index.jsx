import Hero from '@/components/molecules/Hero'
import React from 'react'
import "@/uploads/styles/career/career.css"
import "@/uploads/styles/component/component.css"
import Benefits from './Benefits'
import WorkAndLife from './WorkAndLife'
import MeetOurTeam from './MeetOurTeam'
import LifestyleWorkspace from './LifestyleWorkspace'
import InternationalOffsite from './InternationalOffsite'
import EmpoweringEnriching from './EmpoweringEnriching'

const CareerPage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/career-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="career-banner"
                heading="Life at Quadeye"
                description="Great performance starts with great people. We continuously invest in top-tier trading and engineering talent, while supporting every individual across our teams. "
                slideTo="#career_secA"
                isLinkAvalible
                linkHref="/jobs"
                linkText="view all Openings"
            />
            <Benefits />
            <EmpoweringEnriching />
            <InternationalOffsite />
            <WorkAndLife />
            <MeetOurTeam />
            <LifestyleWorkspace />
        </>
    )
}

export default CareerPage