// console.log(Math.PI);
//  const desc=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(desc)
// console.log(Math.PI);

let chai={
    name:"bmc chai",
    rate:250,
    at_available:true,
    order:function(){
console.log("order");
    } 
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
   
    writable: false,
    // enumerable: false,
    enumerable: true,
    configurable: false

})


console.log(Object.getOwnPropertyDescriptor(chai,"name"));



for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== "function"){
    console.log(`${key}:${value}`)
    }
}