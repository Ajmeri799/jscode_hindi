// let Arr=[1,2,3,4,5]
// console.log(Arr)

let newArr=new Array(1,2,3,4)
console.log(newArr)
newArr.push(5)
newArr.push(6)
newArr.pop()
console.log(newArr)

newArr.unshift(9)
console.log(newArr)

newArr.shift()
console.log(newArr)

//comparison

console.log(newArr.includes(9))

//Array convert in string
console.log("A:",newArr)
let myArr=newArr.join()
console.log(myArr)
//slice&splice

console.log(newArr.slice(1,3))

console.log(newArr.splice(1,3))
console.log(newArr)


// Arrays

const arr=[1,4,9,16,25,49];
const arr_2=[64,81,100]
// arr.push(arr_2)
// console.log(arr)

const new_arr=arr.concat(arr_2)
console.log(new_arr)

const new_Arr=[...arr,...arr_2]











