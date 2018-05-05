class Candidate{
    constructor(candidate){
        this.id = candidate.id;
        this.name = candidate.name;
        this.birthday = candidate.birthday;
        this.email = candidate.email;
        this.education = candidate.education;
        this.avatar = candidate.avatar || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png";

    }
    getDob(){
        const date = new Date(this.birthday)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const dob = `${day}.${month}.${year}.`
        return dob;
    }
}
export default Candidate