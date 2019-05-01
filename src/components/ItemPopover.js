import React from 'react';
import {Table, Form, Popover, FormControl, Button} from 'react-bootstrap'
import {fetchAll, postOne} from '../fetch';
import C from '../constants';

export default class ItemPopover extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            item_id: props.card.id,
            quantity: 0,
            claims:[]
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        const {token, id} = this.props.user
        // URL: api_root/users/{current_user}/claims
        // {claim_id: #, quantity: #}
        const body = {
            token,
            pantry_item_id: this.state.item_id,
            quantity: this.state.quantity
        }
        postOne(`${C.API_ROOT}/users/${id}/claims`,body,(data)=>{
            console.log(data)
            const newClaims = [data,...this.state.claims]
            this.setState({claims:newClaims})
        })
        event.target.reset()
    }
    handleChange = (event) =>{
        this.setState({quantity: event.target.value})
    }
    componentDidMount(){
        const {token} = this.props.user
        fetchAll(`${C.API_ROOT}/pantry_items/${this.state.item_id}?token=${token}`,(data)=>{
            this.setState({claims: data.claims})
        })
    }
    generateRows(){
        console.log(this.state.claims)
        return this.state.claims.map(claim=>(
            <tr key={claim.id}>
                <td>{claim.quantity}</td>
                <td>{claim.user.first_name}</td>
                <td>{claim.created_at}</td>
            </tr>
        ))

    }
    render(){
        return(
            <Popover {...this.props} id="popover-basic" title="Would you like some?">
                <Form onSubmit={this.handleSubmit}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th># Claimed</th>
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