import React from 'react'
import {Card,Button} from 'react-bootstrap';

export default function NHCard(props) {
  const {place} = props
  return (
    
        <Card className="d-inline-block shadow-sm item-card" >
            <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <div className="d-flex justify-content-center">

                  <Button onClick={()=>props.handleClick(place)}>Join</Button>
                </div>
            </Card.Body>
        </Card>
   
  )
}
