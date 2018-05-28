import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    handleState = (event) => {
        event.preventDefault()
        const type = event.target.id;
        this.setState({
            value: type,
        })
        
       
        this.props.onCreatePost(type)
    }
    

    render() {
        return (
          

<div className="container">
<nav className="nav-extended ">
   
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a id="login-tab" href="#login"  onClick={this.handleState}>Login</a></li>
        <li className="tab"><a id="register-tab" href="#register"  onClick={this.handleState}>Register</a></li>
      </ul>
    </div>
  </nav>
  </div>


        )
    }
}

export default Buttons