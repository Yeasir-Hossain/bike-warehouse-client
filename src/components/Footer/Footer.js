import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-white bg-dark mt-5 footer d-flex flex-column justify-content-center align-items-center'>
            <p className='mb-0'>All rights reserved</p>
            <p className='mb-0'><small>Copyright <FontAwesomeIcon icon={faCopyright} /> {year} </small></p>
        </footer>       
    );
};

export default Footer;