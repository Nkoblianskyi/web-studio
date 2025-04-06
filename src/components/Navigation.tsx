import Link from 'next/link';
import React from 'react';

export const Navigation = () => {
    const navigationLinks = [
        { href: '/about', text: 'About' },
        { href: '/offer', text: 'Service' },
        { href: '/portfolio', text: 'Portfolio' },
        { href: '/testimonial', text: 'Testimonial' },
        { href: '/contacts', text: 'Contacts' },
        { href: '/pricing', text: 'Pricing' }
    ];

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                {navigationLinks.map((link, index) => (
                    <li className='navigation-list-item' key={index}>
                        <Link className='navigation-list-item-link link' href={link.href}>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
