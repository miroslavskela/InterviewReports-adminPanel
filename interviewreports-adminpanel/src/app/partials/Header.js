import React, {Component} from "react"
import { Link } from 'react-router-dom'

class Header extends Component { 
 constructor(props){
     super(props)
 }
     logOut = () => {
        localStorage.removeItem('login')
    }

    render(){
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Interview Reports</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Reports</Link></li>
                    <li><Link to='/newReport'>Create Report</Link></li>
                    <li onClick={this.logOut}><Link to="/login">
                         LogOut  </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
}


export default Header