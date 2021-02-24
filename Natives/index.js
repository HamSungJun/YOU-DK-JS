const str = new String('abc')
console.log(typeof str) // object
console.log(typeof String('abc')) // string
console.log(Object.prototype.toString.call([1, 2, 3]))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(123))
console.log(Object.prototype.toString.call('123'))
console.log(Object.prototype.toString.call(true))

const bool = new Boolean(false)
console.log(bool, !!bool)
const bool2 = Boolean(false)
console.log(bool2, !!bool2)

const a = new String('abc')
const b = new Number(42)
const c = new Boolean(true)
console.log(a.valueOf(), b.valueOf(), c.valueOf()) // get Primitive Value
/**
 * 자바스크립트는 원시값에 대한 내장 메소드를 사용하는 경우 해당 타입에 맞는 Wrapper Object 로 박싱 -> 내장 함수 실행 -> Wrapper Object를 소멸시킨후 함수 결과값(primitive value)만 남긴다.
 */

const arr = Array(1, 2, 3)
const arr2 = new Array(1, 2, 3)
console.log(arr, arr2)

const arr3 = Array()
arr3.length = 10
console.log(arr3) // [ <10 empty items> ]

const a1 = new Array(3)
const a2 = Array(3)
const a3 = []
a3.length = 3

console.log(a1, a2, a3) // [ <3 empty items> ] [ <3 empty items> ] [ <3 empty items> ]

// const newSymbol = new Symbol('sym') // TypeError: Symbol is not a constructor
const mySymbol = Symbol('sym')
console.log(mySymbol) // Symbol(sym)
console.log(mySymbol.toString()) // Symbol(sym)
console.log(typeof mySymbol) // "symbol"

const myObj = {}
myObj[mySymbol] = 'lalala'
console.log(myObj)

console.log(Array.prototype)
console.log(Object.prototype.toString.call(Array.prototype))

console.log(Function.prototype) // {}
console.log(RegExp.prototype) // {}

/**
 * 원시값을 박싱하는 경우 new 키워드를 사용하지 않는다. new 키워드를 통해 값을 박싱하게 되면 그 결과는 래퍼 객체를 가리키게 된다.
 * const str = new String('123')
 * console.log(typeof str === "object")
 * const FALSE = new Boolean('false')
 * console.log(!!FALSE) // true
 */
