// const arr1 = new Array(6);
// arr1[0] = "Rick"
// arr1[1] = "Morty"
// arr1[2] = "robot chicken"
// arr1[3] = "Sealab"
// arr1[4] = 2021
// arr1[4] = 2022
// arr1.push("ATHF")
// console.log(arr1);
// for(let i = 0; i <= arr1.length; i++){
//     console.log(i);
//     console.log(arr1[i]);
// };

// const arr2= []

// arr2[0] = "Rick"
// arr2[1] = "Morty"
// arr2[2] = "robot chicken"
// arr2[3] = "Sealab"
// arr2[4] = 2021
// console.log(arr2);

//global vars
const arr3 = [23, 45, 32, 65, 78];
let sum = 0;

//one way
function addUpTo(sum) {
  for (let i = 0; i < arr3.length; i++) {
    //sum = sum + arr3[i]
    sum += arr3[i];
    console.log(sum);
  }
  return sum
}
addUpTo(sum);

//second way
arr3.forEach((sum, i, arr3) => {
  sum += arr3[i];
  console.log(sum);
});

const myArr = [1,2,3,4,5];

// 3rd way
function add(a) {
  sum += a;
  console.log(sum);
}

myArr.forEach(add);
