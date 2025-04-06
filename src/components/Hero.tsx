import SEO from '@/lib/seo';
import React from 'react';
import Team from './Team';
import Link from 'next/link';

export const Hero = () => {
    return (
        <>
            <SEO
                title="Web Studio"
                description="Web Studio"
                url={undefined}
                image={undefined}
            />
            <section className="hero container">
                <div className='hero-content'>
                    <div className='hero-content-info'>
                        <h1 className='hero-content-title'>Creative Digital Agency That Help You Go Ahead</h1>
                        <p className='hero-content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna</p>
                        <Link href="/contacts" className='link'>
                            <button className='hero-content-button btn'>Contact Us</button>
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <Team />
                </div>
            </section>
        </>
    );
};