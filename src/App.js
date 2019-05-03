import React from 'react';
import {Provider,connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom';

import {Container,Row,Col, Navbar} from 'react-bootstrap'
import SignupForm from './components/SignupForm';
import LeftNav from './components/LeftNav';
import LoginForm from './components/LoginForm';
import Dashboard from './containers/Dashboard';


function App(props) {
  return (
    <Provider store={props.store}>
      <Navbar bg="light" className="shadow">
        <Navbar.Brand>
          
          <h1><i className="fas fa-store lg"></i>
            Neighborhood Pantry
            </h1>
        </Navbar.Brand>
      </Navbar>
      <Container fluid="true" >
        <Row>
          <Col className="border-right"> <LeftNav /> </Col>
          <Col lg="9"> 
            <Switch>
              <Route path="/signup" render={()=><SignupForm/>} />
              <Route path="/" render={()=>(
                props.user.token
                ?
                  <Dashboard />
                :
                <LoginForm />
              )} />
            </Switch>

          </Col>
          <Col> {/*Right side content */}</Col>
        </Row>
    </Container>
      </Provider>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    user: state.user
  }
}
export default connect(mapStateToProps)(App)

