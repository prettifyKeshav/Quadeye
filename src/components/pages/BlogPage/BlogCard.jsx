import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ ...item }) => {
    return (
        <>
            <Link href={item.blogHref} className="blog-card">
                <figure>
                    <Image src={item.imageSrc} width={380} height={254} alt="ico" ></Image>
                </figure>
                <figcaption>
                    <h4>{item.heading}</h4>
                    <p>{item.date}</p>
                </figcaption>
            </Link>
        </>
    )
}

export default BlogCard