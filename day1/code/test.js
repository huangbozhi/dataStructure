// 1.在一个数组中，有奇数个a,其他数都为偶数个，求a
// 2.在一个数组中，有奇数个a，b,其他数都为偶数个，求a,b
function res1 (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum ^= arr[i]
  }
  return sum
}
function res2 (arr) {
  let c = 0
  for (let i = 0; i < arr.length; i++) {
    c ^= arr[i]
  }
  // c = a^b
  // let c1 = (~c) + 1
  // let c2 = c & c1
  let m = c & (~c + 1) // 最右侧1
  let b = 0
  for (let i = 0; i< arr.length -1; i++) {
    if ((arr[i] & m ) == 0) {
      b ^= arr[i]
    }
  }
  return [b, c^b]
}
console.log(res1([2,1,2,1,2,1,1,6,1,6,1,3,3])) // 2
console.log(res2([2,1,2,1,2,2,1,1,6,1,6,1,3,3,6,11,11,11]) ); // [6 11]