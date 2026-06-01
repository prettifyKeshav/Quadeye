import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSec = () => {
  return (
    <>
      <section>
        <div className="home-secA" id="home_secA">
          <div className="container">
            <div className="flex-box">
                <div className="col">
                    <figure>
                        <Image src="/assets/images/Home/Vector.png" width={470} height={470} alt="vector ico"></Image>
                        <div className="video-wrapper">
                            <video autoPlay muted loop playsInline >
                                <source src="/assets/video/home-secA.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </figure>
                </div>

                <div className="col">
                    <div className="heading">
                        <h2>Quadeye</h2>
                        <p>India’s Leading Proprietary Trading Firm</p>
                    </div>
                    <p>We identify, evaluate, analyse and leverage trading and investment opportunities globally. We empower our team of exceptional individuals to innovate and grow a trading infrastructure with resources, ownership and guidance.</p>
                    <Link href="/" className='btn primary-btn'>
                        <span>Read more</span>
                        <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                    </Link>
                    
                    <div className="counter_sec">
                        <div className="count-info">
                            <h4><span className="count" data-count="13">13</span>Years</h4>
                            <p>of experience</p>
                        </div>
                        <div className="count-info">
                            <h4><span className="count" data-count="1200">1200</span>+</h4>
                            <p>Employees</p>
                        </div>
                        <div className="count-info">
                            <h4><span className="count" data-count="4">4</span>+</h4>
                            <p>Global Offices</p>
                        </div>
                    </div>

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSec;
