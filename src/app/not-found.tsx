import SEO from '@/lib/seo';
import Link from 'next/link';
import React from 'react';

const NotFoundPage  = () => {
    return (
        <>
            <SEO title="Page Not Found" description="The page you are looking for does not exist" url={undefined} image={undefined} />
            <div className='custom404 container'>
                <h2 className='custom404-title'>404</h2>
                <p className='custom404-text'>Page Not Found</p>
                <span className='custom404-span'>The page you are looking for might have been removed had its name changed or is temporarily unavailable</span>
                <Link href="/" className='link'>
                    <button className='custom404-button btn'>Back to Home</button>
                </Link>
            </div>
        </>
    );
};

export default NotFoundPage ;