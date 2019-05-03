import React from 'react'
import {connect} from 'react-redux'
import {Card, Navbar, Button, Dropdown} from 'react-bootstrap'
import {deleteReq} from '../actions/actions';
import RequestPopover from './RequestPopover';

function RequestCard(props) {
  
  return (
    <Card className="shadow-sm item-card">
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
          <Dropdown>
            <Dropdown.Toggle as={Button}>
              I have some!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <RequestPopover 
                card={props.card} 
                type="request" />
            </Dropdown.Menu>
          </Dropdown>

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