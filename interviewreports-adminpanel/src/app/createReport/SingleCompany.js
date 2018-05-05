import React, {Component,Fragment} from 'react'


class SingleCompany extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    companyInformations = (event) => {
        event.stopPropagation()
        this.props.getData(this.props.data.id, this.props.data.name)
    }
    render(){
        return(
            <li onClick={this.companyInformations} className="companies">{this.props.data.name}</li>
        )
    }
}
export default SingleCompany