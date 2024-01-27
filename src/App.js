
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path='/'><News key="gen" pagesize={12} country="us"       category="general" /></Route>
            <Route exact path='/science'><News key="sci" pagesize={12} country="us" category="science" /></Route>
            <Route exact path='/health'><News key="hea" pagesize={12} country="us"   category="health" /></Route>
            <Route exact path='/entertainment'><News key="ent" pagesize={12} country="us" category="entertainment" /></Route>
            <Route exact path='/business'><News key="bus" pagesize={12} country="us"           category="business" /></Route>
            <Route exact path='/sports'><News key="spo" pagesize={12} country="us" category="sports" /></Route>
            <Route exact path='/technology'><News key="tec" pagesize={12} country="us" category="technology" /></Route>

          </Switch>
        </Router>
      </div>
    )
  }
}

