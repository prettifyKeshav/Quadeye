import React from 'react'
import Swipers from '@/components/molecules/Swipers'

const WorkAndLife = () => {
    return (
        <>
            <section>
                <div className="career-secD">
                    <div className="container">
                        <div className="heading">
                            <h2>Complete Care for Work and Life</h2>
                        </div>

                        <Swipers
                            className="more-blog-swiper"
                            autoplay={false}
                            loop={false}
                            data={CardData}
                            swiperSlideCard="WorkLifeCard"
                            imageWidth={419}
                            imageHeight={449}
                            slidesPerView={1.3}
                            spaceBetween={50}
                            speed={1000}
                            navigation={true}
                            pagination={false}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkAndLife

const CardData = [
    {
        figureImage: "/assets/images/career/1.png",
        heading: "Health and Protection",
        description: "Family floater medical insurance. Term insurance coverage as per the Firm’s policy."
    },
    {
        figureImage: "/assets/images/career/1.png",
        heading: "Health and Protection",
        description: "Family floater medical insurance. Term insurance coverage as per the Firm’s policy."
    },
    {
        figureImage: "/assets/images/career/1.png",
        heading: "Health and Protection",
        description: "Family floater medical insurance. Term insurance coverage as per the Firm’s policy."
    },
    {
        figureImage: "/assets/images/career/1.png",
        heading: "Health and Protection",
        description: "Family floater medical insurance. Term insurance coverage as per the Firm’s policy."
    },
    {
        figureImage: "/assets/images/career/1.png",
        heading: "Health and Protection",
        description: "Family floater medical insurance. Term insurance coverage as per the Firm’s policy."
    },
    {
        figureImage: "/assets/images/career/1.png",
        heading: "Health and Protection",
        description: "Family floater medical insurance. Term insurance coverage as per the Firm’s policy."
    }

]