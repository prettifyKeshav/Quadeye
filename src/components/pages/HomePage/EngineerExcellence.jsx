import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EngineerExcellence = () => {
  return (
    <>
        <section>
            <div className="home-secB">
                <div className="flex-box">
                    <div className="col">
                        <Image src="/assets/images/Home/home-secB.jpg" width={700} height={667} alt="ico"></Image>
                    </div>
                    <div className="col">
                        <h2>Where Engineers Thrive in Excellence</h2>
                        <p>Through ongoing investment in our data platforms, machine learning capabilities, low-latency systems, and electronic trading infrastructure, we empower our engineers with the tools and environment needed to build high-performance, world-class solutions.</p>
                        <Link href="/" className='btn white-btn'>
                            <span>Explore the Stack</span>
                            <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                        </Link>

                        <span className='bg-img bg-dot1'>
                            <Image src="/assets/images/Home/bg-dot1.png" width={143} height={110} alt='bg-dot'></Image>
                        </span>
                        <span className='bg-img bg-dot2'>
                            <Image src="/assets/images/Home/bg-dot2.png" width={152} height={303} alt='bg-dot'></Image>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EngineerExcellence