import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Navigation } from './Navigation';
import SEO from '../lib/seo';

export const Header = () => {
    return (
        <>
            <SEO
                title="Web Studio"
                description="Web Studio" url={undefined} image={undefined}
            />
            <header className="header">
                <div className="header-logo">
                    <Link href="/" className='header-logo-link link'>
                        <Image src="/web-studio/Logo.svg" className='header-logo-link-img' alt="logo" aria-label='logo' width={37} height={31} />
                    </Link>
                </div>
                <div className="header-navigation">
                    <Navigation />
                </div>
                <div className="header-contacts">
                    <Link href="/contacts" className='header-contacts-link link'>
                        <button className='header-contacts-button btn' type='button'> Contact Us</button>
                    </Link>
                </div>
            </header>
        </>
    );
};