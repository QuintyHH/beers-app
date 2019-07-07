import React from 'react';
import './cornerstone-app.scss'
import BeersList from '../beer-list/beer-list.container';
import BeerDetails from '../beer-details/beer-details.container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function Cornerstone() {
  return (
    <Router>
      <Switch>
        <Route path="/beer-details" component={BeerDetails}/>
        <Route path="/" exact component={BeersList}/>
      </Switch>
    </Router>
  );
}

export default Cornerstone;
