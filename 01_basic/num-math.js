const score=400
console.log(score)
const newscore = new Number(400)
console.log(newscore)

console.log(newscore.toString().length)
console.log(newscore.toString())
console.log(newscore.toFixed(2))

const  balence=123.89
console.log(balence.toPrecision(4))
const  balences=1230000
console.log(balences.toLocaleString())
console.log(balences.toLocaleString('en-IN'))

//-------------------MATH------------------

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))

console.log(Math.min(4,6,5,9))
console.log(Math.max(4,6,5,9))

console.log(Math.floor(3.8))


console.log(Math.random())
console.log(Math.random()*10)

// ----aboid 0 values----
console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)))
console.log(Math.floor(Math.random()*(max-min+1)+min))



