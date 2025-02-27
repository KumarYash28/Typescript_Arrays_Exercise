//1
let userName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;


//2
function add(a: number, b: number): number 
{
    return a + b;
}


//3
function greet(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
}


//4
function displayId(id: number | string): void {
    console.log(`ID: ${id}`);
}




//5
let numbers: number[] = [10, 20, 30]; 
let person: [string, number] = ["Alice", 30]; 



//6
interface Person 
{
    name: string;
    age: number;
    email: string;
}

const user: Person = 
{
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};


//7
type Employee = {
    id: number;
    name: string;
    role: "admin" | "manager" | "employee";
};

let employee: Employee = {
    id: 1,
    name: "Alice",
    role: "admin"
};

//8
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

let favoriteColor: Color = Color.Red;


//9
interface User {
    id: number;
    name: string;
    email: string;
}

// const user: Readonly<User> = { id: 1, name: "Alice", email: "alice@example.com" };
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

let newUser: Partial<User> = { name: "Bob" }; 



//10
class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarInfo(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getCarInfo()); // Output: Toyota Corolla (2020)



// strongly typed variables

//1
type Products = {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
};

function getDiscountedPrice(products: Products, discount: number): number {
    return products.price - (products.price * discount / 100);
}


//2
function formatInput(input: string | number | string[]): string {
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input === 'number') {
        return `$${input}`;
    } else {
        return input.join(', ');
    }
}




//3
enum DriverStatus {
    Available = "Available",
    OnTrip = "OnTrip",
    Offline = "Offline"
}

type DriverInfo = [number, string, DriverStatus];

let driver: DriverInfo = [1, "John Doe", DriverStatus.OnTrip];





//4
interface User {
    id: number;
    name: string;
    role: "Admin" | "Customer";
}

function getUserDetails<T extends User>(user: T): string {
    return `User ${user.name} is a ${user.role}`;
}





//5
abstract class BankAccount {
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    abstract withdraw(amount: number): void;
}

class SavingsAccount extends BankAccount {
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

class CurrentAccount extends BankAccount {
    withdraw(amount: number): void {
        if (this.balance + 500 >= amount) {
            this.balance -= amount;
        } else {
            console.log("Overdraft limit exceeded");
        }
    }
}

const savings = new SavingsAccount(12345, 1000);
const current = new CurrentAccount(67890, 200);

savings.withdraw(200); // Successful withdrawal
current.withdraw(700); // Allowed, overdraft



//6
interface Employees {
    id: number;
    name: string;
    position: string;
    salary: number;
}

type ReadonlyEmployee = Readonly<Employees>;
type PartialEmployee = Partial<Employees>;

function updateEmployeeInfo(emp: PartialEmployee): void {
    console.log(emp);
}




//7
type Message = TextMessage | ImageMessage;

interface TextMessage {
    type: "text";
    content: string;
}

interface ImageMessage {
    type: "image";
    imageUrl: string;
}

function isTextMessage(msg: Message): msg is TextMessage {
    return msg.type === "text";
}

function handleMessage(msg: Message): void {
    if (isTextMessage(msg)) {
        console.log(`Text: ${msg.content}`);
    } else {
        console.log(`Image: ${msg.imageUrl}`);
    }
}



//8
function LogClass(target: Function) {
    console.log(`Class ${target.name} is instantiated`);
}

@LogClass
class OrderService {
    constructor() {
        console.log("OrderService instance created");
    }
}

new OrderService(); // Logs the class instantiation





//9
async function getWeather(city: string): Promise<number> {
    // Simulate fetching data from API
    return new Promise((resolve) => {
        setTimeout(() => {
            const temperature = Math.floor(Math.random() * 30) + 10; // Simulated temperature
            resolve(temperature);
        }, 2000);
    });
}

async function fetchWeather() {
    try {
        const newYorkWeather = await getWeather("New York");
        const londonWeather = await getWeather("London");

        console.log(`New York: ${newYorkWeather}°C`);
        console.log(`London: ${londonWeather}°C`);
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

fetchWeather();




//10
interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
}

async function findProductById(id: string): Promise<Product | null> {
    // Simulating a database fetch
    const products: Product[] = [
        { _id: "1", name: "Product A", price: 100, stock: 50, category: "Electronics" },
        { _id: "2", name: "Product B", price: 200, stock: 30, category: "Clothing" },
    ];

    return products.find(product => product._id === id) || null;
}

async function getProduct() {
    const product = await findProductById("1");
    if (product) {
        console.log(product);
    } else {
        console.log("Product not found");
    }
}

getProduct();


