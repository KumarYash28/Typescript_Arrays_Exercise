//1. concat() Exercises
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newarray=arr1.concat(arr2);
console.log(newarray);

//2
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
let result=names1.concat(names2,names3);
console.log(result);

//3
// let brr1 = [true, false];
// let brr2 = ["Yes", "No"];
// let arr3 = brr1.concat(brr2, [1, 2, 3]);// error with concatenating with different datatypes
// console.log(arr3);


//4
let value:number[] = [10, 20, 30, 40, 50];
value.copyWithin(0,1,3);
console.log(value)


//5
let fruit = ["apple", "banana", "cherry", "date", "elderberry"];
fruit.copyWithin(1, 3, 5);
console.log(fruit);

//6
let arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0,2,3);
console.log(arr);

//7
let num = [2, 4, 6, 8, 10];
let res:boolean=num.every(i=>i%2==0);
console.log(res);

//8
let words = ["apple", "banana", "avocado"];
let re= words.every(word => word.startsWith("a"));
console.log(re);


//9
let array_number:number[]=[1,2,3,4,56,23,31,33];
let anss:boolean=array_number.every(i=>i>0);
console.log(anss);

//10
let arr_val = [1, 2, 3, 4, 5];
arr_val.fill(0,0);
console.log(arr_val);

//11
let arr_string = ["A", "B", "C", "D", "E"];
arr_string.fill("X", 1, 4);
console.log(arr_string);//[A,X,X,X,E]

//12
let status_array = ["pending", "pending", "pending", "pending", "pending"];
status_array.fill("Completed",2);
console.log(status_array);