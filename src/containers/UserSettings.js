import React from 'react'
import {Tabs, Tab} from 'react-bootstrap';
import {connect} from 'react-redux'

import SignUpForm from '../components/SignupForm'
import NeighborHoodSearch from './NeighborhoodSearch'
import UserNeighborhoods from '../components/UserNeighborhoods';

function UserSettings(props) {
  return (
        <>
            <h2>User Settings</h2>
        <Tabs id="user-settings">
            <Tab eventKey="general" title="General">
                <SignUpForm user={props.user}/>
            </Tab>
            <Tab eventKey="neighborhoods" title="My Neighborhoods">
                <UserNeighborhoods />
            </Tab>
            <Tab eventKey="join" title="Find new Neighborhoods">
                <NeighborHoodSearch />
            </Tab>
        </Tabs>
        </>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(UserSettings)