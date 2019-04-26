import React from 'react'
import {Nav} from 'react-bootstrap'

export default function LeftNav() {
  return (
    <Nav className="flex-column" >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/signup">Signup </Nav.Link>
    </Nav>
  )
}
