import React, { Component } from "react";


export default ComposedComponent =>
  class Auth extends Component {
    componentDidMount = () => {
        if (localStorage.getItem('login')) this.props.history.push("/")
    }


    render() {
      return <ComposedComponent {...this.props} />;
    }
  };