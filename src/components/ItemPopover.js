import React from 'react';
import {Table, Form, FormControl, Button} from 'react-bootstrap'
import {fetchAll, postOne} from '../fetch';
import C from '../constants';
import {connect} from 'react-redux';

class ItemPopover extends React.Component {

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
            this.forceUpdate()
        })
    }
    generateRows(){
        console.log(this.state.claims)
        return this.state.claims.map(claim=>(
            <tr key={claim.id}>
                <td>{claim.quantity}</td>
                <td>{claim.user.first_name}</td>
                <td>{claim.created_at}</td>
                <td>{claim.aproved
                   ? 
                   <i className="fas fa-check"></i>
                   :
                   <i className="fas fa-times"></i>
                   }
                </td>
            </tr>
        ))

    }
    render(){
        return(
                <Form onSubmit={this.handleSubmit}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th># Claimed</th>
                            <th>Who?</th>
                            <th>Date</th>
                            <th>Approved</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.generateRows()}
                            <tr>
                                <td colSpan="3">
                                    <FormControl onChange={this.handleChange} type="number" placeholder="How much?" />
                                </td> 
                                <td>
                                    <Button type="submit">+</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Form>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(ItemPopover)