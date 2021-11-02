// 插入排序
function insert (arr) {
  if (!arr.length) return []
  if (arr.length === 1) return arr
  const len = arr.length
  for (let i = 1; i< len; i++) {
    let cur = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > cur; j--) {
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
  }
  return arr
}

console.log(insert([1, 3, 5, 2, 4, 6])); // 1,2,3,4,5,6
console.log(insert([1, 3, 5, 2, 4, 7,6])); // 1,2,3,4,5,6