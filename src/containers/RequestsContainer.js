import React, { Component } from 'react'
import {connect} from 'react-redux'

import RequestCard from '../components/RequestCard';

class RequestsContainer extends Component {
    
    render() {
    return (
        <div>
        {this.props.requests.map(card=><RequestCard key={card.id} card={card}/>)}
        </div>
    )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        requests: state.pantry.requests
    }
}

export default connect(mapStateToProps)(RequestsContainer)