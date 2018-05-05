import React, {Component} from 'react'
import {reportService} from '../../services/reportsService'
import ReportList from './ReportList'

class MainReportPage extends Component{
    constructor(props){
        super(props)
        this.state={
            reports:[],
        }
    }

        componentDidMount(){
            reportService.fetchReports()
            .then((reports) => {
                this.setState({reports:reports})
            })
        }

        render(){
            return(
                <div className="container">
                <ReportList data={this.state.reports}/>
                </div>
            )
        }
    
}
export default MainReportPage