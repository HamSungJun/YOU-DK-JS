const array = []
array[0] = 1
array[1] = '2'
array[2] = [3]

console.log(array, array.length) // [ 1, '2', [ 3 ] ], length : 3
delete array[1]
console.log(array, array.length) // [ 1, <1 empty item>, [ 3 ] ], length : 3

const array2 = []
array2[0] = 1
array2[2] = 3
console.log(array2) // [ 1, <1 empty item>, 3 ]
array2[1] = undefined
console.log(array2) // [ 1, undefined, 3 ]
array2[1] = null
console.log(array2) // [ 1, null, 3 ]
delete array2[1]
console.log(array2) // [ 1, <1 empty item>, 3 ]

const array3 = []
array3[0] = 1
array3.a = 'A'
console.log(array3, array3.length) // [ 1, a: 'A' ] 1
array3['13'] = '13'
console.log(array3, array3.length) // [ 1, <12 empty items>, '13', a: 'A' ] 14

const str1 = 'foo'
const arr1 = ['f', 'o', 'o']

console.log(str1[1], arr1[1]) // o , o
str1[1] = 'A'
arr1[1] = 'A'
console.log(str1, arr1) // foo [ 'f', 'A', 'o' ]

const str1Upper = str1.toUpperCase()
console.log(str1Upper === str1) // false

const pushed = arr1
pushed.push('!')
console.log(pushed === arr1) // true

const THOUSAND = 1E3
console.log(THOUSAND) // 1000

console.log(0.1 + 0.2 === 0.3) // false

console.log(Math.abs((0.1 + 0.2) - 0.3) <= Number.EPSILON) // true

console.log(Number.isInteger(42)) // true
console.log(Number.isInteger(42.00)) // true
console.log(Number.isInteger(42.13)) // false

if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num === 'number' && num % 1 === 0
  }
}

console.log(NaN === NaN) // false
console.log(1 / 0) // Infinity
console.log(Infinity / Infinity) // Infinity
console.log(Object.is(+0, -0)) // false
console.log(Object.is(NaN, NaN)) // true

const arr = [1, 2, 3]
const c = arr
let d = arr
console.log(c, d) // [ 1, 2, 3 ] [ 1, 2, 3 ]
d = null
console.log(c, d) // [ 1, 2, 3 ] null

const myArr = [1, 2, 3]
myArr.length = 0
console.log(myArr)
