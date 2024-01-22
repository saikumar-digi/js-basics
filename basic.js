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