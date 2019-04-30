import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'react-bootstrap'

import {deleteReq} from '../actions/actions';

function RequestCard(props) {

  return (
    <Card style={{width:"12em", display:"inline-block"}}>
        <Card.Title>
          {props.card.name} 
          <i className="fas fa-trash-alt" onClick={()=>props.handleDelete(props.card.id)}></i> 
          <i className="fas fa-info-circle"></i>
        </Card.Title>
        <ul>
          <li>{props.card.quantity}: {props.card.unit}</li>
          <li>{props.card.user.first_name} {props.card.user.last_name}</li>
        </ul>

      
    </Card>
  )
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDelete: (id) => dispatch(deleteReq(id))
  }
}
export default connect(null,mapDispatchToProps)(RequestCard)