import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const RespectiveExchanges = () => {

    const regulatorData = [
        {
            regulator: "Securities and Exchange Board of India (SEBI)",
            logo: "/assets/images/contact/sebi.png",
            contact: ["1800 22 7575", "1800 266 7575"],
            link: "https://scores.sebi.gov.in/"
        },
        {
            regulator: "National Stock Exchange of India Ltd. (NSE)",
            logo: "/assets/images/contact/nse.png",
            contact: ["1800 22 0058"],
            link: "ignse@nse.co.in"
        },
        {
            regulator: "Bombay Stock Exchange Ltd. (BSE)",
            logo: "/assets/images/contact/bse.png",
            contact: ["022 2272 8097"],
            link: "is@bseindia.com"
        },
        {
            regulator: "Multi Commodity Exchange of India Ltd. (MCX)",
            logo: "/assets/images/contact/mcx.png",
            contact: ["022 6731 8888"],
            link: "grievance@mcxindia.com"
        }
    ];

    return (
        <>
            <section>
                <div className="contact-secC">
                    <div className="container">
                        <div className="heading">
                            <p><span></span> In absence of response/complaint not addressed to your satisfaction, you may lodge a complaint with SEBI or respective Exchanges at:</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>REGULATOR NAME</th>
                                    <th>PORTAL / PLATFORM</th>
                                    <th>CONTACT NUMBER</th>
                                    <th>WEB LINK / EMAIL</th>
                                </tr>
                            </thead>

                            <tbody>
                                {regulatorData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.regulator}</td>

                                        <td>
                                            <figure>
                                                <Image
                                                    src={item.logo}
                                                    width={120}
                                                    height={60}
                                                    alt={item.regulator}
                                                />
                                            </figure>
                                        </td>

                                        <td>
                                            {item.contact.map((number, idx) => (
                                                <p key={idx}>{number}</p>
                                            ))}
                                        </td>

                                        <td>
                                            {item.link.includes("@") ? (
                                                <Link href={`mailto:${item.link}`}>
                                                    {item.link}
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.link}
                                                </Link>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="note">
                            <p><strong>Note: </strong> Please quote complaint Ref No. while raising your complaint at SEBI SCORES/Exchange portal.</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default RespectiveExchanges