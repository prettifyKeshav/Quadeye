import { useState } from 'react'
import Image from 'next/image'

const AsideWrapper = () => {

    const [selected, setSelected] = useState([])
    const handleToggle = (id) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }
    const locationData = [
        { id: 1, label: "Gurugram" },
        { id: 2, label: "New York" },
        { id: 3, label: "Romania" },
        { id: 4, label: "Singapore" },
    ]

    return (
        <>
            <aside>
                <div className="job-location">
                    <h3>Job Location</h3>
                    <ul className="location-list">
                        {locationData.map((item) => (
                            <li key={item.id} onClick={() => handleToggle(item.id)}>
                                <span className={`custom-checkbox ${selected.includes(item.id) ? 'checked' : ''}`}></span>
                                <span className="location-label">{item.label}</span>
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
        </>
    )
}

export default AsideWrapper