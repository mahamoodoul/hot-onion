import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import FoodLanding from './components/FoodLanding/FoodLanding';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/Banner/Banner';
import Order from './components/Order/Order';

function App() {
  return (
    <div >
      <Header></Header>
      <Banner></Banner>
      <Router>
        <Switch>

          <Route path="/mainShop">
            <FoodLanding></FoodLanding>
          </Route>
          <Route path="/food/:id">
            <FoodDetails></FoodDetails>
          </Route>
          <Route exact path="/">
            <FoodLanding></FoodLanding>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
