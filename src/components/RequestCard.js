import React from 'react'
import {connect} from 'react-redux'
import {Card,OverlayTrigger} from 'react-bootstrap'
import RequestPopover from './RequestPopover';
import {deleteReq} from '../actions/actions';

function RequestCard(props) {
  
  return (
    <Card style={{width:"12em", display:"inline-block"}}>
        <Card.Title>
          {props.card.name} 
          <i className="fas fa-trash-alt" onClick={()=>props.handleDelete(props.card.id)}></i> 
          <OverlayTrigger trigger="click" placement="bottom" overlay={
            <RequestPopover card={props.card} />
            } >
            <i className="fas fa-info-circle"></i>
          </OverlayTrigger>
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
    handleDelete: (id) => dispatch(deleteReq(id))
  }
}
export default connect(null,mapDispatchToProps)(RequestCard)