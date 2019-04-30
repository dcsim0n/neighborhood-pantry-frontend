import React from 'react'

import {Col, Row, Container, ButtonGroup, Dropdown, DropdownButton, Button} from 'react-bootstrap';
import NHCard from '../components/NHCard';
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
                    <Button variant="secondary">New Item</Button>
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
