import Hero from '@/components/molecules/Hero'
import React from 'react'
import "@/uploads/styles/blogs/blogs.css"
import "@/uploads/styles/component/component.css"
import BlogsListingGrid from './BlogsListingGrid'

const BlogPage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/blog-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="blogs-banner"
                heading="Insights & Perspectives"
                description="Stay ahead with expert insights, quantitative strategies, and thoughtful commentary on evolving global markets."
                slideTo="#blog_secA"
            />
            <BlogsListingGrid />
        </>
    )
}

export default BlogPage