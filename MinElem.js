let array = [2,4,6,70,90,5,3,2];
let min = array[0];


array.forEach(element => {
    if (element < min) {
        min = element
    }
});
console.log(min);
