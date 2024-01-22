// var a = 10

// let b = 40

// let c = 200

// {
//     console.log(a);
// }


// function fn(){
//     // let a = 20;
//     var b = 30;
//     var c = 100
//     if (true) {
//         var a = 10
//         let b = 40
//         let c = 200
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// }

// fn()



const nums = [1,2,3,4]

const multiplyby3 = nums.map((num,index,arr)=>{
    // return  num*3 + index  [ 3, 7, 11, 15 ]  1*3+0=3 2*3+1=7
    return  num*3
})


const greaterThan2 = nums.filter((num)=>{
    return num > 2
})

// console.log(nums);
// console.log(multiplyby3);
// console.log(greaterThan2);


const arr = [2,3,4,5,6];
console.log(arr);

const myResult = arr.map((ar)=>ar+3)

const myResult1 = arr.forEach((ar,i)=>{
    arr[i] = ar+2
})

console.log(myResult1);

console.log(myResult , arr);


// forEach example
const numbers = [1, 2, 3, 4, 5];

console.log("Original array:", numbers);

// Using forEach to double each element in the array
numbers.forEach(function (number, index, array) {
  array[index] = number * 2;
});

console.log("Array after using forEach:", numbers);

// map example
const numbers1 = [1, 2, 3, 4, 5];

console.log("Original array:", numbers1);

// Using map to create a new array with each element doubled
const doubledNumbers = numbers1.map(function (number) {
  return number * 2;
});

console.log("New array created with map:", doubledNumbers);


// Using filter to get only even numbers
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

// Using reduce to calculate the sum of squared even numbers
const sumOfSquaredEvenNumbers = evenNumbers.reduce(function (accumulator, number) {
  return accumulator + (number * number);
}, 0);

console.log("Sum of squared even numbers:", sumOfSquaredEvenNumbers);

