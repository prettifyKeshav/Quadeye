import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LifestyleWorkspace = () => {
    return (
        <>
            <section>
                <div className="career-secF">
                    <div className="container">
                        <div className="heading">
                            <h2>Learning, Lifestyle & Workspace</h2>
                        </div>

                        <div className="flex-box">
                            <figure>
                                <Image src="/assets/images/career/life-style.jpg" width={474} height={343} alt="ico" ></Image>
                            </figure>
                            <figcaption>
                                <ul>
                                    <li>Access to a well-curated office library and learning resources.</li>
                                    <li>Reimbursement for internet, financial newspapers, books, and newsletters, as per policy.</li>
                                    <li>Thoughtfully designed workspace with recreation zones, quiet reading areas, regular team socials and company celebrations, and other team events.</li>
                                </ul>
                                
                                <Link href="/jobs" className='btn primary-btn'>
                                    <span>view all Openings </span>
                                    <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                                </Link>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LifestyleWorkspace