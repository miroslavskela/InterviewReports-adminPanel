import React, {Component, Fragment} from 'react'
import CandidateList from './CandidateList'
import './createReport.css'
import {reportService} from '../../services/reportsService'
import Aside from './Aside'
import MainCompanyPage from './MainCompanyPage'
import Search from '../partials/Search'

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            candidates:[],
            searchValue:"",
            candidateId:"",
            candidateName:"",
            candidatePage:true,
            companyPage:false
        }
       
        
    }

    componentDidMount(){
        reportService.fetchCandidates()
        .then((candidates) => {
            this.setState({candidates:candidates})
           
        })
    }

    getCandidateData = (id, name) => {
        this.setState({candidateId:id, candidateName:name})
    }
    changePage = () => {
        this.setState({candidatePage:false, companyPage:true})
    }

    getSearchValue = (value) => {
        this.setState({searchValue:value})
    }

    getCandidates = () => {
        const { candidates } = this.state
        const filterCandidates = candidates.filter((candidate) => {
            return (candidate.name.toLowerCase()).includes(this.state.searchValue.toLowerCase());
        })


        return filterCandidates

    }

    backToCandidatePage = () =>{
        this.setState({candidatePage:true, companyPage:false})
    }

    render(){
     if(!this.state.candidates){
         return "asdasdasd"
     }
        return(
            <Fragment>
             {this.state.candidatePage?<div>
                 <Search onSearchValueChange={this.getSearchValue}/>
            <Aside candidate={this.state.candidateName} type={"candidatePage"}/>
            <div className=" cont">
           
               <CandidateList data={this.getCandidates()} getData={this.getCandidateData}/>
                <button onClick={this.changePage} disabled={!this.state.candidateName}>Next</button>
            </div>
            </div>:null}
            {this.state.companyPage?<MainCompanyPage data={this.state.candidateName} data1={this.state.candidateId} data2={this.backToCandidatePage}/>:null
                }
            </Fragment>
        )   
    }
}
    


export default MainPage