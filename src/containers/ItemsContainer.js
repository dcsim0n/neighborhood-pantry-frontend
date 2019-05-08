import React, { Component } from 'react'
import {ButtonGroup, OverlayTrigger, DropdownButton, Dropdown, Button, Navbar } from 'react-bootstrap';

import {connect} from 'react-redux'
import {newPI} from '../actions/actions';
import {NewPiPopover} from '../components/popovers';
import ItemCard from '../components/ItemCard';

class ItemsContainer extends Component {

  state = {
    sortBy: 'newest'
  }

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
    event.target.reset()
  }

  sortCards (){
    switch (this.state.sortBy) {
      case "oldest":
        return this.props.items.sort((card1,card2)=>{
          if(card1.created_at < card2.created_at){
            return -1
          }
          if(card1.created_at > card2.created_at){
            return 1
          }
          return 0
        })
        
      case "newest":
        return this.props.items.sort((card1,card2)=>{
          if(card1.created_at < card2.created_at){
            return 1
          }
          if(card1.created_at > card2.created_at){
            return -1
          }
          return 0
        })
      default:
        return this.props.items
    }
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
                        <Dropdown.Item  onClick={()=>this.setState({sortBy:'newest'})} eventKey="1">Newest First</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({sortBy:'oldest'})}eventKey="2">Oldest First</Dropdown.Item>
                      </DropdownButton>
                      <Button variant="secondary">Show More</Button>
                    </ButtonGroup>
          </Navbar.Collapse>
          </Navbar>
          <div className="card-row" >
            {this.sortCards().map(card=><ItemCard key={card.id} card={card}/>)}
          </div>
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