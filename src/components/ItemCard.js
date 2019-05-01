import React from 'react'
import {Card} from 'react-bootstrap'
import { connect } from 'react-redux';
import {deleteItem} from '../actions/actions';
function PantryCard(props) {
  return (
    <Card style={{width:"12em", display:"inline-block"}}>
        <Card.Title>
          {props.card.name} 
          <i className="fas fa-trash-alt" onClick={()=>props.handleDelete(props.card.id)}></i> 
          <i className="fas fa-info-circle"></i>
        </Card.Title>
        <Card.Body>
        <dl>
          <dt>{props.card.quantity}: {props.card.unit}</dt>
          <dd>{props.card.user.first_name} {props.card.user.last_name}</dd>
        </dl>
        </Card.Body>
      
    </Card>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDelete: (id) => {dispatch(deleteItem(id))}
    }
}
export default connect(null,mapDispatchToProps)(PantryCard)