const a = 42
const b = '' + 42 // implicit casting
const c = String(42) // explicit casting

console.log(JSON.stringify(undefined)) // undefined
console.log(JSON.stringify(Symbol('lalala'))) // undefined
