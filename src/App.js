import './App.css';
import Login from './Pages/Login/index';
import Cadastro from './Pages/Cadastro/index';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/cadastro">
            <Cadastro/>
          </Route>

          <Route path="/">
            <Login/>
          </Route>

        </Switch>
    </Router>
  );
}
