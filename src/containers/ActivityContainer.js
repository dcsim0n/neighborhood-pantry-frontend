import React, { Component } from 'react'
import {connect} from 'react-redux';
import {newPI,newPR} from '../actions/actions';
import PantryContainer from './PantryContainer'

class ActivityContainer extends Component {

    componentDidMount(){
        //Fetch items and requests here?
    }
    render() {
        return (
            <div>
                <h2>Your Neighborhood: {this.props.selectedNH.name}</h2>
                <PantryContainer content="Pantry Requests" />
                <PantryContainer content="Pantry Items" />
            </div>
        )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newPI: () => dispatch(newPI()),
        newPR: () => dispatch(newPR())
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        selectedNH: state.neighborhoods.selected
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer)