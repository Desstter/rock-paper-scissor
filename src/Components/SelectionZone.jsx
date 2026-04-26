import React, { useContext } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { SocketContext } from '../Context';

const SelectionZone = () => {
    const { RockPick, PaperPick, ScissorPick } = useContext(SocketContext);
    return (
        <Container className="my-2">
            <Row className="align-items-center justify-content-center">
                <Col xs={4} className="selection-col">
                    <img src='Rock.png' alt="Rock" className='Selections' onClick={RockPick} />
                </Col>
                <Col xs={4} className="selection-col">
                    <img src='Paper.png' alt="Paper" className='Selections' onClick={PaperPick} />
                </Col>
                <Col xs={4} className="selection-col">
                    <img src='Scissor.png' alt="Scissor" className='Selections' onClick={ScissorPick} />
                </Col>
            </Row>
        </Container>
    )
}

export default SelectionZone;
