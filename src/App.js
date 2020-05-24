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
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import Login from './components/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Delivery from './components/Delivery/Delivery';

function App() {
  return (
    <div >
      <AuthContextProvider>
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
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route  path="/login">
              <Login></Login>
           </Route>
           <Route  path="/create">
              <CreateAccount></CreateAccount>
           </Route>
           <Route path="/delivery">
             <Delivery></Delivery>
           </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
