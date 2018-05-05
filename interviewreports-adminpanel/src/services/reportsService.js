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
}


export const reportService = new ReportService()