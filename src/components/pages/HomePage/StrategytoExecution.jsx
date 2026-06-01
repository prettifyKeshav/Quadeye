import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const StrategytoExecution = () => {
  return (
    <>
        <section>
            <div className="home-secE">
                <div className="container">
                    <div className="flex-box">
                        <div className="col">
                            <h2>From Strategy to Execution</h2>
                            <p>With a powerful tech-driven foundation and a team-first approach, we enable traders to bring their ideas to life. Our environment fosters creativity, ownership, and continuous growth.</p>
                            <Link href="/" className='btn primary-btn'>
                                <span>Explore Careers</span>
                                <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                            </Link>
                        </div>
                        <div className="col">
                            <figure>
                                <Image src="/assets/logo-q.svg" width={252} height={252} alt='ico' ></Image>
                            </figure>
                        </div>
                    </div>

                    <div className="grid-box">
                        <div className="col">
                            <div className="heading">
                                <h4>Independence at Scale</h4>
                                <figure>
                                    <Image src="/assets/images/Home/1.svg" width={66} height={66} alt='ico' ></Image>
                                </figure>
                            </div>
                            <p>We empower our people to build their own teams or pursue innovative strategies while providing the support and reach of a large, global organization. No matter what or where you want to trade, we are equipped to support your goals.</p>
                        </div>

                        <div className="col">
                            <div className="heading">
                                <h4>A Platform for Performance</h4>
                                <figure>
                                    <Image src="/assets/images/Home/2.svg" width={66} height={66} alt='ico' ></Image>
                                </figure>
                            </div>
                            <p>Continuous investment in top engineering talent keeps us on the cutting edge of every aspect of quantitative trading, from market access, data, compute, and research infrastructure to compliance and business support.</p>
                        </div>

                        <div className="col">
                            <div className="heading">
                                <h4>Innovative to the Core</h4>
                                <figure>
                                    <Image src="/assets/images/Home/3.svg" width={66} height={66} alt='ico' ></Image>
                                </figure>
                            </div>
                            <p>Over the past 15 years, we’ve developed a reputation for discovering unique market opportunities. Our employees are encouraged to become experts on emerging technologies and new market trends they believe will support successful strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default StrategytoExecution