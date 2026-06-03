"use client"

import JobCard from './JobCard'
import AsideWrapper from './AsideWrapper'

const JobsSecA = () => {

    return (
        <>
            <div className="JobsSecA">
                <div className="container">
                    <div className="flex-box">
                        <AsideWrapper />

                        <div className="card-grid">
                            {cardData.map((item, index) => (
                                <JobCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsSecA


const cardData = [
    {
        location: "Gurugram, Haryana",
        title: "Graduate-Trading Technology & Research Engineer",
        description: "About Quadeye: Quadeye is a leading global algorithmic trading firm operating across major exchanges. Our engineers transform deep market",
        exploreLink: "/"
    },
    {
        location: "Gurugram, Haryana",
        title: "Quantitative Strategist - All Asset Classes",
        description: "About Quadeye: Quadeye is a leading global algorithmic trading firm operating across major exchanges. Our engineers transform deep market",
        exploreLink: "/"
    },
    {
        location: "Gurugram, Haryana",
        title: "Operations Engineer",
        description: "About Quadeye: Quadeye is a leading global algorithmic trading firm operating across major exchanges. Our engineers transform deep market",
        exploreLink: "/"
    },
    {
        location: "Gurugram, Haryana",
        title: "Network Engineer",
        description: "About Quadeye: Quadeye is a leading global algorithmic trading firm operating across major exchanges. Our engineers transform deep market",
        exploreLink: "/"
    },
    {
        location: "Gurugram, Haryana",
        title: "Business Development",
        description: "About Quadeye: Quadeye is a leading global algorithmic trading firm operating across major exchanges. Our engineers transform deep market",
        exploreLink: "/"
    },
    {
        location: "Gurugram, Haryana",
        title: "Quantitative Strategist - China, Crypto and Options",
        description: "About Quadeye: Quadeye is a leading global algorithmic trading firm operating across major exchanges. Our engineers transform deep market",
        exploreLink: "/"
    }
]