import React from 'react'
import JobCard from './JobCard'

const JobsSecA = () => {
    return (
        <>
            <div className="JobsSecA">
                <div className="container">
                    <div className="flex-box">
                        <aside>

                        </aside>

                        <div className="card-grid">
                            <JobCard />
                            <JobCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsSecA