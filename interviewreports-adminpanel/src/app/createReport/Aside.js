import React from 'react'
import './createReport.css'


const Aside = ({candidate,company,type}) => {
const checkAside = () => {
    if(type === "candidatePage"){
        return(
            <div className="aside">
            <p className="candidate">1. Select Candidate</p>
            <p>2. Select Company</p>
            <p>3. Fill Report Details</p>
            <hr/>
            <p>Candidate:<span>{candidate}</span></p>
            
            </div>
        )
    } else if(type === "companyPage"){
        return (
            <div className="aside">
            <p>1. Select Candidate</p>
            <p className="candidate">2. Select Company</p>
            <p>3. Fill Report Details</p>
            <hr/>
            <p>Candidate:<span>{candidate}</span></p>
            <p>Company:<span>{company}</span></p>
            </div>
        )
    } else {
        return (
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
}
    return(
       checkAside()
    )
}
export default Aside