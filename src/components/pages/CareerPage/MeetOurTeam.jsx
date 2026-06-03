"use client"

import React from 'react'
import Swipers from '@/components/molecules/Swipers'

const MeetOurTeam = () => {

    return (
        <>
            <section>
                <div className="career-secE">
                    <div className="heading">
                        <h2>Meet Our Team</h2>
                    </div>
                    <div className="container">
                        <div className="team-sec">
                            <Swipers
                                autoplay={false}
                                loop={false}
                                data={CardData}
                                swiperSlideCard="TestimonalsCard"
                                imageWidth={419}
                                imageHeight={449}
                                slidesPerView={1}
                                spaceBetween={0}
                                speed={1000}
                                navigation={true}
                                pagination={false}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MeetOurTeam

const CardData = [
    {
        userImage: "/assets/images/career/testimonals.jpg",
        userName: "Raghav Sharma",
        userDesignation: "Full stack Developer",
        userMessage: "Working here has been a rewarding experience. The team is supportive, the culture encourages growth, and I’ve had the opportunity to take on meaningful work that has helped me grow professionally.",
        userDataVideo: "https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z"
    },
    {
        userImage: "/assets/images/career/testimonals.jpg",
        userName: "Priya Malhotra",
        userDesignation: "UI/UX Designer",
        userMessage: "The creative freedom and collaborative environment here are unmatched. I've been able to work on exciting projects and improve my skills significantly in just a few months.",
        userDataVideo: "https://www.youtube.com/embed/dQw4w9wgxcq?si=example2"
    },
    {
        userImage: "/assets/images/career/testimonals.jpg",
        userName: "Arjun Verma",
        userDesignation: "Backend Engineer",
        userMessage: "From day one, I felt valued. The mentorship program and access to latest technologies have accelerated my career growth tremendously. Truly a great place to work.",
        userDataVideo: "https://www.youtube.com/embed/3JZ_D3ELwOQ?si=example3"
    }
]