import React from 'react';
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {createStore} from 'redux'
import {combineReducers} from 'redux'
import userReducer from './reducers/userReducer'

import {Container,Row,Col} from 'react-bootstrap'
import SignupForm from './components/SignupForm';
import LeftNav from './components/LeftNav';

const rootReducer = combineReducers({
  userReducer
})

const store = createStore(rootReducer)

function App(props) {
  return (
    <Provider store={store}>
      <Container fluid="true">
        <Row>
          <Col>
            
              <h1>Neighborhood Pantry</h1>
            
          </Col>
        </Row>
        <Row>
          <Col> <LeftNav /> </Col>
          <Col> 
            <Switch>
              <Route path="/signup" render={()=><SignupForm/>} />
              <Route path="/" render={()=> <h3>Hello World</h3>} />
            </Switch>

          </Col>
          <Col> {/*Right side content */}</Col>
        </Row>
    </Container>
      </Provider>
  );
}

export default App;
