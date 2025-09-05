'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import ButtonComponent from '@/components/Core/ButtonComponent';

const SwiperComponent = dynamic(() => import('@/components/Core/SwiperComponent'), {
    ssr: false,
    loading: () => <div className="swiper-loading">Loading slides...</div>,
});

const OurWorkSection = () => {

    const [activeFilter, setActiveFilter] = React.useState('All');

    const filterOptions = [
        {
            id: 1, label: 'All', category: 'All'
        },
        {
            id: 2, label: 'Website Optimization', category: 'Website Optimization'
        },
        {
            id: 3, label: 'Website Redesign', category: 'Website Redesign'
        },
        {
            id: 4, label: 'Search Engine Optimization', category: 'Search Engine Optimization'
        }
    ];

    const swiperData = [
        {
            id: 1,
            image: '/images/work1.png',
            alt: 'work1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.',
        },
        {
            id: 2,
            image: '/images/work2.png',
            alt: 'work2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.',
        },
        {
            id: 3,
            image: '/images/work3.png',
            alt: 'work3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.',
        },
        {
            id: 4,
            image: '/images/work1.png',
            alt: 'work4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.',
        },
        {
            id: 5,
            image: '/images/work2.png',
            alt: 'work5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.',
        },
        {
            id: 6,
            image: '/images/work3.png',
            alt: 'work6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.',
        }
    ]

    const handleFilterChange = (category: string) => {
        setActiveFilter(category);
        // Implement filtering logic here if needed
    }

    return (
        <section className='our-work-section'>
            <div className="container">
                <div className="our-work-wrapper">
                    <div className="works-text-wrapper">
                        <p className="subtitle">Portfolio</p>
                        <h2 className='section-title'>Our Great Work</h2>
                    </div>

                    <div className="selection-wrapper">
                        <div className="filter-buttons">
                            {filterOptions.map((option) => (
                                <button
                                    key={option.id}
                                    className={`filter-btn ${activeFilter === option.category ? 'active' : ''}`}
                                    onClick={() => handleFilterChange(option.category)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="works-slider-wrapper">
                        <SwiperComponent data={swiperData} />
                    </div>
                </div>

                {/* Background Design */}
                <div className="background-design">
                    <ButtonComponent label="See All" role="button" variant="dark" />
                </div>
            </div >
        </section >
    )
}

export default OurWorkSection