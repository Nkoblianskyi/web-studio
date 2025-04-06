import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
type Service = {
    id: number;
    title: string;
    description: string;
    icon: string;
};
const services: Service[] = [
    { id: 1, title: 'Front-End', description: 'Our frontend developers understand the delicate balance between aesthetics and functionality.', icon: '/Chart.svg' },
    { id: 2, title: 'Back-End', description: 'Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.', icon: '/Activity.svg' },
    { id: 3, title: 'Design UX/UI', description: 'Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.', icon: '/Graph.svg' },

];


export const CardOffer = () => {
    return (
        <>
            <div className="services">
                {services.map((service) => (
                    <div key={service.id} className="services-card">
                        <Link className='link' href={`/offer/${service.id}`}>
                            <Image className='services-card-icon' src={service.icon} alt={service.title} aria-label={service.title} width={48} height={48} />
                            <div className="services-card-content">
                                <h2 className='services-card-title'>{service.title}</h2>
                                <p className='services-card-description'>{service.description}</p>
                                <p className='services-card-link'>Read more <IoIosArrowRoundForward className='services-card-link-icon' width={24} height={24} /></p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};