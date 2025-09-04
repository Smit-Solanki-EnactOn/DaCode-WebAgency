import React from 'react'
import Image from 'next/image'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface ServiceData {
    icon: string;
    title: string;
    description: string;
    link: string;
}

interface ServiceCardProps {
    data: ServiceData;
}

const ServiceCard = ({ data }: ServiceCardProps) => {
    return (
        <div className="service-card">
            <div className="service-card-image-wrapper">
                <div className="circle-bg"></div>
                <Image src={data.icon} alt="service1" width={45} height={45} className='service-card-image' />
            </div>
            <h3 className='service-card-title'>{data.title}</h3>
            <p className='service-card-description'>{data.description}</p>
            <a href={data.link} className='service-card-link'>Read More<LiaLongArrowAltRightSolid className='arrow-icon' /></a>
        </div>
    )
}

export default ServiceCard