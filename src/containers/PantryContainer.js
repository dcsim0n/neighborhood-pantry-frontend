import React from 'react'
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
        <div >
                {props.children}
        </div>
    </div>
  )
}
