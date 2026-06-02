"use client"
import { useState } from 'react'

import JobCard from './JobCard'
import Image from 'next/image'

const JobsSecA = () => {

    const [selected, setSelected] = useState([])

    const handleToggle = (id) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }
    const locationData = [
        { id: 1, label: "Gurugram", count: 14 },
        { id: 2, label: "New York", count: 7 },
        { id: 3, label: "Romania", count: 1 },
        { id: 4, label: "Singapore", count: 7 },
    ]

    return (
        <>
            <div className="JobsSecA">
                <div className="container">
                    <div className="flex-box">
                        <aside>
                            <div className="job-location">
                                <h3>Job Location</h3>
                                <ul className="location-list">
                                    {locationData.map((item) => (
                                        <li key={item.id} onClick={() => handleToggle(item.id)}>
                                            <span className={`custom-checkbox ${selected.includes(item.id) ? 'checked' : ''}`}></span>
                                            <span className="location-label">{item.label} ({item.count})</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="form-sec">
                                <h3>Don’t See the Right Role? Let’s Connect</h3>

                                <form action="" className="form form-grid" >
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" />
                                        <label htmlFor="name">Name*</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" id="email" />
                                        <label htmlFor="email">Email*</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="tel" name="phone" className="form-control" id="phone" />
                                        <label htmlFor="email">Phone*</label>
                                    </div>

                                    <div className="form-group full">
                                        <textarea name="message" id="message" className="form-control"></textarea>
                                        <label htmlFor="message">Message*</label>
                                    </div>

                                    <button className='btn primary-btn'>
                                        <span>Submit</span>
                                        <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                                    </button>
                                </form>
                            </div>
                        </aside>

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