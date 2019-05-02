import './css/index.css'
import 'react-bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import App from './App';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import userReducer from './reducers/userReducer'
import errorsReducer from './reducers/errorsReducer'
import neighborHoodReducer from './reducers/neighborhoodReducer';
import pantryReducer from './reducers/pantryReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: userReducer,
    errors: errorsReducer,
    neighborhoods: neighborHoodReducer,
    pantry: pantryReducer
  })
  const composeMidleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    composeMidleware(
      applyMiddleware(thunk)
    ))
    
ReactDOM.render(
    <BrowserRouter>
        <App store={store}/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(()=>{
  try {
    localStorage['neighborhood-pantry'] = JSON.stringify(store.getState())
  }
  catch(err){
    console.log('err', err)
  }
})
