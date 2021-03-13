import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './components/pages/Index';
import Registro from './components/pages/Registro';
import Login from './components/pages/Login';
import User from './components/pages/User';
import Admin from './components/pages/Admin';

import AutenticacionState from './context/autenticacion/autenticacionState';

const App = () => {
  return (
    <AutenticacionState>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/user' component={User} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
      </Router>
    </AutenticacionState>
  )
}

export default App;