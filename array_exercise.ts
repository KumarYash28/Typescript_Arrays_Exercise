// EXERCISE 1

// Array of numbers
let numberarray:number[]=[1,2,3,4,5,6,7,8];
console.log(numberarray);

//Array of strings
let stringarray:string[]=["1","2","3","4","5","6","7","8"];
console.log(stringarray);

//Array of booleans
let booleanarray:boolean[]=[true,false];
console.log(booleanarray);

//Mixed Array containing number and string
let mixedarray:(string|number)[]=["1","2","3","4",34,5,6,67,"5","6","7","8"];
console.log(mixedarray);


// EXERCISE 2
let fruits: string[] = ["apple", "banana", "mango"];

//Add "grapes" at the end.
fruits.push("grapes");
console.log(fruits);

//Remove the first element.
fruits.shift();
console.log(fruits);

//Insert "pineapple" at index 2.
fruits.splice(2,0,"pineapple");
console.log(fruits);

//Reverse the array.
fruits.reverse();
console.log(fruits);


// Exercise 3: Map, Filter, and Reduce
let numbers: number[] = [10, 20, 30, 40, 50, 60];

//Create a new array that doubles each number.
let doublearray=numbers.map(i=>i*2);
console.log(doublearray);

//Filter out numbers greater than 50.
let filterarray=numbers.filter(i=>i>50);
console.log("Element greater than 50",filterarray);

//Find the sum of all numbers.
let sum=0;
for(let i in numbers)
{
    sum=sum+numbers[i];
}
console.log("Total sum is :",sum);




// EXERCISE 4 Exercise 4: Find and FindIndex
let values: number[] = [10, 20, 30, 40, 50];

//Find the first number greater than 25.
let ans=0;
for(let i in values)
{
    if(values[i]>25)
    {
        ans=values[i];
        break;
    }
}
console.log("Value greater than 25 is ",ans);

//Get the index of the number 40.
let ind=0;
for(let i in values)
{
    if(values[i]==40)
    {
        ind=Number(i);
        break;
    }
}
console.log("Index of number 40 is ",ind);




// Exercise 5: Sorting an Array
let scores: number[] = [55, 23, 87, 12, 99, 38];
scores.sort();
console.log("Ascending order sorting",scores);
let desc_sort = [...scores].sort((a,b)=>b-a);
console.log("Descending order sorting",desc_sort);


// Exercise 6: Tuple Types
let student: [string, number, boolean] = ["John", 21, true];

//update the age of the student.
student[1]=30;
console.log("Updated age is:",student[1]);
console.log(student);


// Exercise 7: Working with includes() and some()
let roles: string[] = ["User", "Editor", "Admin", "Moderator"];

//If "Admin" exists in the array.
let hasAdmin = roles.includes("Admin");
console.log("Contains Admin:", hasAdmin);

//If at least one role starts with "Super".
let hasSuper = roles.some(i=>i.startsWith("Super"));
console.log("Has Super role:", hasSuper);


// Exercise 8: Flattening an Array
// let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];



// Exercise 9: Merging and Removing Duplicates
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
//merging both array
for(let i in arr2)
{
    arr1.push(arr2[i]);
}
arr1.sort();
console.log("Merged and sorted array is",arr1);
// removing duplicates
let newarray:number[]=[];
for(let i=0;i<arr1.length;i++)
{
    if (arr1[i]!==arr1[i+1]) 
    {
        newarray.push(arr1[i]);
    }
}
console.log("Array without duplicates:",newarray);


// Exercise 10: Interface with Arrays
// Define the Employee interface
interface Employee 
{
    name: string;
    age: number;
    position: string;
}
let employees: Employee[]= 
[
    {name: "Yash", age: 22, position: "Developer"},
    {name: "Gowthan", age: 30, position: "Manager"},
    {name: "Mark", age: 45, position: "HR"},
    {name: "Naman", age: 21, position: "Intern"}
];
// Filter employees older than 30
let filteredEmployees=employees.filter(employee=>employee.age>30);
console.log(filteredEmployees);







