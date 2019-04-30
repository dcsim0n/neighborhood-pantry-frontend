import React from 'react'
import {Card} from 'react-bootstrap'
export default function PantryCard(props) {
  return (
    <Card style={{width:"10em"}}>
        <Card.Title>{props.card.name}</Card.Title>
        <ul>
          <li>{props.card.quantity}: {props.card.unit}</li>
          <li>{props.card.user.first_name} {props.card.user.last_name}</li>
        </ul>

      
    </Card>
  )
}
