import Link from 'next/link';
import React from 'react';

export const CardOffer = () => {
    return (
        <div>
            <Link href={`/offer/[id]`}>
                <h1>Card</h1>
            </Link>
        </div>
    );
};