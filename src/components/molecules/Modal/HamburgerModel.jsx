"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "@/uploads/styles/header/header.css"
import { useModalStore } from '../../../../store/modelStore'; 

const HamburgerModel = () => {
    const isOpen = useModalStore((state) => state.isHamOpen)
    const closeHam = useModalStore((state) => state.closeHam)

    const menuItems = [
        { id: 1, title: "Home", href: "/" },
        { id: 4, title: "Who We Are ", href: "/about-us" },
        { id: 2, title: "Life at Quadeye ", href: "/career" },
        { id: 5, title: "Insights", href: "/blogs" },
        { id: 7, title: "Contact Us", href: "/contact-us" },
    ];

    return (
        <div className={`model ham-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeHam}>
                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="model-body">
                <div className="icon">
                    <Image src="/assets/logo-q.svg" width={50} height={50} className="svg" alt="icon" />
                </div>

                <nav>
                    <ul className="nav-list">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    onClick={closeHam}
                                    target={item.targetBlank ? "_blank" : "_self"}
                                    rel={item.targetBlank ? "noopener noreferrer" : undefined}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="bottom-list">
                    <div className="social-icons">
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <Image src="/assets/icon/twitter.svg" width={25} height={25} alt="Twitter" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <Image src="/assets/icon/facebook.svg" width={25} height={25} alt="Facebook" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <Image src="/assets/icon/instagram.svg" width={25} height={25} alt="Instagram" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                            <Image src="/assets/icon/linkedin.svg" width={25} height={25} alt="LinkedIn" />
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" title="Whatsapp">
                            <Image src="/assets/icon/whatsapp.svg" width={25} height={25} alt="WhatsApp" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerModel;