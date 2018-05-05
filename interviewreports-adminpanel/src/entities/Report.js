class Report{
    constructor(report){
        this.id = report.id;
        this.candidateId = report.candidateId;
        this.candidateName = report.candidateName;
        this.companyId = report.companiId;
        this.companyName = report.companyName;
        this.interviewDate = report.interviewDate;
        this.phase = report.phase;
        this.status = report.status;
        this.note = report.note
    }
    getInterviewDate(){
        const date = new Date(this.interviewDate)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const interviewDate = `${day}.${month}.${year}.`
        return interviewDate;
    }
}
    export default Report