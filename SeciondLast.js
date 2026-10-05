let array = [2,4,6,70,90,5,3,2];

let largest = -Infinity;
let secLargest = -Infinity;

for (const e of array) {
    if(e > largest){
        secLargest = largest
        largest=e
     }
    else if (e > secLargest && e !== Largest) {
        secLargest = e
    }
}



console.log(secLargest);
