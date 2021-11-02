// 冒泡排序
function maopao (arr) {
  if (!arr.length) return []
  if (arr.length === 1) return arr
  const len = arr.length
  for (let i = 0; i< len - 1; i++) {
    for (let j = i; j < len - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

console.log(maopao([1, 3, 5, 2, 4, 6])); // 1,2,3,4,5,6
console.log(maopao([1, 3, 5, 2, 4, 7,6])); // 1,2,3,4,5,6