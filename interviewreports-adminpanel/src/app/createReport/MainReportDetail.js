import React, {Component, Fragment} from 'react'
import './reportDetail.css'
import Aside from './Aside'
import {reportService} from '../../services/reportsService'
import {withRouter} from 'react-router-dom'
import Utils from '../../shares/Utils'

class MainReportDetail extends Component{
    constructor(props){
        super(props)
        const number=0;
        this.state={
            info:false,
            dateInfo:false,
            reportDetailPage:true,
            companyPage:false,
            candidateName:this.props.data,
            candidateId:this.props.data1,
            companyName:this.props.data2,
            companyId:this.props.data3,
            interviewDate:"",
            phase:null,
            status:"",
            note:""
        
        }
       
        
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    backToCompany = () => {
        this.setState({reportDetailPage:false})
        this.props.data4()
    }

    getRandomId = () => {
        const id = Math.round(99000*Math.random()+1000)
        return id
    }
    number = this.getRandomId()

    
        
    
    validateInputs = () => {
        const chosenDate = new Date(this.state.interviewDate)
        const chosenDateSeconds = (chosenDate.getTime()-2000000)
        const todayDate = new Date();
        const todayDateSeconds = todayDate.getTime()
        console.log(chosenDateSeconds, todayDateSeconds);
        if(!this.state.interviewDate && (!this.state.phase || !this.state.status || !this.state.note)){
            this.setState({info:true})
        }else if(!!this.state.interviewDate && !!this.state.phase && !!this.state.status && !!this.state.note && (chosenDate!==undefined && (chosenDateSeconds > todayDateSeconds))){
            this.setState({dateInfo:true, info:false})
        }else if((chosenDate!==undefined && (chosenDateSeconds > todayDateSeconds))&&(!this.state.phase || !this.state.status || !this.state.note)){
            this.setState({info:true, dateInfo:true})    
        }else if((chosenDate!==undefined && (chosenDateSeconds < todayDateSeconds))&&(!this.state.phase || !this.state.status || !this.state.note)){
            this.setState({info:true, dateInfo:false})    
        }
        else{
            this.setState({info:false, dateInfo:false})
            reportService.addNewReport(this.number,this.state.candidateName, this.state.candidateId, this.state.companyName, this.state.companyId, this.state.interviewDate, this.state.phase, this.state.status,this.state.note)
            .then((repsonse) => {  
                this.props.history.push('/')
            })
        }
    }
    
    
    // addNewReport = () => {
    //     reportService.addNewReport(this.number,this.state.candidateName, this.state.candidateId, this.state.companyName, this.state.companyId, this.state.interviewDate, this.state.phase, this.state.status,this.state.note)
    //     .then((repsonse) => {  
    //         this.props.history.push('/')
    //     })
    // }

    render(){
        return(
            
            <Fragment>

                {this.state.reportDetailPage?<div><Aside type={"reportDetail"} candidate={this.state.candidateName} company={this.state.companyName}/>
                <div className="con">
                <div className="row">
                <div className="col s4">
                <input onChange={this.handleChange} type="date" className="date" name="interviewDate" placeholder="Interview Date"/>
                </div>

                <div className="col s4">
                <select  onChange={this.handleChange} name="phase">
                <option value="">Chose Phase</option>
                <option value="CV">CV</option>
                <option value="HR">HR</option>
                <option value="TECH">TECH</option>
                <option value="Finall">Finall</option>
                </select>
                </div>

                <div className="col s4">
                <select  onChange={this.handleChange} name="status">
                <option value="">Chose status</option>
                <option value="passed">Passed</option>
                <option value="declined">Declined</option>
                </select>
                </div>
                <div className="col s12">
                <textarea  onChange={this.handleChange} id="textarea1" name="note"  onChange={this.handleChange} className="materialize-textarea" placeholder="Note"></textarea>
                </div>
                {this.state.info?<div>
                    <p className="red-text">All inputs are required!</p>
                </div>:null}
                {this.state.dateInfo?<div>
                    <p className="red-text">Date can't be in the future!</p>
                </div>:null}
                </div>
                <button onClick={this.validateInputs} >Send</button>
                <button onClick={this.backToCompany}>Back</button>
                </div>
                </div>:null}
            </Fragment>
        )
    }
}
export default withRouter(MainReportDetail)