

function printname(){
    console.log("A")
  console.log("j")
  console.log("m")
  console.log("e")
  console.log("r")
  console.log("i")  
   }
  printname()
  
  //num1&num2 are parameter
  function addnum(num1,num2)
  {
      console.log(num1+num2)
  }
  addnum()
  // not print any value
  addnum(3,5)
  //3,5 are argument
  addnum(5,"a")
  //type arror
  function addNum(num,num2)
  {
      //const result=num+num2
      //return result
      return num+num2
  }
  console.log(addNum(5,5))
  
  
  function userlogin(username)
  {
      return `${username} loged in`
  }
  
   console.log(userlogin())
   //generet undefine error
   console.log(userlogin("ajmeri"))
  
  
  
  
  
  