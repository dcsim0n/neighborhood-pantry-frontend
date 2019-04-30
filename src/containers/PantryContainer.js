import React from 'react'

import {
    Col, Row, Container, ButtonGroup, Dropdown, 
    DropdownButton, Button, OverlayTrigger 
} from 'react-bootstrap';

import NHCard from '../components/NHCard';
import {NewPiPopover} from '../components/popovers';
export default function PantryContainer(props) {
    
  return (
    <div className="border">
    <Container>
        <Row> 
            <Col lg="3">
                <h3>{props.content}</h3>
            
            </Col>
            <Col>
                <ButtonGroup>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={NewPiPopover}>
                        <Button variant="secondary">New Item</Button>
                    </OverlayTrigger>
                    <DropdownButton as={ButtonGroup} variant="secondary" title="Sort">
                        <Dropdown.Item  eventKey="1">Newest First</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Oldest First</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="secondary">Show More</Button>
                    
                </ButtonGroup>
            </Col>
        </Row>
        </Container>
        <Container >
            <NHCard place={{name:"Add a new Item"}} />
        </Container>
    </div>
  )
}
