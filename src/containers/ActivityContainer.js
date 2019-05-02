import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getNHInfo} from '../actions/actions';
import ItemsContainer from './ItemsContainer';
import RequestsContainer from './RequestsContainer'

class ActivityContainer extends Component {

    componentDidMount(){
        //Fetch items and requests here?
    }
    render() {
        this.props.dispatch(getNHInfo())
        return (
            <div className="shadow">
                <h2>Your Neighborhood: {this.props.selectedNH.name}</h2>
                <RequestsContainer />
                    
                <ItemsContainer />
            </div>
        )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        selectedNH: state.neighborhoods.selected
    }
}

export default connect(mapStateToProps)(ActivityContainer)