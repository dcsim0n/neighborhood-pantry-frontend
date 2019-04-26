import React from 'react';
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import userReducer from './reducers/userReducer'
import errorsReducer from './reducers/errorsReducer'
import thunk from 'redux-thunk';

import {Container,Row,Col} from 'react-bootstrap'
import SignupForm from './components/SignupForm';
import LeftNav from './components/LeftNav';
import LoginForm from './components/LoginForm';

const rootReducer = combineReducers({
  user: userReducer,
  errors: errorsReducer
})
const composeMidleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeMidleware(
    applyMiddleware(thunk)
  ))

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
              <Route path="/" render={()=>(
                store.getState().token != null
                ?
                 null
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

export default App

