// EXERCISE 1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of numbers
var numberarray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numberarray);
//Array of strings
var stringarray = ["1", "2", "3", "4", "5", "6", "7", "8"];
console.log(stringarray);
//Array of booleans
var booleanarray = [true, false];
console.log(booleanarray);
//Mixed Array containing number and string
var mixedarray = ["1", "2", "3", "4", 34, 5, 6, 67, "5", "6", "7", "8"];
console.log(mixedarray);
// EXERCISE 2
var fruits = ["apple", "banana", "mango"];
//Add "grapes" at the end.
fruits.push("grapes");
console.log(fruits);
//Remove the first element.
fruits.shift();
console.log(fruits);
//Insert "pineapple" at index 2.
fruits.splice(2, 0, "pineapple");
console.log(fruits);
//Reverse the array.
fruits.reverse();
console.log(fruits);
// Exercise 3: Map, Filter, and Reduce
var numbers = [10, 20, 30, 40, 50, 60];
//Create a new array that doubles each number.
var doublearray = numbers.map(function (i) { return i * 2; });
console.log(doublearray);
//Filter out numbers greater than 50.
var filterarray = numbers.filter(function (i) { return i > 50; });
console.log("Element greater than 50", filterarray);
//Find the sum of all numbers.
var sum = 0;
for (var i in numbers) {
    sum = sum + numbers[i];
}
console.log("Total sum is :", sum);
// EXERCISE 4 Exercise 4: Find and FindIndex
var values = [10, 20, 30, 40, 50];
//Find the first number greater than 25.
var ans = 0;
for (var i in values) {
    if (values[i] > 25) {
        ans = values[i];
        break;
    }
}
console.log("Value greater than 25 is ", ans);
//Get the index of the number 40.
var ind = 0;
for (var i in values) {
    if (values[i] == 40) {
        ind = Number(i);
        break;
    }
}
console.log("Index of number 40 is ", ind);
// Exercise 5: Sorting an Array
var scores = [55, 23, 87, 12, 99, 38];
scores.sort();
console.log("Ascending order sorting", scores);
var desc_sort = __spreadArray([], scores, true).sort(function (a, b) { return b - a; });
console.log("Descending order sorting", desc_sort);
// Exercise 6: Tuple Types
var student = ["John", 21, true];
//update the age of the student.
student[1] = 30;
console.log("Updated age is:", student[1]);
console.log(student);
// Exercise 7: Working with includes() and some()
var roles = ["User", "Editor", "Admin", "Moderator"];
//If "Admin" exists in the array.
var hasAdmin = roles.includes("Admin");
console.log("Contains Admin:", hasAdmin);
//If at least one role starts with "Super".
var hasSuper = roles.some(function (i) { return i.startsWith("Super"); });
console.log("Has Super role:", hasSuper);
// Exercise 8: Flattening an Array
// let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];
// Exercise 9: Merging and Removing Duplicates
var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];
//merging both array
for (var i in arr2) {
    arr1.push(arr2[i]);
}
arr1.sort();
console.log("Merged and sorted array is", arr1);
// removing duplicates
var newarray = [];
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr1[i + 1]) {
        newarray.push(arr1[i]);
    }
}
console.log("Array without duplicates:", newarray);
var employees = [
    { name: "Yash", age: 22, position: "Developer" },
    { name: "Gowthan", age: 30, position: "Manager" },
    { name: "Mark", age: 45, position: "HR" },
    { name: "Naman", age: 21, position: "Intern" }
];
// Filter employees older than 30
var filteredEmployees = employees.filter(function (employee) { return employee.age > 30; });
console.log(filteredEmployees);
