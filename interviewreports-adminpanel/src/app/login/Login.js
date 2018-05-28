import React, { Component } from 'react'
// import './Login.css'

import Utils from '../../shares/Utils'
import "./Buttons.css";



import { withRouter, Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    checkPass = (array, arrElement, arrElement1) => {
        var str1 = JSON.stringify(arrElement);
        var str2 = JSON.stringify(arrElement1);
        let exist = false;
        
       
        for(let i = 0, j = 1; i < array.length - 1, j < array.length; i++, j++){
            var element = array[i]
            var element1 = array[j]
            var strElement = JSON.stringify(element)
            var strElement1 = JSON.stringify(element1)
                if(str1 === strElement && str2 === strElement1){
                    exist = true
                    break;
                }else{
                    exist = false
                }
            }
        
        if(exist){
            return true
        }else{
            return false
        }
        }


    loginProfile = () => {
        const history = JSON.parse(localStorage.getItem('history')) 
        if(this.checkPass(history, this.state.username, this.state.password)){
            localStorage.setItem('login', true)
            this.props.history.push('/')
        }else{
            alert("Invalid username or password")
        }
    }
    render() {
        return (

            <div className="container">
                <label htmlFor="username">Username</label><input onChange={this.handleInputChange} name="username" type="text" placeholder="User Name" /><br />
                <label htmlFor="password">Password</label><input onChange={this.handleInputChange} name="password" type="password" placeholder="Min 6 characters" />
                {/* <button className="form-control btnLoginB" onClick={this.loginProfile}>Login</button> */}
                <a className="waves-effect red lighten-2 btn-large" onClick={this.loginProfile}>Login</a>
            </div>

        )
    }
}

export default withRouter(Login)