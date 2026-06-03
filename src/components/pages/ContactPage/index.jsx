import Hero from '@/components/molecules/Hero'
import React from 'react'
import FromSec from './FromSec'
import "@/uploads/styles/contact/contact.css"
import InvestorGrievance from './InvestorGrievance'
import RespectiveExchanges from './RespectiveExchanges'
import BankAccountDisclosure from './BankAccountDisclosure'
import QuickLinks from './QuickLinks'

const ContactPage = () => {
    return (
        <>
            <Hero
                bgType="image"
                imgSrc="/assets/images/contact/contact-banner.png"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="career-banner"
                heading="Reach Out and Let’s Build Smarter Strategies"
                description="We’re here to answer your questions and discuss how our data-driven strategies can support your goals."
                slideTo="#career_secA"
                isLinkAvalible
                linkHref="#contact_sec"
                linkText="get in touch"
            />
            <InvestorGrievance />
            <RespectiveExchanges />
            <BankAccountDisclosure />
            <QuickLinks />
            <FromSec />
        </>
    )
}

export default ContactPage