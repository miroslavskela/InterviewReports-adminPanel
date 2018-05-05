import React, {Component} from 'react'


class SingleCandidate extends Component{
    constructor(props){
        super(props)
        this.state{

        }
    }

    render(){
        return(
            <ul class="collection">
            <li class="collection-item avatar">
              <img src={this.props.data.avatar} alt="" class="circle"/>
              <span class="title">{this.props.data.candidateName}</span>
              <p>{this.props.data.email}</p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            </ul>
        )
    }
}

export default SingleCandidate