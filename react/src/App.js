import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Registro from './components/pages/Registro';
import Login from './components/pages/Login';
import User from './components/pages/usuarios/User';

import Admin from './components/pages/administrador/Admin';
import UsuariosAdmin from './components/pages/administrador/UsuariosAdmin';
import ProductosAdmin from './components/pages/administrador/ProductosAdmin';
import CestasAdmin from './components/pages/administrador/CestasAdmin';

import AutenticacionState from './context/autenticacion/autenticacionState';

import AdminState from './context/Admin/adminState';

const App = () => {
  return (
    <AutenticacionState>
      <AdminState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/registro' component={Registro} />
            <Route exact path='/login' component={Login} />

            <Route exact path='/user' component={User} />

            <Route exact path='/admin' component={Admin} />
            <Route exact path='/usuariosAdmin' component={UsuariosAdmin} />
            <Route exact path='/productosAdmin' component={ProductosAdmin} />
            <Route exact path='/cestasAdmin' component={CestasAdmin} />
          </Switch>
        </Router>
      </AdminState>
    </AutenticacionState>
  )
}

export default App;