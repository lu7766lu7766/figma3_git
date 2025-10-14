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
let sum = 0
for (let i = 1; i <= 100; i++) {
  // i = i + 1
  // i += 1
  // i++
  // sum += i
  sum = sum + i
  // console.log(i)
}
console.log(sum)
