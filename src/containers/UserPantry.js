import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserItems, getUserRequests} from '../actions/actions';
import {Table} from 'react-bootstrap'

class UserPantry extends Component {
    componentDidMount() {
        this.props.getUserItems()
        this.props.getUserRequests()
    }
    renderItems(){
        return this.props.items.map((item)=>{
            
            return (
                <tr>
                    <td>{item.quantity}</td>
                    <td>{item.name}</td>
                    <td>{item.created_at}</td>
                </tr>
            )
        })
    }
    renderRequests(){
        return this.props.requests.map((request)=>{
            console.log('request', request)
            return (
                <tr>
                    <td>{request.quantity}</td>
                    <td>{request.name}</td>
                    <td>{request.created_at}</td>
                </tr>
            )
        })
    }
    render(){
        return (
            <div>
                <h2>Responses to your posts</h2>
                <Table striped brodered>
                    <thead>
                        <th>Quantity</th>
                        <th>Description:</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                        {this.renderRequests()}
                    </tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        requests: state.pantry.requests,
        items: state.pantry.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserItems: () => dispatch(getUserItems()),
        getUserRequests: ()=> dispatch(getUserRequests())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserPantry)