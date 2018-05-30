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
        let user = []
        user = array.filter(function(element){
            return element.username === arrElement && element.password === arrElement1
        })
        if(user.length !== 0){
            return true
        }else{
            return false
        }
    }

    // checkPass = (array, arrElement) => {

    
    //     var str1 = JSON.stringify(arrElement.username + arrElement.password);
        
    //     let exist = false;
        
    //     if(array){
    //         for(let i = 0; i < array.length; i++){
    //             var element = JSON.stringify(array[i].username + array[i].password)
    //             console.log(element, str1);
    //                 if(str1 === element){
    //                     exist = true
    //                     break;
    //                 }else{
    //                     exist = false
    //                 }
    //             }

    //         if(exist){
    //             return true
    //         }else{
    //             return false
    //         }
    //     }
    //     }
    // NOT SO GOOD SOLUTION


    loginProfile = () => {
        const history = JSON.parse(localStorage.getItem('history')) 
        const { username, password} = this.state
    
        if(this.checkPass(history, username, password)){
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