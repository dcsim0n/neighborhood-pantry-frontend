import React, { Component } from 'react'
import {connect} from 'react-redux';

import {getUserInfo, getNeighborhoods} from '../actions/actions'
import NeighborhoodSearch from './NeighborhoodSearch';
class Dashboard extends Component {

  componentDidMount() {
    this.props.getNeighborhoods()
    this.props.getUserInfo()
  }
  render() {
    return (
      <div>
        {this.props.neighborhoods.length < 1
        ?
        <NeighborhoodSearch />
        :
        null }
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
