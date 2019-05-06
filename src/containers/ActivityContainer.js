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
    if(state.neighborhoods.selected){
        return {selectedNH: state.neighborhoods.selected}
    }else{
        //If nobody has made a selection, then use the last one
        const last = state.neighborhoods.all.length - 1
        return {selectedNH: state.neighborhoods.all[last]}
    }
}

export default connect(mapStateToProps)(ActivityContainer)