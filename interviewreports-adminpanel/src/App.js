import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './app/partials/Header'
import Search from './app/partials/Search'
import MainReportPage from './app/reports/MainReportPage'
import MainPage from './app/createReport/MainPage'
import WelcomePage from './app/login/WelcomePage'
import {Switch, Route} from 'react-router-dom'
class App extends Component {


  render() {
    return (
      <Fragment>
        <Header />
       <Switch>
         <Route exact path='/newReport' component={MainPage}/>
        <Route exact path="/" component={MainReportPage}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
