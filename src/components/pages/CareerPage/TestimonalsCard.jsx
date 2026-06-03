"use client"
import React from 'react'
import Image from 'next/image'
import { useModalStore } from '../../../../store/modelStore'

const TestimonalsCard = ({ ...item }) => {
    const openVideo = useModalStore((state) => state.openVideo)

    return (
        <>
            <div className="team-card-flex">
                <div className='col' >
                    <figure>
                        <Image src="/assets/images/career/qoma-vector.svg" width={63} height={47} alt="ico"></Image>
                    </figure>
                    <p>{item.userMessage}</p>
                    <h4 className="name">{item.userName}</h4>
                    <p className="designation">{item.userDesignation}</p>
                </div>
                <div className='col' >
                    <figure>
                        <Image src={item.userImage} width={416} height={469} alt='ico' ></Image>
                        <div className="play-button">
                            <button type="button" className="play-btn" onClick={openVideo} data-video={item.userDataVideo}  ></button>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default TestimonalsCard