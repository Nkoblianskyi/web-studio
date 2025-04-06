import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import SEO from '@/lib/seo';
import { CiInstagram, CiLinkedin } from 'react-icons/ci';
import { RiTelegramLine } from 'react-icons/ri';

export const Footer = () => {
    const navigationLinks = [
        { href: '/about', text: 'About' },
        { href: '/offer', text: 'Service' },
        { href: '/portfolio', text: 'Portfolio' },
        { href: '/testimonial', text: 'Testimonial' },
        { href: '/contacts', text: 'Contacts' },
        { href: '/pricing', text: 'Pricing' }
    ];
    return (
        <>
            <SEO
                title="Web Studio"
                description="Web Studio"
                url={undefined}
                image={undefined}
            />
            <footer className='footer container'>
                <div className='footer-logo'>
                    <Link href="/" className='footer-logo-link link'>
                        <Image src="/Logo.svg" className='footer-logo-link-img' alt="logo" aria-label='logo' width={37} height={31} />
                    </Link>
                    <p className='footer-logo-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <Link href="https://www.instagram.com/n.koblianskyi/" className='footer-logo-link link'>
                        <p className='footer-logo-copyright link'> © Copyright 2025 NJY Web-Studio. All rights reserved.</p>
                    </Link>

                </div>
                <nav className="footer-navigation">
                    <p className='footer-navigation-title'>Quick links</p>
                    <ul className="footer-navigation-list">
                        {navigationLinks.map((link, index) => (
                            <li className='footer-navigation-list-item' key={index}>
                                <Link className='footer-navigation-list-item-link link' href={link.href}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='footer-help'>
                    <h2 className='footer-help-title'>
                        Help
                    </h2>
                    <Link href="/privacy-policy" className='footer-help-link link'>
                        <p className='footer-help-link-text'>Privacy Policy</p>
                    </Link>
                    <Link href="/terms-conditions" className='footer-help-link link'>
                        <p className='footer-help-link-text'>Terms & Conditions</p>
                    </Link>
                </div>
                <div className='footer-subscribe'>
                    <h2 className='footer-subscribe-title'>
                        Subscribe to newsletter
                    </h2>
                    <p className='footer-subscribe-text'>
                        Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis auctor.
                    </p>
                    <div
                        className='footer-subscribe-wrapp'
                        aria-label='Subscribe to newsletter'
                    >
                        <input className='footer-subscribe-input' type="email" placeholder='Email' aria-label='Email' />
                        <button className='footer-subscribe-button' type='button'>Subscribe</button>
                    </div>
                    <div className='footer-subscribe-icons'>
                        <p className='footer-subscribe-icons-title'>Follow Us:</p>
                        <Link href="https://www.instagram.com/n.koblianskyi/" className='footer-subscribe-icons-link link'>
                            <CiInstagram className='footer-subscribe-icons-link-icon' width={32} height={32} />
                        </Link>
                        <Link href="https://www.instagram.com/n.koblianskyi/" className='footer-subscribe-icons-link link'>
                            <RiTelegramLine className='footer-subscribe-icons-link-icon' width={32} height={32} />
                        </Link>
                        <Link href="https://www.instagram.com/n.koblianskyi/" className='footer-subscribe-icons-link link'>
                            <CiLinkedin className='footer-subscribe-icons-link-icon' width={32} height={32} />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};