import React, {Fragment} from 'react'


const Modal = (props) => {
const {candidateName, companyName, phase, status, note} = props.data;

    return(
        <Fragment>
           
        <div id="modal1" className="modal">
                         <div className="modal-content">
                         
                            <h4>{candidateName}</h4>
                        
                                 <div className="col-3">
                                    <p>Company:</p>
                                    <p className="report-data">{companyName}</p>
                                    <p>Interview Date:</p>
                                    <p className="report-data">{props.data.getInterviewDate()}</p>
                                    <p>Phase:</p>
                                    <p className="report-data">{phase}</p>
                                    <p>Status:</p>
                                    <p className="report-data">{status}</p>
                                </div>
                            <div className="col-9">
                                    <p>Notes:</p>
                                    <p className="report-data">{note}</p>
                                    <img onClick={props.closeModal}  src="https://openclipart.org/image/2400px/svg_to_png/245681/closebtn.png" alt="close button" className="close"/>
                            </div>
                        </div>
                      </div>
                      
                      </Fragment>
    )
}

export default Modal