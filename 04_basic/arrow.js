const chai={
    username:"ajmeri",
     id:435798,
     welcomemsg :function(){
        console.log(`${this.username},welcome`)
        //normal form 
         // console.log("ajmeri")
     }
 }
  chai.welcomemsg()
  chai.username="sania"
  chai.welcomemsg()
  
  console.log(this)
  //print empty {} in compiler print window in browser
 // window is a global object
  
  function code(){
      console.log("ajmeri")
  }
  console.log(this)
  
  const kmm = ()=>{
      console.log("ajmeri")
      console.log(this)
  }
  kmm()
  //type1-
 //  const addnum =(num1,num2)=>{
 //      return num1+num2
 //  }
 //  console.log(addnum(3,5))
 //{}in arrow function use return
  //type2-
 //  const addnum=(num1,num2)=>num1+num2
  // const addnum=(num1,num2)=>(num1+num2)
    const addnum=(num1,num2)=>({user:"ajmeri"})
  console.log(addnum(3,5))
  
  
  
  
  
  
  