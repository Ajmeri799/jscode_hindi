//  class user{

//     constructor( username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//     return `${this.password}abs`
// }

// changeUsername(){
//     return `${this.username.toUpperCase()}`
// }

//  }
//  const userOne =new user("Ajmeri","jshf@gami.com",2983);
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());

//behind the scene

function user(username,email,password)

{
        this.username=username;
        this.email=email;
        this.password=password;
}
user.prototype.encryptPassword=function(){
    return `${this.password}abs`
}
const tea =new user("Ajmeri","jshf@gami.com",2983);
console.log(tea.encryptPassword());
// console.log(tea.changeUsername());




