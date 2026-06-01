import Swipers from '@/components/molecules/Swipers'
import React from 'react'

const MoreBlogs = () => {
    return (
        <>
            <section>
                <div className="blog-detail-secB">
                    <div className="container">
                        <div className="heading">
                            <h2>More Blogs</h2>
                        </div>

                        <Swipers
                            className="more-blog-swiper"
                            autoplay={false}
                            loop={false}
                            data={CardData}
                            swiperSlideCard="BlogCard"
                            imageWidth={419}
                            imageHeight={449}
                            slidesPerView={3}
                            spaceBetween={20}
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

export default MoreBlogs

const CardData = [
    {
        blogHref: "/blogs/asdf",
        imageSrc: "/assets/images/blog/1.jpg",
        heading: "Decoding Market Volatility with Quantitative Models",
        date: "30 Mar 2026"
    },
    {
        blogHref: "/blogs/asdf",
        imageSrc: "/assets/images/blog/2.jpg",
        heading: "Inside a Quant Model: From Theory to Execution",
        date: "30 Mar 2026"
    },
    {
        blogHref: "/blogs/asdf",
        imageSrc: "/assets/images/blog/3.jpg",
        heading: "Why Data-Driven Investing Is No Longer Optional",
        date: "30 Mar 2026"
    },
    {
        blogHref: "/blogs/asdf",
        imageSrc: "/assets/images/blog/1.jpg",
        heading: "Decoding Market Volatility with Quantitative Models",
        date: "30 Mar 2026"
    },
    {
        blogHref: "/blogs/asdf",
        imageSrc: "/assets/images/blog/2.jpg",
        heading: "Inside a Quant Model: From Theory to Execution",
        date: "30 Mar 2026"
    },
    {
        blogHref: "/blogs/asdf",
        imageSrc: "/assets/images/blog/3.jpg",
        heading: "Why Data-Driven Investing Is No Longer Optional",
        date: "30 Mar 2026"
    },
]