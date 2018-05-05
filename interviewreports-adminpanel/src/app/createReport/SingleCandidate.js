import React, {Component, Fragment} from 'react'
import Aside from './Aside'


class SingleCandidate extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
candidateInformations = (event) => {
    event.stopPropagation()
     
    this.props.getData(this.props.data.id,this.props.data.name)
}
    render(){
        return(
            <Fragment>
                <div onClick={this.candidateInformations} data-candidate-name={this.props.data.name} data-candidate-id={this.props.data.id}>
            <ul className="collection" id={this.props.data.id}>
            <li className="collection-item avatar">
              <img src={this.props.data.avatar} alt="" className="circle"/>
              <p className="title">{this.props.data.name}</p>
              <p>{this.props.data.email}</p>
             
            </li>
            </ul>
            </div>
            </Fragment>
        )
    }
}

export default SingleCandidate