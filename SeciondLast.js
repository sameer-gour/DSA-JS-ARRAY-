let array = [2,4,6,70,90,5,3,2];

let max = Math.max(array[0],array[1]);
let min = Math.min(array[0],array[1]);

for (let index = 2; index < array.length; index++) {
    if (array[i] > max) {
        min = max
        max = arr[i];
    }    
}
console.log(min);
