import React, { Component } from 'react'
import {connect} from 'react-redux'

import ItemCard from '../components/ItemCard';

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(card=><ItemCard key={card.id} card={card}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.pantry.items
    }
}

export default connect(mapStateToProps)(ItemsContainer)