import React from 'react'
import SingleReport from './SingleReport'


const ReportList = ({data}) => {

    return(
        
    data.map((report, id) => {
        return (<div key={id} className="row"> 
                    <SingleReport data={report}/> 
                </div>)
    })
        
    )
}

export default ReportList