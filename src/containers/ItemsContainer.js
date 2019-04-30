import React, { Component } from 'react'
import {connect} from 'react-redux'

import PantryCard from '../components/PantryCard';

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(card=><PantryCard card={card}/>)}
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => dispatch()
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.pantry.items
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsContainer)