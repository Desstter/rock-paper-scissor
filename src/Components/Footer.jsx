import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className='text-center' fluid>
                <Image src='Instructions.png' fluid id='Instructions' alt='InstructionsImage' />
            </Container>
        </footer>
    )
}

export default Footer;