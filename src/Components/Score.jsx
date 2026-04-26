import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocketContext } from '../Context';

const Score = () => {
    const { userscore, cpuscore } = useContext(SocketContext);
    return (
        <Container className="score-section">
            <Row className="justify-content-center align-items-center">
                <Col xs="auto"><p>{userscore}</p></Col>
                <Col xs="auto"><p>-</p></Col>
                <Col xs="auto"><p>{cpuscore}</p></Col>
            </Row>
        </Container>
    )
}

export default Score;
