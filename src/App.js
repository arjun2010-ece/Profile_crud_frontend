import React, { Component,Fragment } from 'react'
import './App.css';
import ProfileCreate from './components/ProfileCreate';
import ProfileDetails from './components/ProfileDetails';
import MainPage from './components/MainPage';
import ProfileLists from './components/ProfileLists';
import ProfileEdit from './components/ProfileEdit';
import Navigation from './components/Navigation';

import {BrowserRouter, Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/create" component={ProfileCreate} />
            <Route exact path="/details/:id" component={ProfileDetails} />
            <Route exact path="/list" component={ProfileLists} />
            <Route exact path="/edit" component={ProfileEdit} />
          </Switch>
        </Fragment>
      </BrowserRouter>
      </div>
    )
  }
}
export default App;