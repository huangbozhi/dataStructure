// 选择排序
function choose (arr) {
  if (!arr.length) return []
  if (arr.length === 1) return arr
  const len = arr.length
  for (let i = 0; i< len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

console.log(choose([1, 3, 5, 2, 4, 6])); // 1,2,3,4,5,6
console.log(choose([1, 3, 5, 2, 4, 7,6])); // 1,2,3,4,5,6