import React, {Component, Fragment} from 'react'
import {reportService} from '../../services/reportsService'
import Aside from './Aside'
import CompanyList from './CompanyList'
import './company.css'
import Search from '../partials/Search'
import MainReportDetail from './MainReportDetail'



class MainCompanyPage extends Component{
    constructor(props){
        super(props)
        this.state={
            companies:[],
            searchValue:"",
            candidateName:this.props.data,
            candidateId:this.props.data1,
            companyName:"",
            companyId:"",
            companyPage:true,
            reportDetailPage:false
        }
        
    }

    componentDidMount(){
        reportService.fetchCompanies()
        .then((companies) => {
            this.setState({companies:companies})
        } )
    }

    getCompanyData = (id, name) => {
        this.setState({companyId:id, companyName:name})
    }

    changePage = () => {
        this.setState({companyPage:false, reportDetailPage:true})
    }
    getSearchValue = (value) => {
        this.setState({searchValue:value})
    }
    backToCandidate = () => {
        this.setState({companyPage:false})
        this.props.data2()
    }
    backToCompanyPage = () =>{
        this.setState({companyPage:true, reportDetailPage:false})
    }


    getCompanies = () => {
        const { companies } = this.state
        const filterCompanies = companies.filter((company) => {
            return (company.name.toLowerCase()).includes(this.state.searchValue.toLowerCase());
        })


        return filterCompanies

    }


    render(){
        return(
            <Fragment>
               {this.state.companyPage?<div>
                   <Search onSearchValueChange={this.getSearchValue}/>
                <Aside type={"companyPage"} candidate={this.state.candidateName} company={this.state.companyName}/>
                <div className=" cont">
                <ul>
                <CompanyList data={this.getCompanies()} getData={this.getCompanyData}/>
                <button onClick={this.changePage} disabled={!this.state.companyName}>Next</button>
                <button onClick={this.backToCandidate}>Back</button>
                </ul>
                </div>
                </div>:null}
                {this.state.reportDetailPage?<MainReportDetail data4={this.backToCompanyPage} data={this.state.candidateName} data1={this.state.candidateId} data2={this.state.companyName} data3={this.state.companyId}/>:null}
            </Fragment>
        )
    }
}
export default MainCompanyPage