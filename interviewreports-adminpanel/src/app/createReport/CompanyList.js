import React from 'react'
import SingleCompany from './SingleCompany'

const CompanyList = ({data, getData}) => {

    return(
        data.map((company, index) => {
            return (<div key={index}> 
                        <SingleCompany data={company} getData={getData}/> 
                    </div>)
        }
    )
)
}

export default CompanyList