import React, { Component } from 'react'
import {connect} from 'react-redux'
import {newPR} from '../actions/actions';
import {Col, Row, Container,ButtonGroup, OverlayTrigger, DropdownButton, Dropdown, Button, CardDeck } from 'react-bootstrap';
import {NewPrPopover} from '../components/popovers';

import RequestCard from '../components/RequestCard';

class RequestsContainer extends Component {
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
    }
    render() {
        return (
            <div className="border">
                <Container>
                    <Row> 
                        <Col lg="5">
                          <h3>Your neighbors are looking for ...</h3>
                        </Col>
                        <Col>
                          <ButtonGroup>
                            <OverlayTrigger trigger="click" placement="right" overlay={NewPrPopover({handleSubmit:this.handlePrForm})}>
                              <Button variant="secondary">Request Food</Button>
                            </OverlayTrigger>
                            <DropdownButton as={ButtonGroup} variant="secondary" title="Sort">
                              <Dropdown.Item  eventKey="1">Newest First</Dropdown.Item>
                              <Dropdown.Item eventKey="1">Oldest First</Dropdown.Item>
                            </DropdownButton>
                            <Button variant="secondary">Show More</Button>
                          </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
                <CardDeck >
                  {this.props.requests.map(card=><RequestCard key={card.id} card={card}/>)}
                </CardDeck>
            </div>
        )} 
}


const mapStateToProps = (state, ownProps) => {
    return {
        requests: state.pantry.requests
    }
}

export default connect(mapStateToProps)(RequestsContainer)