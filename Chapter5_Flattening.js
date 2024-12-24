
let arrayOfArr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18],[19,20]];

let flattened = arrayOfArr.reduce((merged, curr) => merged.concat(curr), []);

console.log(arrayOfArr);

console.log(flattened);
