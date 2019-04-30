import React from 'react'

import {Col, Row, Container } from 'react-bootstrap';

import NHCard from '../components/NHCard';
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
        <Container >
            <NHCard place={{name:"Add a new Item"}} />
        </Container>
    </div>
  )
}
