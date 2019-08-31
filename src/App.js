import React, { Component } from 'react'
import './App.css';
import ProfileCreate from './components/ProfileCreate';
import ProfileDetails from './components/ProfileDetails';
import MainPage from './components/MainPage';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/create" component={ProfileCreate} />
          <Route exact path="/details" component={ProfileDetails} />
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}
export default App;