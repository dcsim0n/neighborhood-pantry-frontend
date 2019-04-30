import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteItem} from '../actions/actions'

import PantryCard from '../components/PantryCard';

class RequestsContainer extends Component {
    
    render() {
    return (
        <div>
        {this.props.requests.map(card=>(
            <PantryCard 
            card={card}
            delete={this.props.handleDelete}/>
        ))}
        </div>
    )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDelete: (id) => dispatch(deleteItem(id))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        requests: state.pantry.requests
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RequestsContainer)