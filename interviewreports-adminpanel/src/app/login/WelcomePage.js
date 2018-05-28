import React, { Component } from 'react'
import WelcomeLoginText from './WelcomeLoginText'
import WelcomeRegisterText from './WelcomeRegisterText'
import Register from './Register'
import Login from './Login'
import Buttons from './Buttons';
import "./Welcome.css";
class WelcomePage extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            value: ''
        })
    }
    componentDidMount() {
        console.log("cdm");
    }

    onCreatePostClick = (type,selectedRegister, selectedLogin) => {
        this.setState({ value: type })
    }




    render() {
        return (
            <div className="container-fluid ">
                <div className="row login">
                    <div className="col-12 col-md-8 offset-md-2 col-sm-12  ">
                        <div className="logreg">
                            {(this.state.value === 'register-tab') ? < WelcomeRegisterText /> : <WelcomeLoginText />}
                        </div>
                        <div className="col-12 col-md-10 offset-md-1 col-sm-12">
                            <Buttons onCreatePost={this.onCreatePostClick} />
                            {(this.state.value === 'register-tab') ? <Register onCreatePost={this.onCreatePostClick} /> : <Login />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage