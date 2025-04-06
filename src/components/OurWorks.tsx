import React from 'react';

export const OurWorks = () => {
    return (
        <>
            <section className="works">
                <header className="works-header">
                    <h2 className="works-header-title">Our Works</h2>
                    <p className="works-header-text">This is How We Works</p>
                </header>
                <video
                    controls width="100%"
                    className="works-video"
                    playsInline
                    preload="auto">
                    <source src="/videos/work-2.mp4" type="video/mp4" />
                    Your browser does not support video.
                </video>
            </section>
        </>
    );
};