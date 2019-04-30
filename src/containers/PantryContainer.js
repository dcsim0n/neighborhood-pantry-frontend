import React from 'react'
import PantryCard from '../components/PantryCard';
import {Col, Row, Container } from 'react-bootstrap';

export default function PantryContainer(props) {
    
  return (
    <div className="border">
    <Container>
        <Row> 
            <Col lg="3">
                <h3>{props.title}</h3>
            
            </Col>
            <Col>
                {props.controls}
            </Col>
        </Row>
    </Container>
    <Container fluid="false" className="border" >
            <Row>
            {props.cards.map(card=>(
                <Col>
                    <PantryCard card={card}/>
                </Col>
            ))}
            </Row>
        </Container>
    </div>
  )
}
