import React, {Component, Fragment} from "react"

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            value:""
        }
    }

    render(){
        return(
            <Fragment>
         <form>
            <div className="input-field">
            <input id="search" type="search" placeholder="Search" className="#ffff8d yellow accent-1" required/>
            <i className="material-icons">close</i>
            </div>
        </form>
        </Fragment>
        )
    }
}

export default Search