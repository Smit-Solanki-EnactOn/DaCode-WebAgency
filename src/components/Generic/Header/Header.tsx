'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ButtonComponent from '@/components/Core/ButtonComponent';

const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <header className="header-section">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-wrapper">
                        <Image src={"/images/dacode-logo.png"} alt="DaCode Logo" width={200} height={24} />
                    </div>

                    <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
                        <ul className="navbar-wrapper">
                            <li className="navbar-links">
                                <a href="#" className="navbar-items">Home</a>
                            </li>

                            <li className="navbar-links">
                                <a href="#" className="navbar-items">Services</a>
                            </li>

                            <li className="navbar-links">
                                <a href="#" className="navbar-items">Case</a>
                            </li>

                            <li className="navbar-links">
                                <a href="#" className="navbar-items">DaCode Specialists</a>
                            </li>

                            <li className="navbar-links">
                                <a href="#" className="navbar-items">Blog</a>
                            </li>

                            <li className="navbar-links cta-button">
                                <ButtonComponent label="Request a Quote" role="link" variant="secondary" />
                            </li>
                        </ul>
                    </nav>

                    {/* Hamburger Button */}
                    <button
                        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            {/* Overlay */}
            {
                isMobileMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
                )
            }
        </header >
    )
}

export default Header