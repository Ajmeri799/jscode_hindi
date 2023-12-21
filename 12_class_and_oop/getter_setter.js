class user{

    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    get password(){
        return  this._password.toUpperCase()
    }
   set password(value){
       this._password = value
   }
     get username(){
    return this._username.toUpperCase()
    }
   set username(value){
       this._password = value
   }
}

const chai= new user("Ajmeri",'abc')
console.log(chai.username)


// get password(){
//     return this._password.toUpperCase()
// }
// set password(value){
//    this._password = value
// }
// get username(){
// return this._username.toUpperCase()
// }
// set username(value){
// this._username = value
// }



