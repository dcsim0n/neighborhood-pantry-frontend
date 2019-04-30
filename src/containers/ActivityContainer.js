import React, { Component } from 'react'
import {connect} from 'react-redux';
import {newPI,newPR} from '../actions/actions';
import PantryContainer from './PantryContainer'

import {ButtonGroup, OverlayTrigger, DropdownButton, Dropdown, Button,} from 'react-bootstrap';
import {NewPiPopover} from '../components/popovers';

class ActivityContainer extends Component {

    componentDidMount(){
        //Fetch items and requests here?
    }
    
    
    render() {
        const itemControls = (
            <ButtonGroup>
                <OverlayTrigger trigger="click" placement="right" overlay={NewPiPopover({handleSubmit:this.props.newPI})}>
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
                <OverlayTrigger trigger="click" placement="right" overlay={NewPiPopover}>
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
                controls={itemControls} />
                    
                <PantryContainer
                title="Pantry Items"
                controls={requestControls} />
            </div>
        )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newPI: () => dispatch(newPI()),
        newPR: () => dispatch(newPR())
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        selectedNH: state.neighborhoods.selected
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer)