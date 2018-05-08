import React, {Component, Fragment} from "react"
import "./partials.css"

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            value:"",
        }
    }

    getSearchValue = (event) => {
        const value = event.target.value
        this.props.onSearchValueChange(value)
        this.setState({value: value})
    }

   

    render(){
        return(
            <Fragment>
                <div className="search">
         <form>
            <div className="input-field">
            <input id="search" type="search" value={this.state.value} placeholder="Search" onChange={this.getSearchValue} className="#ffff8d yellow accent-1" required/>
            <i className="material-icons">close</i>
            </div>
        </form>
            </div>
        </Fragment>
        )
    }
}

export default Search