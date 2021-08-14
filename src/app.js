import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, Browse, Signin,Signup} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';
//import HeaderContainer from './containers/header';


export default function App() {
  const user = {};
  return (
  <Router>
      <IsUserRedirect 
      user={user}
      loggedInPath={ROUTES.BROWSE}
      path={ROUTES.SIGN_IN}
      exact
      >

        <Signin />
      </IsUserRedirect>
      <IsUserRedirect 
      user={user}
      loggedInPath={ROUTES.BROWSE}
      path={ROUTES.SIGN_UP}
      exact
      >
        <Signup />
      </IsUserRedirect>




    <Route exact path={ROUTES.BROWSE}>
      <Browse />
    </Route>

    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
  </Router>); 
}