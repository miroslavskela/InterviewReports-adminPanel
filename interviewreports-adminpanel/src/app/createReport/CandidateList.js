import React from 'react'


const CandidateList = () => {

    return(
        data.map(candidate, index) => {
            return (<div key={index} className="row"> 
                        <SingleCandidate data={report}/> 
                    </div>)
        }
    )
}

export default CandidateList