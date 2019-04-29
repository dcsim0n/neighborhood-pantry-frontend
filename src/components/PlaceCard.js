import React from 'react'
import {Card,Button,Col} from 'react-bootstrap';
export default function PlaceCard(props) {
    
  return (
    <Col>
        <Card style={{width: '14em'}}>
            <Card.Body>
                <Card.Title>{props.place.data.display_name}</Card.Title>
                <Button onClick={(e)=>props.handleClick(props.place)}>Create</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}