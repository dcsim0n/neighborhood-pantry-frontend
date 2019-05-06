import React from 'react'
import {Nav} from 'react-bootstrap'

import {connect} from 'react-redux';
import {logOut} from '../actions/actions';

function LeftNav(props) {
  
  return (
    <Nav className="flex-column left-nav" >

        <Nav.Link href="/">{props.user.token? `Welcome: ${props.user.firstName}` : "Home" }</Nav.Link>
        {props.user.token
          ?
          <>
          <Nav.Link href="/settings">Account Settings</Nav.Link>
          <Nav.Link onClick={()=>props.dispatch(logOut())}>Sign Out</Nav.Link>
          </>
          :
          <Nav.Link href="/signup">Signup </Nav.Link>

      }
    </Nav>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(LeftNav)