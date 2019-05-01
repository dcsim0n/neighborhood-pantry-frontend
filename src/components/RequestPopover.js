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
        
    }
    handleChange = (event) =>{
        this.setState({quantity: event.target.value})
    }
    componentDidMount(){
        fetchAll(`${C.API_ROOT}/pantry_requests/${this.state.request_id}`,(data)=>{
            console.log('data :', data);
        })
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
                            {/*Put more rows here */}
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