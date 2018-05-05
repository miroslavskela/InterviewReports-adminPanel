import React  from 'react'
import SingleCandidate from './SingleCandidate'
import Aside from './Aside'


const CandidateList = ({data, getData}) => {

    return(
       
       
        data.map((candidate, index) => {
            return (<div key={index} className="row"> 
                        <SingleCandidate data={candidate} getData={getData}/> 
                    </div>)
        }
    )
    
)
}

export default CandidateList