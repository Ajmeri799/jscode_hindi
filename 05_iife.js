//Immediately Invoked Function Expressions (IIFI)


(function chai(){
    console.log(`DB CONNECTED`)
})();

//; use 2 iife
(()=>{
    console.log(`DB CONNECTED`)
})();

((name)=>{
    console.log(`DB CONNECTED Two ${name}`)
})("ajmeri")