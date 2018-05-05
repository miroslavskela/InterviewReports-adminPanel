import React from 'react'
import './createReport.css'


const Aside = ({candidate,company}) => {

    return(
        <div className="aside">
        <p className="candidate">1. Select Candidate</p>
        <p>2. Select Company</p>
        <p>3. Fill Report Details</p>
        <hr/>
        <p>Candidate:<span>{candidate}</span></p>
        
        </div>
    )
}
export default Aside