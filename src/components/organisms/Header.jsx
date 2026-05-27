"use client";

import Link from "next/link";
import Image from "next/image";
import "@/uploads/styles/header/header.css"
import Button from "../atoms/Button"
import { useModalStore } from "../../../store/modelStore";

const Header = () => {
    const openHam = useModalStore((state) => state.openHam);
    const openLogin = useModalStore((state) => state.openLogin)

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
                        <li> <Link href="" >Who We Are</Link> </li>
                        <li> <Link href="" >Life at Quadeye</Link> </li>
                        <li> <Link href="" >Insights</Link> </li>
                        <li> <Link href="" >Contact Us</Link> </li>

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