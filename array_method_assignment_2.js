//1. concat() Exercises
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newarray=arr1.concat(arr2);
// console.log(newarray);
//2
var names1 = ["Alice", "Bob"];
var names2 = ["Charlie", "David"];
var names3 = ["Eve", "Frank"];
var result = names1.concat(names2, names3);
console.log(result);
//3
var brr1 = [true, false];
var brr2 = ["Yes", "No"];
var arr3 = brr1.concat(brr2, [1, 2, 3]); // error with concatenating with different datatypes
console.log(arr3);
//4
var value = [10, 20, 30, 40, 50];
value.copyWithin(0, 1, 3);
console.log(value);
//5
var fruit = ["apple", "banana", "cherry", "date", "elderberry"];
fruit.copyWithin(1, 3, 5);
console.log(fruit);
//6
var arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2, 3);
console.log(arr);
//7
var num = [2, 4, 6, 8, 10];
var res = num.every(function (i) { return i % 2 == 0; });
console.log(res);
//8
var words = ["apple", "banana", "avocado"];
var re = words.every(function (word) { return word.startsWith("a"); });
console.log(re);
