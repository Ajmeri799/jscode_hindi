//   const newnum=arr.map((num)=>{
     
//       return  num+5
//   })
//   console.log(newnum)
 
// const newnum=arr
// .map((num)=> num*10)
//  .map((num)=> num+5)
// .filter((num)=>num>=40)
// console.log(newnum) 


const num=[1,2,3,4]
  
const exnum=num.reduce((acc,currval)=>{
    console.log(`acc:${acc} and cur:${currval}`)
    return acc+currval

},0);

console.log(exnum)

const books_p=[
    
    {
        book_name:"book_one",pub_date:995,sub:"history",price:2000
    },
      {
        book_name:"book_two",pub_date:2014,sub:"math",price:1999
    },
      {
        book_name:"book_three",pub_date:2000,sub:"history" ,price:2999
    },
      {
        book_name:"book_four",pub_date:2003,sub:"English",price:2005
    },
      {
        book_name:"book_five",pub_date:2007,sub:"hindi",price:2050
    }
    
    ]
const total=books_p.reduce((acc,item)=>acc+item.price,0)
console.log(total)

