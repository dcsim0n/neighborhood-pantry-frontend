import React from 'react'
import {Card,Button,Col} from 'react-bootstrap';

export default function PlaceCard(props) {
  return (
    <Col>
        <Card style={{width: '14em'}}>
            <Card.Body>
                <Card.Title>{props.place.name}</Card.Title>
                <Button>Join</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}
