/**
 * JavaScript 7 Types.
 * 1. Null
 * 2. Undefined
 * 3. Boolean
 * 4. Number
 * 5. String
 * 6. Object
 * 7. Symbol
 */

console.log(typeof undefined === 'undefined') // true
console.log(typeof true === 'boolean') // true
console.log(typeof 42 === 'number') // true
console.log(typeof '42' === 'string') // true
console.log(typeof {} === 'object') // true
console.log(typeof 10n === 'bigint') // true
console.log(typeof Symbol('') === 'symbol') // true
console.log(typeof function () {} === 'function') // true , Callable Object
console.log(typeof [1, 2, 3] === 'object') // true

console.log(typeof null === 'object') // true

function foo (a, b) {}
console.log(foo.length) // 2

let a
console.log(typeof a) // undefined
console.log(typeof b) // undefined
