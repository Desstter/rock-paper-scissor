import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocketContext } from '../Context';

const FightTable = () => {
    const { userpick, result, cpupick, } = useContext(SocketContext);
    return (
        <Container className="my-2">
            <Row className="align-items-center justify-content-center">
                <Col xs={4} className="text-center px-1">
                    <img src={userpick} alt="Your pick" className="fight-img" />
                </Col>
                <Col xs={4} className="text-center px-1">
                    <img src={result} alt="Result" className="fight-img" />
                </Col>
                <Col xs={4} className="text-center px-1">
                    <img src={cpupick} alt="CPU pick" className="fight-img" />
                </Col>
            </Row>
        </Container>
    )
}

export default FightTable;
