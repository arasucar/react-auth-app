import React from "react"
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk'
import App from './components/App'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import reducers from "./reducers";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const store = createStore(
  reducers,
  {auth: {authenticated: localStorage.getItem('token')}},
  applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signout" exact component={Signout} />
          <Route path="/feature" exact component={Feature} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)