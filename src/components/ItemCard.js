import React from 'react'
import {Card,OverlayTrigger} from 'react-bootstrap'
import { connect } from 'react-redux';
import {deleteItem} from '../actions/actions';
import ItemPopover from './ItemPopover'
function PantryCard(props) {
  return (
    <Card style={{width:"12em", display:"inline-block"}}>
        <Card.Title>
          {props.card.name} 
          <i className="fas fa-trash-alt" onClick={()=>props.handleDelete(props.card.id)}></i> 
          <OverlayTrigger trigger="click" placement="bottom" overlay={
            <ItemPopover user={props.user} card={props.card} />
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
        handleDelete: (id) => {dispatch(deleteItem(id))}
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PantryCard)