const arr=[1,2,3,4,5,6,7]

// no return value
// const value=arr.forEach( (item)=>{
//     console.log(item)
// }
//  )
//     console.log(value)
    


//  const newarr=arr.filter((num)=>num<5)
// console.log(newarr)
  const newarr=arr.filter((num)=>{
     
      return  num<5
  })
  //scope use return value    
console.log(newarr)


const books=[
    
    {
        book_name:"book_one",pub_date:995,sub:"history"
    },
      {
        book_name:"book_two",pub_date:2014,sub:"math"
    },
      {
        book_name:"book_three",pub_date:2000,sub:"history"
    },
      {
        book_name:"book_four",pub_date:2003,sub:"English"
    },
      {
        book_name:"book_five",pub_date:2007,sub:"hindi"
    }
    
    ]

const userbook=books.filter((bk)=>bk.sub==="history"&& bk.pub_date===2000)

console.log(userbook)
