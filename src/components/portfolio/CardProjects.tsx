import SEO from '@/lib/seo';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
};
const projects: Project[] = [
    { id: 1, title: 'Front-End', description: 'Web site', image: '/projects/projects.png' },
    { id: 2, title: 'Front-End', description: 'Web site', image: '/projects/projects5.jpg' },
    { id: 3, title: 'Front-End', description: 'Web site', image: '/projects/projects2.png' },
    { id: 4, title: 'Front-End', description: 'Web site', image: '/projects/projects7.png' },
    { id: 5, title: 'Front-End', description: 'Web site', image: '/projects/projects3.png' },
    { id: 6, title: 'Front-End', description: 'Web site', image: '/projects/projects6.jpg' },

];


export const CardProjects = () => {
    return (
        <>
            <SEO
                title="Web Studio"
                description="Web Studio - projects work, development of sites web-site, SaaS, E-Commerce, Lading page"
                url={undefined}
                image={undefined}
            />
            <div className='projects-card'>
                {projects.map((project) => (
                    <div className='projects-card-list' key={project.id}>
                        <Link href='/' className='projects-card-list-link link' >
                            <Image
                                className='projects-card-list-img'
                                src={project.image}
                                alt={project.title}
                                aria-label={project.description}
                                fill
                                sizes='100vw'
                                style={{ objectFit: 'cover' }}
                            />
                        </Link>
                        <div className='projects-card-list-info'>
                            <h3 className='projects-card-list-title'>{project.title}</h3>
                            <p className='projects-card-list-text'>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};