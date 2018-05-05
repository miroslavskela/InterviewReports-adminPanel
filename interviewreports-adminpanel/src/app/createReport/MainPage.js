import React, {Component} from 'react'
import CandidateList from './CandidateList'

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            candidates:[]
        }
    }


    render(){
        return(
            <div className="container">
            <CandidateList/>
            </div>
        )
    }
}

export default MainPage