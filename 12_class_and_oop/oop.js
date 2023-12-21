console.log('ajmeri')
//-------------------------------------Object Literal--------------------------------------//
// const user={
//      username:"Ajmeri",
//      id:12345,
//      email:"adjfj@goog.com",
//      signIn:true,

//      getUserDetail:function(){
// // console.log("get data from database");
// // console.log(`username: ${this.username}`)

// console.log(this)
//      }

// }
// console.log(user)
// console.log(user.getUserDetail())

// console.log(this)

//--------------------------------------Constructer----------------------------------------//

function user(username,logincount,islogIn){
 this.username=username;
 this.logincount=logincount;
 this.islogIn=islogIn;
 return this
}
//return copy right vaue
// const user1=user("Ajmeri",8,true);
// const user2=user("Sania",9,true);
// console.log(user1);
//new is used as a constructor
const user1= new user("Ajmeri",8,true);
const user2= new user("Sania",9,true);
console.log(user2);
console.log(user1);
