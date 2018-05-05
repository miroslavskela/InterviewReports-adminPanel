import React from 'react'
import './createReport.css'


const Aside = ({candidate}) => {

    return(
        <div className="aside">
        <p className="candidate">1. Select Candidate</p>
        <p>2. Select Company</p>
        <p>3. Fill Report Details</p>
        <hr/>
        <p>Candidate:{candidate}</p>
        </div>
    )
}
export default Aside