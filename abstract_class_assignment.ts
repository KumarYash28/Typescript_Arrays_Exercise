//Basic exercise
//1
abstract class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle("red", 5);
console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Circle Color: ${circle.getColor()}`);

const rectangle = new Rectangle("blue", 10, 20);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
console.log(`Rectangle Color: ${rectangle.getColor()}`);


//2
interface Vehicle {
    speed: number;
    move(): void;
}

class Car implements Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`The car is moving at ${this.speed} km/h.`);
    }
}

class Bicycle implements Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`The bicycle is moving at ${this.speed} km/h.`);
    }
}

const car = new Car(100);
car.move();

const bicycle = new Bicycle(15);
bicycle.move();





//3
interface Flyable {
    fly(): void;
}

abstract class Bird {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract eat(): void;
}

class Eagle extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    fly(): void {
        console.log(`${this.name} is flying high.`);
    }
}

class Sparrow extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    fly(): void {
        console.log(`${this.name} is flying low.`);
    }
}

const eagle = new Eagle("Eagle");
eagle.eat();
eagle.fly();

const sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();





//4
interface Person {
    name: string;
    speak(): void;
}

interface Employee extends Person {
    salary: number;
    work(): void;
}

class Developer implements Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    speak(): void {
        console.log(`Hi, my name is ${this.name}`);
    }

    work(): void {
        console.log(`${this.name} is developing software.`);
    }
}

const developer = new Developer("Alice", 50000);
developer.speak();
developer.work();





//Advanced exercise


//1
abstract class BankAccount {
    protected accountNumber: number;
    protected balance: number;

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    abstract withdraw(amount: number): boolean;

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private withdrawalLimit: number = 500;

    constructor(accountNumber: number, balance: number) {
        super(accountNumber, balance);
    }

    withdraw(amount: number): boolean {
        if (this.balance - amount >= 0 && amount <= this.withdrawalLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class CheckingAccount extends BankAccount {
    private overdraftLimit: number = 1000;

    constructor(accountNumber: number, balance: number) {
        super(accountNumber, balance);
    }

    withdraw(amount: number): boolean {
        if (this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

const savings = new SavingsAccount(12345, 1000);
savings.deposit(200);
console.log(savings.getBalance()); 
console.log(savings.withdraw(600)); 

const checking = new CheckingAccount(67890, 200);
checking.deposit(300);
console.log(checking.getBalance()); 
console.log(checking.withdraw(1200)); 



//2
interface PaymentMethod {
    pay(amount: number): void;
    refund(amount: number): void;
}

class CreditCard implements PaymentMethod {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Credit Card.`);
        } else {
            console.log("Insufficient balance.");
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Credit Card.`);
    }
}

class DebitCard implements PaymentMethod {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Debit Card.`);
        } else {
            console.log("Insufficient balance.");
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Debit Card.`);
    }
}

class UPI implements PaymentMethod {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Paid ${amount} using UPI.`);
        } else {
            console.log("Insufficient balance.");
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to UPI.`);
    }
}

const creditCard = new CreditCard(1000);
creditCard.pay(200);
creditCard.refund(50);

const debitCard = new DebitCard(500);
debitCard.pay(100);
debitCard.refund(30);

const upi = new UPI(200);
upi.pay(150);
upi.refund(20);




//3
interface SecurePayment {
    authenticateUser(userId: string): boolean;
}

abstract class PaymentGateway {
    abstract processPayment(amount: number): void;
    abstract processRefund(amount: number): void;
    abstract validateTransaction(transactionId: string): boolean;
}

class PayPal extends PaymentGateway implements SecurePayment {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount} through PayPal.`);
    }

    processRefund(amount: number): void {
        console.log(`Processing refund of ${amount} through PayPal.`);
    }

    validateTransaction(transactionId: string): boolean {
        console.log(`Validating transaction with ID: ${transactionId}`);
        return true;
    }

    authenticateUser(userId: string): boolean {
        console.log(`Authenticating user with ID: ${userId}`);
        return true;
    }
}

const paypal = new PayPal();
paypal.processPayment(100);
paypal.processRefund(50);
paypal.validateTransaction("123ABC");
paypal.authenticateUser("user123");



//4
interface Loan {
    applyForLoan(amount: number): void;
}

interface Insurance {
    applyForInsurance(policy: string): void;
}

class Customer implements Loan, Insurance {
    loanDetails: string = '';
    insuranceDetails: string = '';

    applyForLoan(amount: number): void {
        this.loanDetails = `Loan applied for ${amount}`;
        console.log(this.loanDetails);
    }

    applyForInsurance(policy: string): void {
        this.insuranceDetails = `Insurance policy: ${policy}`;
        console.log(this.insuranceDetails);
    }
}

const customer = new Customer();
customer.applyForLoan(10000);
customer.applyForInsurance("Health Insurance");



