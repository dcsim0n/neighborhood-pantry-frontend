import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserItems, getUserRequests} from '../actions/actions';
import {Table} from 'react-bootstrap'

class UserPantry extends Component {
    componentDidMount() {
        this.props.getUserItems()
        this.props.getUserRequests()
    }
    render(){
        return (
            <div>
                <h2>Responses to your posts</h2>
                <Table striped brodered>
                    <thead>
                        <th>Quantity</th>
                        <th>From:</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        
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