import React from 'react';
import { CardOffer } from './CardOffer';

export const Offer = () => {
    return (
        <section className="offer container">
            <header className="offer-header">
                <h1 className='offer-header-title'>Our Service</h1>
                <p className='offer-header-text'>What Can We Bring for You</p>
            </header>
            <CardOffer/>
        </section>
    );
};