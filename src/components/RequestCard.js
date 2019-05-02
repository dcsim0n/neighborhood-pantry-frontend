import React from 'react'
import {connect} from 'react-redux'
import {Card,OverlayTrigger, Navbar, Button} from 'react-bootstrap'
import RequestPopover from './RequestPopover';
import {deleteReq} from '../actions/actions';

function RequestCard(props) {
  
  return (
    <Card className="w-50 shadow-sm">
        <Card.Header>
          <Navbar>
            <Navbar.Brand>
              {props.card.name} 
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <i className="fas fa-trash-alt" onClick={()=>props.handleDelete(props.card.id)}></i> 
              

            </Navbar.Collapse>
          </Navbar>
        </Card.Header>
        <Card.Body>
          <dl>
            <dt>{props.card.quantity}: {props.card.unit}</dt>
          </dl>
          <OverlayTrigger trigger="click" placement="bottom" overlay={
                <RequestPopover user={props.user} card={props.card} />
                } >
                <Button>I have some!</Button>
              </OverlayTrigger>
        </Card.Body>
      <Card.Footer>{props.card.user.first_name} {props.card.user.last_name}</Card.Footer>
    </Card>
  )
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDelete: (id) => dispatch(deleteReq(id))
  }
}
const mapStateToProps = (state,ownProps) =>{
  return {
    user: state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RequestCard)