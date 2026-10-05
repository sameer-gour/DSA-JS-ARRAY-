let array = [2,1,1,1,1,1,1,1,1];

let largest = -Infinity;
let secLargest = -Infinity;

for (const e of array) {
    if(e > largest){
        secLargest = largest
        largest=e
     }
    else if (e > secLargest && e !== largest) {
        secLargest = e
    }
}



console.log(secLargest);
