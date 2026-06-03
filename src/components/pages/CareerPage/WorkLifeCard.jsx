import React from 'react'
import Image from 'next/image'

const WorkLifeCard = ({ ...item }) => {
    return (
        <>
            <div className="work-life-card">
                <figure>
                    <Image src={item.figureImage} width={768} height={512} alt="ico" ></Image>
                </figure>
                <figcaption>
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                </figcaption>
            </div>
        </>
    )
}

export default WorkLifeCard