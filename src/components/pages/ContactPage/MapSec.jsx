"use client"
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const MapSec = () => {

    const [activeTab, setActiveTab] = useState(0);
    const activeLocation = locationsData[activeTab];

    return (
        <section>
            <div className="contact-secA" id="contact_secA">
                <div className="container">

                    <ul className="tab-sec">
                        {locationsData.map((item, index) => (
                            <li key={item.id} className={activeTab === index ? "active" : ""} onClick={() => setActiveTab(index)} >
                                {item.city}
                            </li>
                        ))}
                    </ul>

                    <div className="tab-nav-content">
                        <ul>
                            <li>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <g fill="none" fillRule="evenodd">
                                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path fill="#25ABE2" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
                                        </g>
                                    </svg>
                                </figure>
                                <div className="rig">
                                    <span>{activeLocation.address}</span>
                                    <Link href={activeLocation.directionLink} className="btn primary-border-btn" >
                                        <span>Get Directions</span>
                                        <Image
                                            className="arrow-ico"
                                            src="/assets/icon/btn-arrow.svg"
                                            width={20}
                                            height={8}
                                            alt="arrow"
                                        />
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <Link href={`mailto:${activeLocation.email}`}>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="#25ABE2" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z" />
                                        </svg>
                                    </figure>
                                    <span>{activeLocation.email}</span>
                                </Link>
                            </li>

                            {activeLocation.phone && (
                                <li>
                                    <Link href={`tel:${activeLocation.phoneLink}`}>
                                        <figure>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                                                <path d="M0 0h20v20H0z" fill="none" />
                                                <path fill="#25ABE2" d="m6.987 2.066l-.717.216a3.5 3.5 0 0 0-2.454 2.854c-.297 2.068.367 4.486 1.968 7.259c1.597 2.766 3.355 4.548 5.29 5.328a3.5 3.5 0 0 0 3.715-.705l.542-.514a2 2 0 0 0 .247-2.623l-1.356-1.88a1.5 1.5 0 0 0-1.655-.556l-2.051.627l-.053.01c-.226.033-.748-.456-1.398-1.582c-.68-1.178-.82-1.867-.633-2.045l1.043-.973a2.5 2.5 0 0 0 .575-2.85l-.662-1.471a2 2 0 0 0-2.4-1.095m1.49 1.505l.66 1.471a1.5 1.5 0 0 1-.344 1.71l-1.046.974C7.078 8.36 7.3 9.442 8.2 11c.846 1.466 1.618 2.19 2.448 2.064l.124-.026l2.088-.637a.5.5 0 0 1 .552.185l1.356 1.88a1 1 0 0 1-.123 1.312l-.543.514a2.5 2.5 0 0 1-2.653.503c-1.698-.684-3.303-2.311-4.798-4.9C5.152 9.3 4.545 7.093 4.806 5.278a2.5 2.5 0 0 1 1.753-2.039l.717-.216a1 1 0 0 1 1.2.548" />
                                            </svg>
                                        </figure>
                                        <span>{activeLocation.phone}</span>
                                    </Link>
                                </li>
                            )}
                        </ul>

                        <div className="flex-box-item">
                            <Image
                                src="/assets/images/contact/map-vector.png"
                                width={706}
                                height={386}
                                alt="map"
                            />

                            {locationsData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`pointer ${item.pointerClass} ${activeTab === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <span className="tooltip">
                                        {item.tooltip}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MapSec;

const locationsData = [
    {
        id: 1,
        city: "Gurugram",
        pointerClass: "first",
        tooltip: "Gurugram, India",
        address:
            "14th Floor, Two Horizon Center, Golf Course Rd, DLF Phase 5, Sector 43, Gurugram-122002, Haryana, India",
        directionLink: "/",
        email: "client@quadeye.com",
        phone: "+91-124-426-7422",
        phoneLink: "911244267422",
    },
    {
        id: 2,
        city: "Kolkata",
        pointerClass: "second",
        tooltip: "Kolkata",
        address: "184, Harish Mukherjee Road, First Floor, Kolkata – 700026 India",
        directionLink: "/",
        email: "client@quadeye.com",
        phone: "+91-33-4063-6102",
        phoneLink: "913340636102",
    },
    {
        id: 3,
        city: "New York",
        pointerClass: "third",
        tooltip: "New York",
        address: "315 7th Avenue, Suite 5 D, New York, NY 10001 USA",
        directionLink: "/",
        email: "client@quadeye.com",
        phone: "+1-212-509-8086",
        phoneLink: "12125098086",
    },
    {
        id: 4,
        city: "Hong Kong",
        pointerClass: "fourth",
        tooltip: "Hong Kong",
        address: "DAX QE Limited Room 902, Wilson House 19-27 Wyndham Street Central, Hong Kong",
        directionLink: "/",
        email: "client@quadeye.com",
    },
    {
        id: 5,
        city: "Singapore",
        pointerClass: "five",
        tooltip: "Singapore",
        address: "8 Marina View #42-053A Asia Square Tower 1 Singapore 018960",
        directionLink: "/",
        email: "client@quadeye.com",
        phone: "+65 8972 2298",
        phoneLink: "6589722298",
    },
    {
        id: 6,
        city: "Gandhinagar",
        pointerClass: "six",
        tooltip: "Gandhinagar",
        address: "Office No 2, MCX Office, 17th Floor, Unit 1&2, Gift One Tower, SC Road, Zone 5 Gift City, Gandhinagar: 382050 , Gujarat, India",
        directionLink: "/",
        email: "client@quadeye.com",
    },
];