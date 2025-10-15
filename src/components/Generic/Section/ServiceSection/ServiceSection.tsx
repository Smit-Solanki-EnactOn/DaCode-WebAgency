'use client'
import React from 'react'
import './service-section.scss'
import InfoCard from '../../Cards/InfoCard/InfoCard';

const ServiceSection = () => {
    const servicesData = [
        {
            id: 1,
            icon: "/images/wordpress-website.png",
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            link: "#"
        },
        {
            id: 2,
            icon: "/images/wordpress-plugin.png",
            title: "WordPress Plugin",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            link: "#"
        },
        {
            id: 3,
            icon: "/images/website-redesign.png",
            title: "Website Redesign",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            link: "#"
        },
        {
            id: 4,
            icon: "/images/wordpress-site-optimization.png",
            title: "WordPress Site Optimization",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            link: "#"
        },
        {
            id: 5,
            icon: "/images/seo.png",
            title: "Search Engine Optimization",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            link: "#"
        },
        {
            id: 6,
            icon: "/images/cross-platform.png",
            title: "Cross Platform Mobile App",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
            link: "#"
        }
    ]


    return (
        <section className='service-section' dir="ltr">
            <div className="container">
                <div className="service-wrapper">
                    <div className="section-text-wrapper">
                        <h2 className='section-title'>Our Services</h2>
                        <p className='section-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et.</p>
                    </div>

                    <div className="service-cards-wrapper">
                        {servicesData.map((service) => (
                            <InfoCard key={service.id} data={service} />
                        ))}
                    </div>
                </div>
            </div >
        </section >
    )
}

export default ServiceSection