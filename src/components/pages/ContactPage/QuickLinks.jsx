import React from 'react'
import Link from 'next/link'

const QuickLinks = () => {
    return (
        <>
            <section>
                <div className="contact-secE">
                    <div className="container">
                        <div className="flex-box">
                            <figure>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="/assets/video/contact-secE.mp4" type="video/mp4" />
                                </video>
                            </figure>
                            <figcaption>
                                <h2>Quick Links</h2>
                                <ul>
                                    <li>
                                        <Link href="/" >Step-by-step Procedures for Opening an Account and Procedure for Filing a Complaint and Find Status of a Complaint</Link>
                                    </li>
                                    <li>
                                        <Link href="/" >Basic Details of the Company</Link>
                                    </li>
                                    <li>
                                        <Link href="/" >Details of all Key Managerial Personnels</Link>
                                    </li>
                                    <li>
                                        <Link href="/" >Details of Authorised Persons (APs)</Link>
                                    </li>
                                    <li>
                                        <Link href="/" >Policy for Voluntary Freezing or Blocking the Online Access of Trading Account</Link>
                                    </li>
                                </ul>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuickLinks