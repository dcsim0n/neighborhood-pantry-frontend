import React, { Component } from 'react'
import {connect} from 'react-redux';
import {newPI,newPR,getNHInfo} from '../actions/actions';
import PantryContainer from './PantryContainer'
import ItemsContainer from './ItemsContainer';
import RequestsContainer from './RequestsContainer'
import {ButtonGroup, OverlayTrigger, DropdownButton, Dropdown, Button,} from 'react-bootstrap';
import {NewPiPopover,NewPrPopover} from '../components/popovers';

class ActivityContainer extends Component {

    componentDidMount(){
        //Fetch items and requests here?
        this.props.getNHInfo()
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
        this.props.newPI(pantryItem)
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
        this.props.newPR(pantryRequest)
    }
    
    render() {
        const itemControls = (
            <ButtonGroup>
                <OverlayTrigger trigger="click" placement="right" overlay={NewPiPopover({handleSubmit:this.handlePiForm})}>
                    <Button variant="secondary">New Item</Button>
                </OverlayTrigger>
                <DropdownButton as={ButtonGroup} variant="secondary" title="Sort">
                    <Dropdown.Item  eventKey="1">Newest First</Dropdown.Item>
                    <Dropdown.Item eventKey="1">Oldest First</Dropdown.Item>
                </DropdownButton>
                <Button variant="secondary">Show More</Button>
            </ButtonGroup>
        )
        const requestControls = (
            <ButtonGroup>
                <OverlayTrigger trigger="click" placement="right" overlay={NewPrPopover({handleSubmit:this.handlePrForm})}>
                    <Button variant="secondary">New Request</Button>
                </OverlayTrigger>
                <DropdownButton as={ButtonGroup} variant="secondary" title="Sort">
                    <Dropdown.Item  eventKey="1">Newest First</Dropdown.Item>
                    <Dropdown.Item eventKey="1">Oldest First</Dropdown.Item>
                </DropdownButton>
                <Button variant="secondary">Show More</Button>
            </ButtonGroup>
        )
        return (
            <div>
                <h2>Your Neighborhood: {this.props.selectedNH.name}</h2>
                <PantryContainer 
                title="Pantry Requests"
                controls={requestControls}>
                    <RequestsContainer />
                </PantryContainer>
                    
                <PantryContainer
                title="Pantry Items"
                controls={itemControls}>
                    <ItemsContainer />
                </PantryContainer>
            </div>
        )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newPI: (pi) => dispatch(newPI(pi)),
        newPR: (pr) => dispatch(newPR(pr)),
        getNHInfo: ()=> dispatch(getNHInfo())
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        selectedNH: state.neighborhoods.selected
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer)