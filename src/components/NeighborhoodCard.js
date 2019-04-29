import React from 'react'
import {Card,Button,Col} from 'react-bootstrap';

export default function PlaceCard(props) {
  const {place} = props
  return (
    <Col>
        <Card style={{width: '14em'}}>
            <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Button onClick={()=>props.handleClick(place)}>Join</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}
