import React, {Fragment} from 'react'
import "./report.css"

const SingleReport = ({data}) => {
    const {companyName, candidateName, interviewDate, status} = data;
    return(
        <Fragment>
            <div className="col s3">
            <p className="description">{companyName}</p>
            <p>company</p>
            </div>
            <div className="col s3">
            <p className="description">{candidateName}</p>
            <p>candidate</p>
            </div>
            <div className="col s2">
            <p className="description">{data.getInterviewDate()}</p>
            <p>interview date</p>
            </div>
            <div className="col s2">
            <p className="description">{status}</p>
            <p>status</p>
            </div>
            <div className="col s2 detail-delete">
            <p><img className="detail" src="https://www.freeiconspng.com/uploads/detail-icon-png-buy-this-icon-for--0-99-10.png" alt="Report details"/>
            <img className="deleteReport" src="https://cdn3.iconfinder.com/data/icons/status/100/close_4-512.png" alt="delete report"/>
            </p>
            </div>

        </Fragment>
    )
}
export default SingleReport