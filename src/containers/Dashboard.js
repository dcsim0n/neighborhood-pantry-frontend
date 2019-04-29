import React, { Component } from 'react'
import {connect} from 'react-redux';

import {getUserInfo, getNeighborhoods} from '../actions/actions'

class Dashboard extends Component {

  componentDidMount() {
    this.props.getNeighborhoods()
    this.props.getUserInfo()
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNeighborhoods: () => dispatch(getNeighborhoods()),
    getUserInfo: () =>dispatch(getUserInfo())
  }
  
}
const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.user.id,
    neighborhoods: state.neighborhoods
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
