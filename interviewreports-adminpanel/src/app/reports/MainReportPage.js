import React, {Component, Fragment} from 'react'
import {reportService} from '../../services/reportsService'
import ReportList from './ReportList'
import Search from '../partials/Search'

class MainReportPage extends Component{
    constructor(props){
        super(props)
        this.state={
            reports:[],
            searchValue:""
        }
        
        console.log(this.state.reports);
    }

        componentDidMount(){
            reportService.fetchReports()
            .then((reports) => {
                this.setState({reports:reports})
            })
        }

        getSearchValue = (value) => {
            this.setState({searchValue:value})
        }

        getReports = () => {
            const { reports } = this.state
            const filterReports = reports.filter((report) => {
                return (report.candidateName.toLowerCase() + " " + report.companyName.toLowerCase()).includes(this.state.searchValue.toLowerCase());
            })
    
    
            return filterReports
    
        }

        render(){
            if(this.state.reports.length === 0){
                return(<h1>Loading....</h1>)
            }
            return(
                <Fragment>
                    <Search onSearchValueChange={this.getSearchValue}/>
                <div className="container">
                <ReportList data={this.getReports()}/>
                </div>
                </Fragment>
            )
        }
    
}
export default MainReportPage