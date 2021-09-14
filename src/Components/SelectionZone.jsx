import React, { useContext } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { SocketContext } from '../Context';

const SelectionZone = () => {
    const { RockPick, PaperPick, ScissorPick } = useContext(SocketContext);
    return (
        <Container>
            <Row>
                <Col>
                    <Image src='RockPick' fluid className='Selections' onClick={RockPick} />
                </Col>
                <Col>
                    <Image src='Paper.png' fluid className='Selections' onClick={PaperPick} />
                </Col>
                <Col>
                    <Image src='Scissor.png' fluid className='Selections' onClick={ScissorPick} />
                </Col>
            </Row>
        </Container>
    )
}

export default SelectionZone;