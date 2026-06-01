import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = ({
    imgSrc,
    imgHeight,
    imgWidth,
    heading,    
    subHeading,
    description,
    bannerClassName,
    bgType = "image",
    isLinkAvalible,
    slideTo,
    linkHref,
    linkText

}) => {
    return (
        <div className={`hero-banner ${bannerClassName || ""}`}>
            <div className="bg-background">

                {bgType === "video" ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={imgSrc} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src={imgSrc}
                        height={imgHeight}
                        width={imgWidth}
                        alt="banner image"
                    />
                )}

                <div className="container">
                    <div className="bg-wrapper">
                        <h2>{subHeading}</h2>
                        <h1>{heading}</h1>
                        <p>{description}</p>
                        {isLinkAvalible && (
                            <Link href={linkHref} className="btn primary-btn">
                                <span>{linkText}</span>
                                <Image className="arrow-ico" src="/assets/icon/btn-arrow.svg" width={20} height={8} alt="right ico" />
                            </Link>
                        )}
                    </div>
                    <Link href={slideTo} className="mouse-ico">
                        <Image src="/assets/icon/mouse.svg" width={20} height={20} alt='mouse icon'></Image>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;