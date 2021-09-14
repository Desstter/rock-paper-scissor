import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocketContext } from '../Context';

const Score = () => {
    const { userscore, cpuscore } = useContext(SocketContext);
    return (
        <Container>
            <Row>
                <Col><p>{userscore}</p></Col>
                <Col><p>-</p></Col>
                <Col><p>{cpuscore}</p></Col>
            </Row>
        </Container>
    )
}

export default Score;
