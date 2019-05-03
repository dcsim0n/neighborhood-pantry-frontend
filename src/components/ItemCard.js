import React from 'react'
import {Card,Navbar, Button, Dropdown} from 'react-bootstrap'
import { connect } from 'react-redux';
import {deleteItem} from '../actions/actions';
import ItemPopover from './ItemPopover'
function PantryCard(props) {
  return (
    <Card className="item-card shadow-sm">
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
              I want some!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <ItemPopover card={props.card} />
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>

      <Card.Footer>
        {props.card.user.first_name} {props.card.user.last_name}
      </Card.Footer>
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