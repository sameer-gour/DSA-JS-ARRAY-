let arr = [2,3,4,5,67,4,23,5,7,45,3,4];
// arr.sort((a,b)=>a-b)
let temp = new Array(arr.length)
let j=0
for (let i = arr.length-1; i >= 0; i--) {
    temp[j] = arr[i]
    j++
}

console.log(temp);