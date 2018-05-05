import React from 'react'
import './company.css'


const Aside1 = ({candidate,company}) => {

    return(
        <div className="aside">
        <p>1. Select Candidate</p>
        <p className="candidate">2. Select Company</p>
        <p>3. Fill Report Details</p>
        <hr/>
        <p>Candidate:<span>{candidate}</span></p>
        <p>Company:<span>{company}</span></p>
        </div>
    )
}
export default Aside1