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
}


export const reportService = new ReportService()