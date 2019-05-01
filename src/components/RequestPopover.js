import React from 'react';
import {Table, Form, Popover, FormControl, Button} from 'react-bootstrap'
import {fetchAll, postOne} from '../fetch';
import C from '../constants';

export default class PrInfoPopover extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            request_id: props.card.id,
            quantity: 0,
            offers:[]
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        const {token, id} = this.props.user
        // URL: api_root/users/{current_user}/offers
        // {request_id: #, quantity: #}
        const body = {
            token,
            pantry_request_id: this.state.request_id,
            quantity: this.state.quantity
        }
        postOne(`${C.API_ROOT}/users/${id}/offers`,body,(data)=>{
            const newOffers = [data,...this.state.offers]
            this.setState({offers:[newOffers]})
        })
        event.target.reset()
    }
    handleChange = (event) =>{
        this.setState({quantity: event.target.value})
    }
    componentDidMount(){
        const {token} = this.props.user
        fetchAll(`${C.API_ROOT}/pantry_requests/${this.state.request_id}?token=${token}`,(data)=>{
            this.setState({offers: data.offers})
        })
    }
    generateRows(){
        return this.state.offers.map(offer=>(
            <tr>
                <td>{offer.quantity}</td>
                <td>{offer.id}</td>
                <td>{offer.created_at}</td>
            </tr>
        ))
    }
    render(){
        return(
            <Popover {...this.props} id="popover-basic" title="Request Info">
                <Form onSubmit={this.handleSubmit}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Offered</th>
                            <th>Who?</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.generateRows()}
                            <tr>
                                <td colSpan="2">
                                    <FormControl onChange={this.handleChange} type="number" placeholder="Your offer?" />
                                </td> 
                                <td>
                                    <Button type="submit">+</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Form>
            </Popover>
        )
    }
    
}