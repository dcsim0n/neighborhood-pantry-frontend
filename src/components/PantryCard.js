import React from 'react'
import {Card} from 'react-bootstrap'
export default function PantryCard(props) {
  const {handlers, card} = props
  return (
    <Card style={{width:"12em", display:"inline-block"}}>
        <Card.Title>{card.name} 
        <i className="fas fa-trash-alt" onClick={()=>handlers.delete(card.id)}>
        </i> <i class="fas fa-info-circle"></i>
        </Card.Title>
        <ul>
          <li>{card.quantity}: {card.unit}</li>
          <li>{card.user.first_name} {card.user.last_name}</li>
        </ul>

      
    </Card>
  )
}
