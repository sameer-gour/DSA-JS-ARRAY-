let arr = [1,2,3,4,5,6,7,8,9];
let sum =0;

// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index]
    
// }

arr.forEach(element => {
    sum += element
});
console.log(sum);
