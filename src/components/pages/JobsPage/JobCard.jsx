import React from 'react'
import Image from 'next/image'

const JobCard = () => {
    return (
        <>
            <div className="job-card">
                <div className="location">
                    <figure>
                        <Image src="/assets/icon/location.svg" width={20} height={20} alt="ico" ></Image>
                    </figure>
                    <span>Gurugram, Haryana</span>
                </div>

                <h3>Graduate-Trading Technology & Research Engineer</h3>
                <p>About Quadeye: Quadeye is a leading global algorithmic trading firm operating across major exchanges. Our engineers transform deep market</p>
            </div>
        </>
    )
}

export default JobCard