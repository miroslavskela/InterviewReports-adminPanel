import React, { Component } from 'react'
// import './Register.css'
import './Welcome.css'
import "./Buttons.css"
import { withRouter } from 'react-router-dom'
import Utils from '../../shares/Utils'


class Register extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            username: "",
            name: "",
            email: "",
            password: "",
            value: "",
            validEmail: false,
            validPass: false,
            users:[],
            error:false
        }
    }
    
    componentDidMount(){
        let history = localStorage.getItem('history')

        if(history){
            console.log(history);
        this.setState({users:JSON.parse(history)})
    }
    console.log("object");
} 
component


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.validateEmail();
        this.validatePass();
    }
    checkArray = (array, arrElement) => {
        var str1 = JSON.stringify(arrElement);
        for(let i = 0; i < array.length; i++){
            var element = array[i]; 
            var str2 = JSON.stringify(element);
            if (str1 === str2) {
                return true;
            }
        }
    
        return false;
    }

    registerProfile = (event) => {
        const {username, email, password} = this.state
        const arrayElement = {username:username, email:email, password:password}
        if(this.checkArray(this.state.users, arrayElement)){
            alert("User already exists!")
            this.props.onCreatePost("register-tab")
        }else{
            this.state.users.push({username, email, password})
            localStorage.setItem('history', JSON.stringify(this.state.users))
            
            const type = event.target.id;
            this.setState({
                value: type,   
            })
    
            this.props.onCreatePost(type);
        }
        
       
    }
   
       
       
  

    isValidInputs = () => {
        const { validEmail, validPass } = this.state;

        return validEmail && validPass
    }

    validateEmail = () => {
        const re = /\S+@\S+\.\S+/;
        if(re.test(this.state.email)){
            this.setState({validEmail:true})
        }
    }

    validatePass = () => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
         if(re.test(this.state.password)){
             this.setState({validPass:true})
         }        
    }
    isValid = () => (this.isValidInputs());


    render() {
        return (
            <div className="container">
                <div key={ localStorage.getItem('history')}>
                    <label htmlFor="username">Username</label><input onChange={this.handleInputChange} name="username" type="text" placeholder="User Name" /><br />
                    <label htmlFor="name">Name</label><input onChange={this.handleInputChange} name="name" type="text" placeholder="Full Name" /><br />
                    <label htmlFor="login">Email Address</label><input onChange={this.handleInputChange} name="email" type="email" placeholder="Email Address" /><br />
                    <label htmlFor="password">Password</label><input onChange={this.handleInputChange} name="password" type="password" placeholder="Min 6 characters" />
                </div>

                {/* <button id="login-tab" className="form-control btnLoginB" disabled={!this.isValid()} onClick={this.registerProfile}>Register</button> */}
                <a  className="waves-effect red lighten-2 btn-large" id="login-tab" disabled={!this.isValid()}  onClick={this.registerProfile}>Register</a>
            </div>

        )
    }
}


export default withRouter(Register)