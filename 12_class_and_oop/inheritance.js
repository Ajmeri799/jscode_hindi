class user{

    constructor(username){
        this.username=username;
    }

    logme(){
        console.log(`username ${this.username}`);
    }
}
class Tea extends user{
     constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
     }

addcourse(){
    console.log(`new course added by ${this.username}`)
    
}
}


 const chai= new Tea("Ajmeri","dadh@gmail.com","4847")
// console.log(chai)
chai.addcourse()
chai.logme()
const Mchai= new user("Ajmeri")
Mchai.logme()






