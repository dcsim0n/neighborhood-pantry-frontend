import React from 'react'
import {Tabs, Tab} from 'react-bootstrap';

import EditUser from '../components/EditUser'
import NeighborHoodSearch from './NeighborhoodSearch'
import UserNeighborhoods from '../components/UserNeighborhoods';

export default function UserSettings(props) {
  return (
        <>
            <h2>User Settings</h2>
        <Tabs id="user-settings" >
            <Tab eventKey="general" title="General" className="shadow">
                <EditUser />
            </Tab>
            <Tab eventKey="neighborhoods" title="My Neighborhoods" className="shadow">
                <UserNeighborhoods />
            </Tab>
            <Tab eventKey="join" title="Find new Neighborhoods">
                <NeighborHoodSearch />
            </Tab>
        </Tabs>
        </>
  )
}

