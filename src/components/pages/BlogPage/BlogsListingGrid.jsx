import React from 'react'
import BlogCard from './BlogCard'

const BlogsListingGrid = () => {
    return (
        <>
            <section>
                <div className="container" id="blog_secA">
                    <div className="blog-listing-grid">
                        {
                            CardData.map((item, index) => {
                                return (
                                    <BlogCard {...item} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsListingGrid

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