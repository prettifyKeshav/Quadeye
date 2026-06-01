import Hero from '@/components/molecules/Hero'
import React from 'react'
import "@/uploads/styles/blogs/blogs.css"
import "@/uploads/styles/component/component.css"
import ContentSec from './ContentSec'
import MoreBlogs from './MoreBlogs'


const BlogDetailPage = () => {
    return (
        <>
            <Hero
                bgType="image"
                imgSrc="/assets/images/blog/blog-detail-banner.jpg"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="blog-detail-banner"
                subHeading="30 Mar 2026"
                heading="Decoding Market Volatility with Quantitative Models"
                slideTo="#blog_detail_secA"
            />
            <ContentSec />
            <MoreBlogs />
        </>
    )
}

export default BlogDetailPage