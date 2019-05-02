import React from 'react'
import {Card,OverlayTrigger,Navbar, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import {deleteItem} from '../actions/actions';
import ItemPopover from './ItemPopover'
function PantryCard(props) {
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
          <OverlayTrigger trigger="click" placement="top" overlay={
                <ItemPopover user={props.user} card={props.card} />
                } >
                <Button> I want some!</Button>
              </OverlayTrigger>
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