import React, { useContext } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { SocketContext } from '../Context';

const FightTable = () => {
    const { userpick, result, cpupick, } = useContext(SocketContext);
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={userpick} fluid />
                </Col>
                <Col>
                    <Image src={result} fluid />
                </Col>
                <Col>
                    <Image src={cpupick} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default FightTable;