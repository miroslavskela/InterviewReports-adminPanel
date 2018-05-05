import Report from '../entities/Report'
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
}


export const reportService = new ReportService()