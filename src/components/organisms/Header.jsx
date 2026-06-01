"use client";

import Link from "next/link";
import Image from "next/image";
import "@/uploads/styles/header/header.css"
import { useModalStore } from "../../../store/modelStore";

const Header = () => {
    const openHam = useModalStore((state) => state.openHam);

    return (
        <header className="header-fixed">
            <div className="container-fluid header-wrapper">
                <div className="colA">
                    <Link href="/" className="logo">
                        <Image src="/assets/logo.svg" width={186} height={63} alt="logo"></Image>
                    </Link>
                </div>
                <div className="colB">

                    <ul>
                        <li> <Link href="/about-us" >Who We Are</Link> </li>
                        <li> <Link href="" >Life at Quadeye</Link> </li>
                        <li> <Link href="" >Insights</Link> </li>
                        <li> <Link href="" >Contact Us</Link> </li>

                        <li className="has-dropdown">
                            <Link href="/" className="has-link">
                                <Image src="/assets/icon/earth.svg" width={20} height={20} alt="ico" ></Image>
                                Worldwide
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                                <path d="M0 0h1024v1024H0z" fill="none" />
                                <path fill="#000" d="M104.7 338.8a64 64 0 0 1 90.5 0L512 655.6l316.8-316.8a64 64 0 0 1 90.5 90.4l-362 362.1a64 64 0 0 1-90.5 0l-362.1-362a64 64 0 0 1 0-90.5" />
                            </svg>
                            <ul className="dropdown-menu">
                                <li>New York</li>
                                <li>Hong Kong</li>
                                <li>India</li>
                                <li>Singapore</li>
                            </ul>
                        </li>

                        <li className="ham-parent">
                            <button type="button" className="ham-btn" onClick={openHam}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header