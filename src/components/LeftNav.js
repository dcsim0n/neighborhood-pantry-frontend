import React from 'react'
import {Nav} from 'react-bootstrap'

import {connect} from 'react-redux';

function LeftNav(props) {
  return (
    <Nav className="flex-column" >

        <Nav.Link href="/">{props.user.token? `Welcome: ${props.user.firstName}` : "Home" }</Nav.Link>
        <Nav.Link>Sign Out</Nav.Link>
        <Nav.Link href="/signup">Signup </Nav.Link>
    </Nav>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(LeftNav)