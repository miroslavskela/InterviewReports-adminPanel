import React, {Component,Fragment} from 'react'
import "./report.css"
import {reportService} from '../../services/reportsService'
import Modal from './Modal'
import {withRouter} from 'react-router-dom'

class SingleReport extends Component{
    constructor(props){
        super(props)
        this.state={
            report:null,
            id:null,
            modal:false
        }
    }

    getReportDetail = () => {
        reportService.fetchSingleReport(this.props.data.id)
        .then((report) => {
            this.setState({report:report, modal:!this.state.modal})
        })
    }
    closeModal = () => {
        this.setState({modal:false})
    }

    deleteReport = (e) => {
        e.preventDefault()
        reportService.deleteReport(this.props.data.id)
        .then((response) => {
            this.props.history.push('/')
            window.location.reload()
        })
    }

    render(){
    return(
        <Fragment>
            <div className="col s3">
            <p className="description">{this.props.data.companyName}</p>
            <p>company</p>
            </div>
            <div className="col s3">
            <p className="description">{this.props.data.candidateName}</p>
            <p>candidate</p>
            </div>
            <div className="col s2">
            <p className="description">{this.props.data.getInterviewDate()}</p>
            <p>interview date</p>
            </div>
            <div className="col s2">
            <p className="description">{this.props.data.status}</p>
            <p>status</p>
            </div>
            <div className="col s2 detail-delete">
            <p><img onClick={this.getReportDetail}  className="detail" src="https://www.freeiconspng.com/uploads/detail-icon-png-buy-this-icon-for--0-99-10.png" alt="Report details"/>
            <img className="deleteReport" onClick={this.deleteReport} src="https://cdn3.iconfinder.com/data/icons/status/100/close_4-512.png" alt="delete report"/>
            </p>
            </div>
               {this.state.modal?<Modal data={this.state.report} closeModal={this.closeModal}/>:null}

        </Fragment>
    )
}
}
export default withRouter(SingleReport)