console.log("hello world")
2
true
false
;("hello world")
null
undefined
// let a = 10
// let b = 20
// let c = a
// a = b
// b = c
// console.log(a, b)

// // 邏輯運算子
// a > b // false
// a < b // true
// a == b // false
// a != b // true
// a < b && a != b // true
// a < b || a == b // true

// 算數運算子
// +
// -
// *
// /
// %
// **
// console.log(2 + 3) // 5
// console.log(2 - 3) // -1
// console.log(2 * 3) // 6
// console.log(2 / 3) // 0.6
// console.log(2 % 3) // 2
// console.log(2 ** 3) // 8

// let a = 10
// if (a > 10) {
//   console.log("a大於10")
// } else if (a < 10) {
//   console.log("a小於10")
// } else {
//   console.log("a不大於10也不小於10")
// }
// // 該年份為400的倍數，或者為4的倍數，且不可以是100的倍數
// let year = 2004
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//   console.log("該年份為閏年")
// } else {
//   console.log("該年份平年")
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// 運用for迴圈加總1~100
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//   // i = i + 1
//   // i += 1
//   // i++
//   // sum += i
//   sum = sum + i
//   // console.log(i)
// }

// console.log(sum)

// 印出1~100同時是4的倍數的值
// for (let i = 1; i <= 100; i++) {
//   if (i % 4 == 0) {
//     console.log(i)
//   }
// }
// for (let i = 4; i <= 100; i += 4) {
//   console.log(i)
// }

// 使用for 跟加法，算出兩數相乘的結果，最後印出來
// let mul1 = 9
// let mul2 = 8
// let result = 0
// for (let i = 1; i <= mul2; i++) {
//   result = result + mul1
// }
// function mul(mul1, mul2) {

// }
// console.log(mul(3, 4))
// console.log(mul(8, 7))
// console.log(result)

// function add() {}
// let add1 = function () {}
// let add2 = () => {}
// function add(a, b) {
//   // return a + b
//   // a + b
// }
// let res = add(1, 2)
// console.log(res)

// sayMyName 參數 name // 印出 my name is {name}
// console.log("hello " + 2 + " world")
// `${表達式}`
// console.log(`hello ${2} world`)
// function sayMyName(name) {
//   console.log(`my name is ${name}`)
// }
// sayMyName("小明")
// sayMyName("小美")
// sayMyName("小張")

// 寫一個方法，有兩（三）個參數，會回傳最大的值
// function big(a, b, c) {
//   if (a > b && a > c) {
//     return a
//   } else if (b > a && b > c) {
//     return b
//   } else {
//     return c
//   }
// }
// console.log(big(4, 9, 7))

// 寫一個方法，三個參數代表三個邊長，請判斷三個邊長是否可以成為三角形，回傳判斷結果
// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isTriangle(1, 2, 3))
// console.log(isTriangle(1, 2, 4))
// console.log(isTriangle(2, 2, 3))

// // 寫一個方法，把剛剛相加成法放進去，乘數與被乘數改用參數取代
// function mul(mul1, mul2) {
//   let result = 0
//   for (let i = 1; i <= mul2; i++) {
//     result = result + mul1
//   }
//   return result
// }
// console.log(mul(3, 4)) // 12
// // 寫一個判斷成績的方法，95以上回傳A+，90以上回傳A，80以上回傳B，70以上回傳C，60以上回傳D，60以下回傳E
// function scoreFn(score) {
//   if (score >= 95) {
//     return "A+"
//   } else if (score >= 90) {
//     return "A"
//   } else if (score >= 80) {
//     return "B"
//   } else if (score >= 70) {
//     return "C"
//   } else if (score >= 60) {
//     return "D"
//   } else {
//     return "E"
//   }
// }
// // 寫一個方法可以印出99乘法表，兩個參數，例如：給9, 9 就會印出 1 * 1 = 1  1 * 2 = 2.....9 * 9 = 81
// let result = ""
// for (let x = 1; x <= 9; x++) {
//   for (let y = 1; y <= 9; y++) {
//     // console.log(`${x} * ${y} = ${x * y}`)
//     result += `${x}*${y}=${x * y} `
//   }
//   result += "\n"
// }
// // ;("\n")
// // console.log("1*1=1 1*2=2\n2*1=2 2*2=4")
// console.log(result)

// 使用跳脫字元，最後一次輸出

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   sayMyName() {
//     console.log(`my name is ${this.name}`)
//   }
// }
// class Engereer extends Person {
//   sayMyName() {
//     console.log(`yo~ my name is ${this.name}`)
//   }
//   coding() {
//     console.log("coding...")
//   }
// }

// let jac = new Engereer("jac", 20)
// jac.sayMyName()
// jac.coding()

// let yy = new Person("yy", 20)
// yy.sayMyName()
// yy.coding() // error

let str = "hello world xxgjhgjhjhx"
// console.log(str.length)
// console.log(str.substring(0, 5))
// console.log(str.toUpperCase())
console.log(str.split("o"))
// // str 首字大寫
// console.log(str.substring(0, 1).toUpperCase() + str.substring(1, str.length))

// array 陣列
let arr = [1, 3, 5]
// object 物件
let jac = {
  name: "jac",
  age: 20,
  sayMyName() {
    console.log(`my name is ${this.name}`)
  },
}
console.log(arr)
console.log(jac.name)
jac.sayMyName()

// css 單位
