import React, {Component, Fragment} from 'react'
import {reportService} from '../../services/reportsService'
import Aside from './Aside'
import CompanyList from './CompanyList'


class MainCompanyPage extends Component{
    constructor(props){
        super(props)
        this.state={
            companies;[],
            candidateName:this.props.data.candidateName,
            candidateId:this.props.data.candidateId
        }
        
    }

    componentDidMount(){
        reportService.fetchCompanies()
        .then((companies) => {
            this.setState({companies:companies})
        } )
    }

    render(){
        return(
            <Fragment>
                <Aside candidate={this.state.candidateName}/>
                <div className=" cont">
                <CompanyList data={this.state.companies}/>
                <button>Next</button>
                </div>
            </Fragment>
        )
    }
}
export default MainCompanyPage