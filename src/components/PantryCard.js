import React from 'react'
import {Card} from 'react-bootstrap'
export default function PantryCard(props) {
  return (
    <Card style={{width:"12em", display:"inline-block"}}>
        <Card.Title>{props.card.name} <i className="fas fa-trash-alt"></i> <i class="fas fa-info-circle"></i></Card.Title>
        <ul>
          <li>{props.card.quantity}: {props.card.unit}</li>
          <li>{props.card.user.first_name} {props.card.user.last_name}</li>
        </ul>

      
    </Card>
  )
}
