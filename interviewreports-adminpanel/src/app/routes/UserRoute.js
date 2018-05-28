import React, { Component } from "react";

export default ComposedComponent => 
  class Auth extends Component {
    componentDidMount = () => {
      if (!localStorage.getItem('login')) this.props.history.push("/login");
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
;