import Report from '../entities/Report'
import Candidate from '../entities/Candidate'
import Company from '../entities/Company'
import {baseUrl} from '../shares/Constants'


class ReportService {
    
    fetchReports = () => {
        return fetch(`${baseUrl}reports`)
        .then((response) => {
            return response.json()
        }).then((reports) => {
          return  reports.map((report) =>{ 
            return new Report(report)})
        })
    }

    fetchSingleReport = (id) => {
        return fetch(`${baseUrl}reports/${id}`)
        .then((response) => {
            return response.json()
        }).then((report) => {
            return new Report(report)
        })
    }

    deleteReport = (id) => {
        return fetch(`${baseUrl}reports/${id}`,{
            method: 'DELETE'
        })
    }

    fetchCandidates = () => {
        return fetch(`${baseUrl}candidates`)
        .then((response) => {
            return response.json()
        }).then((candidates) => {
           return candidates.map((candidate) => {
                return new Candidate(candidate)
            })
        })
    }
    fetchCompanies = () => {
        return fetch(`${baseUrl}companies`)
        .then((response) => {
            return response.json()
        }).then((companies) => {
           return companies.map((company) => {
               return new Company(company)
           })
        })
    }
    addNewReport = (id,candidateName,candidateId, companyName, companyId, interviewDate, phase, status, note ) => {
        return fetch(`${baseUrl}reports`, {
            method: 'POST',
            body: JSON.stringify({
                id:id,
                candidateName:candidateName,
                candidateId:candidateId,
                companyName:companyName,
                companyId:companyId,
                interviewDate:interviewDate,
                phase:phase,
                status:status,
                note:note
            }),
            headers: {
          "Content-type": "application/json"
        }
        })
    }

}


export const reportService = new ReportService()