import React, { Component } from 'react'
import {Col, Row, Container,ButtonGroup, OverlayTrigger, DropdownButton, Dropdown, Button, CardDeck, Navbar } from 'react-bootstrap';

import {connect} from 'react-redux'
import {newPI} from '../actions/actions';
import {NewPiPopover} from '../components/popovers';
import ItemCard from '../components/ItemCard';

class ItemsContainer extends Component {
  handlePiForm = (event) => {
    event.preventDefault()
    console.log('event.target.name', event.target.name.value)
    const {name, quantity, unit} = event.target
    
    const pantryItem ={
        name: name.value,
        quantity: quantity.value,
        unit: unit.value
    }
    console.log('pantryItem :', pantryItem);
    this.props.dispatch(newPI(pantryItem))
  }
  render(){
    return (
      <div className="border">
        <Navbar  bg="dark" variant="dark" className="shadow">
          <Navbar.Brand>
                    Your neighbors are sharing...

          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">

                    <ButtonGroup >
                      <OverlayTrigger trigger="click" placement="right" overlay={NewPiPopover({handleSubmit:this.handlePiForm})}>
                        <Button variant="secondary">Share Food</Button>
                      </OverlayTrigger>
                      <DropdownButton as={ButtonGroup} variant="secondary" title="Sort">
                        <Dropdown.Item  eventKey="1">Newest First</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Oldest First</Dropdown.Item>
                      </DropdownButton>
                      <Button variant="secondary">Show More</Button>
                    </ButtonGroup>
          </Navbar.Collapse>
          </Navbar>
          <CardDeck >
            {this.props.items.map(card=><ItemCard key={card.id} card={card}/>)}
          </CardDeck>
      </div>
    )
  }  
}


const mapStateToProps = (state, ownProps) => {
    return {
        items: state.pantry.items
    }
}

export default connect(mapStateToProps)(ItemsContainer)