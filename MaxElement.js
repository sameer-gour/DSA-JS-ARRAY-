let array = [1,2,4,6,70,90,5,3,2];
let max = 0;
// for (let index = 0; index < array.length; index++) {
//     if (max < array[index]) {
//         max = array[index]
//     }
// }
// console.log(max);


array.forEach(element => {
    if (element > max) {
        max = element
    }
});
console.log(max);
