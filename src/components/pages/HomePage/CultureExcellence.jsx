import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Swipers from '@/components/molecules/Swipers'

const CultureExcellence = () => {

    const swiperContent = [
        {figureImageSrc: "/assets/images/Home/CultureExcellence/1.jpg"},
        {figureImageSrc: "/assets/images/Home/CultureExcellence/2.png"},
        {figureImageSrc: "/assets/images/Home/CultureExcellence/1.jpg"},
        {figureImageSrc: "/assets/images/Home/CultureExcellence/2.png"}

    ]
  return (
    <>
        <section>
             <div className="home-secC">
                    <div className="container">
                        <div className="flex-box">
                            <div className="content">
                                <h2>A Culture of Excellence</h2>
                                <p>At Quadeye, employees throughout the world find stimulating, results-oriented environments where they are supported by highly intelligent and motivated colleagues.</p>
                                <div className="inner-flex-box">
                                    <Link href="/" className='btn primary-btn'>
                                        <span>Explore our offices</span>
                                        <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                                    </Link>
                                    <Link href="/" className='btn black-border-btn'>
                                        <span>Explore Careers</span>
                                        <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                                    </Link>
                                </div>
                            </div>

                            <Swipers
                                className="home-secC-swiper"
                                autoplay={false}
                                loop={false}
                                data={swiperContent}
                                imageWidth={419}
                                imageHeight={449}
                                slidesPerView={1.2}
                                spaceBetween={30}
                                speed={1000}
                                navigation={true}
                                pagination={true}
                            />

                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default CultureExcellence