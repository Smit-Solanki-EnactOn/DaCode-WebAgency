import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className='hero-section' dir="ltr">
            <div className="container">
                <div className="section-wrapper">
                    {/* Left Side */}
                    <div className='hero-content'>
                        <div className='design-element-1'></div>
                        <h1 className='hero-title'>We help you create your <span className='primary-color'>website</span></h1>
                        <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus.</p>

                        <div className="btn-wrapper">
                            <button className='btn primary-btn'>Get Started</button>
                            <button className='btn light-btn'>Contact us</button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <Image src="/images/hero-image.png" alt="Hero Image" width={700} height={600} className='hero-image' />
                </div>

                {/* Background Design */}
                <div className='design-element-2'>
                    <Image src="/images/design-element-2.png" alt="Background Design" width={600} height={600} />
                </div>

            </div >
        </section >
    )
}

export default HeroSection