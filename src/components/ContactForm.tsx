import React from 'react';
import Image from 'next/image';

export const ContactForm = () => {
    return (
        <section className='contact-form'>
            <div className='contact-form-wrapp'>
                <div className='contact-form-wrapp-left'>
                    <Image
                        className='contact-form-left-img'
                        src="/contact-form.png"
                        alt="Contact"
                        fill
                        priority
                    />
                </div>
                <div className='contact-form-info'>
                    <p className='contact-form-info-title'>Contact Us</p>
                    <h2 className='contact-form-info-text'>We help you to grow your business faster & easier.</h2>
                    <p className='contact-form-info-span'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                    <button className='contact-form-info-button' type='button' aria-label='Contact Us'>Contact Us</button>
                </div>
            </div>
        </section>
    );
};
