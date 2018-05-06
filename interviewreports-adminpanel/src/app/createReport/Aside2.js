import React from 'react'
import './reportDetail.css'


const Aside2 = ({candidate,company}) => {

    return(
        <div className="aside">
        <p>1. Select Candidate</p>
        <p>2. Select Company</p>
        <p className="candidate">3. Fill Report Details</p>
        <hr/>
        <p>Candidate:<span>{candidate}</span></p>
        <p>Company:<span>{company}</span></p>
        </div>
    )
}
export default Aside2