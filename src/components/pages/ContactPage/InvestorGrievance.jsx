import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const grievanceData = [
    {
        tag: "CUSTOMER CARE",
        name: "Ashish Behuria",
        address: "184, Harish Mukherjee Road, First Floor, Kolkata – 700026",
        phone: "033-40636102",
        email: "client@quadeye.com",
        workingHours: [
            "10:00 AM to 01:00 PM",
            "02:30 PM to 05:00 PM"
        ]
    },
    {
        tag: "HEAD OF CUSTOMER CARE",
        name: "Kush Kumar Sharma",
        address: "14th Floor, Two Horizon Center, DLF Phase-5, Sector 43, Gurgaon-122002",
        phone: "0124-4267422",
        email: "client@quadeye.com",
        workingHours: [
            "10:00 AM to 01:00 PM",
            "02:30 PM to 05:00 PM"
        ]
    },
    {
        tag: "COMPLIANCE OFFICER",
        name: "Mukesh Saraswat",
        address: "14th Floor, Two Horizon Center, DLF Phase-5, Sector 43, Gurgaon-122002",
        phone: "0124-4267422",
        email: "client@quadeye.com",
        workingHours: [
            "10:00 AM to 01:00 PM",
            "02:30 PM to 05:00 PM"
        ]
    },
    {
        tag: "CEO",
        name: "Akhilesh Chaudhary",
        address: "14th Floor, Two Horizon Center, DLF Phase-5, Sector 43, Gurgaon-122002",
        phone: "0124-4267422",
        email: "client@quadeye.com",
        workingHours: [
            "10:00 AM to 01:00 PM",
            "02:30 PM to 05:00 PM"
        ]
    }
]

const InvestorGrievance = () => {
    return (
        <>
            <section>
                <div className="contact-secB">
                    <div className="container">
                        <div className="heading">
                            <figure>
                                <Image
                                    src="/assets/images/contact/groth-ico.svg"
                                    width={72}
                                    height={72}
                                    alt="ico"
                                />
                            </figure>
                            <h2>Investor Grievance Escalation Matrix</h2>
                            <p>
                                <span></span> In case of any grievance / complaint, please contact:
                            </p>
                        </div>

                        <div className="grid-box">
                            {grievanceData.map((item, index) => (
                                <div className="col" key={index}>
                                    <div className="top">
                                        <span className="tag">{item.tag}</span>
                                        <h4>{item.name}</h4>
                                    </div>

                                    <div className="bottom">
                                        <Link href="/" className="flex-box">
                                            <figure>
                                                <Image
                                                    src="/assets/images/contact/location.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="location"
                                                />
                                            </figure>
                                            <p>{item.address}</p>
                                        </Link>

                                        <Link
                                            href={`tel:${item.phone.replace(/-/g, '')}`}
                                            className="flex-box"
                                        >
                                            <figure>
                                                <Image
                                                    src="/assets/images/contact/phone.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="phone"
                                                />
                                            </figure>
                                            <p>{item.phone}</p>
                                        </Link>

                                        <Link
                                            href={`mailto:${item.email}`}
                                            className="flex-box"
                                        >
                                            <figure>
                                                <Image
                                                    src="/assets/images/contact/email.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="email"
                                                />
                                            </figure>
                                            <p>{item.email}</p>
                                        </Link>

                                        <div className="flex-box">
                                            <figure>
                                                <Image
                                                    src="/assets/images/contact/time.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="time"
                                                />
                                            </figure>

                                            <div className="right">
                                                <h5>Working Hours</h5>
                                                <p>
                                                    {item.workingHours.map((hour, idx) => (
                                                        <span key={idx}>{hour}</span>
                                                    ))}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default InvestorGrievance