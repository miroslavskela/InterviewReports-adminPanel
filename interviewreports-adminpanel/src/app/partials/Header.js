import React from "react"


const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Interview Reports</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="">Reports</a></li>
                    <li><a href="">Create Report</a></li>
                   
                </ul>
            </div>
        </nav>
    )
}


export default Header