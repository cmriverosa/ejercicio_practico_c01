const arr = [1, 2, 3, 4];

//every
const todosMenoresA10 = (val) => val<10
console.log('<----------- every menores a 10 ----------->')
console.log(arr.every(todosMenoresA10))

//some 
const algunosMenoresA10 = (val)=>val<10
console.log('<----------- some menores a 10 ----------->')
console.log(arr.some(algunosMenoresA10))

//filter
const filtrarPares = (val => val%2===0)
console.log('<----------- filter pares ----------->')
console.log(arr.filter(filtrarPares))


//map
const valoresDobles = (val =>val*2)
console.log('<----------- map valores dobles ----------->')
console.log(arr.map((valoresDobles)))
