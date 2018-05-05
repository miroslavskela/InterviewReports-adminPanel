import React, {Component, Fragment} from 'react'
import CandidateList from './CandidateList'
import './createReport.css'
import {reportService} from '../../services/reportsService'
import Aside from './Aside'
import MainCompanyPage from './MainCompanyPage'

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            candidates:[],
            candidateId:"",
            candidateName:"",
            candidatePage:true,
            companyPage:false
        }
        console.log(this.state.candidates);
        
    }

    componentDidMount(){
        reportService.fetchCandidates()
        .then((candidates) => {
            this.setState({candidates:candidates})
            console.log(this.state.candidates);
        })
    }

    getCandidateData = (id, name) => {
        this.setState({candidateId:id, candidateName:name})
    }
    changePage = () => {
        this.setState({candidatePage:false, companyPage:true})
    }

    render(){
     if(!this.state.candidates){
         return "asdasdasd"
     }
        return(
            <Fragment>
             {this.state.candidatePage?<div>
            <Aside candidate={this.state.candidateName}/>
            <div className=" cont">
           
               <CandidateList data={this.state.candidates} getData={this.getCandidateData}/>
                <button onClick={this.changePage} disabled={!this.state.candidateName}>Next</button>
            </div>
            </div>:null}
            {this.state.companyPage?<MainCompanyPage data={this.state.candidateName,this.state.candidateId}/>:null
                }
            </Fragment>
        )   
    }
}
    


export default MainPage