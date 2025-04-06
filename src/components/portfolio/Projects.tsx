import SEO from '@/lib/seo';
import React from 'react';
import { CardProjects } from './CardProjects';


export const Projects = () => {
    return (
        <>
            <SEO
                title="Web Studio"
                description="Web Studio - projects work, development of sites web-site, SaaS, E-Commerce, Lading page"
                url={undefined}
                image={undefined}
            />
            <section className='projects container'>
                <header className='projects-header'>
                    <h2 className='projects-header-title'>Our Projects</h2>
                    <p className='projects-header-text'>Latest Project We Have Done</p>
                </header>
                <div className='projects-wrapp'>
                    <CardProjects />
                </div>
            </section>
        </>
    );
};