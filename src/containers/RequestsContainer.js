import React, { Component } from 'react'
import {connect} from 'react-redux'
import {newPR} from '../actions/actions';
import {ButtonGroup, OverlayTrigger, DropdownButton, Dropdown, Button, Navbar } from 'react-bootstrap';
import {NewPrPopover} from '../components/popovers';

import RequestCard from '../components/RequestCard';

class RequestsContainer extends Component {

    state ={
      sortBy: 'newest'
    }
    
    handlePrForm = (event) => {
        event.preventDefault()
        console.log('event.target.name', event.target.name.value)
        const {name, quantity, unit} = event.target
        
        const pantryRequest ={
            name: name.value,
            quantity: quantity.value,
            unit: unit.value
        }
        console.log('pantryRequest :', pantryRequest);
        this.props.dispatch(newPR(pantryRequest))
        event.target.reset()
    }

    sortCards (){
      switch (this.state.sortBy) {
        case "oldest":
          return this.props.requests.sort((card1,card2)=>{
            if(card1.created_at < card2.created_at){
              return -1
            }
            if(card1.created_at > card2.created_at){
              return 1
            }
            return 0
          })
          
        case "newest":
          return this.props.requests.sort((card1,card2)=>{
            if(card1.created_at < card2.created_at){
              return 1
            }
            if(card1.created_at > card2.created_at){
              return -1
            }
            return 0
          })
        default:
          return this.props.requests
      }
    }
    render() {
        return (
            <div className="border">
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand >
                          Your neighbors are looking for ..
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                          <ButtonGroup>
                            <OverlayTrigger trigger="click" placement="right" overlay={NewPrPopover({handleSubmit:this.handlePrForm})}>
                              <Button variant="secondary">Request Food</Button>
                            </OverlayTrigger>
                            <DropdownButton as={ButtonGroup} variant="secondary" title="Sort">
                              <Dropdown.Item onClick={()=>this.setState({sortBy:'newest'})} eventKey="1">Newest First</Dropdown.Item>
                              <Dropdown.Item onClick={()=>this.setState({sortBy:'oldest'})} eventKey="1">Oldest First</Dropdown.Item>
                            </DropdownButton>
                            <Button variant="secondary">Show More</Button>
                          </ButtonGroup>
                </Navbar.Collapse>
              </Navbar>  
 
                <div className="card-row">
                  {this.sortCards().map(card=><RequestCard key={card.id} card={card}/>)}
                </div>
            </div>
        )} 
}


const mapStateToProps = (state, ownProps) => {
    return {
        requests: state.pantry.requests
    }
}

export default connect(mapStateToProps)(RequestsContainer)