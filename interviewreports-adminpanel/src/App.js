import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './app/partials/Header'
import Search from './app/partials/Search'
import MainReportPage from './app/reports/MainReportPage'

class App extends Component {


  render() {
    return (
      <Fragment>
        <Header />
        <Search/>
        <MainReportPage/>
      </Fragment>
    );
  }
}

export default App;
