//1
type Product = 
{
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
};
  
function getDiscountedPrice(product: Product, discount: number): number 
{
    if (product.isAvailable) 
    {
        return product.price - (product.price * (discount / 100));
    }
    return product.price;
}
  
const product: Product = 
{
    id: 1,
    name: 'Laptop',
    price: 1000,
    isAvailable: true
};
  
const discount = 10;
const discountedPrice = getDiscountedPrice(product, discount);
console.log(`Discounted Price: $${discountedPrice}`);





//2
function formatInput(key:string|number|string[]):string 
{
    if (typeof(key)==='string')return key.toUpperCase();
    else if (typeof key === 'number')return `$${key}`; 
    else if (Array.isArray(key))return key.join(', ');
    return '';
}
console.log(formatInput('hello'));
console.log(formatInput(12345));        
console.log(formatInput(['apple','banana','mango']));





//3
enum Driver 
{
    Available='Available',
    OnTrip='OnTrip',
    Offline='Offline'
}
type DriverInfo = [number, string, Driver];
const driver: DriverInfo = [1, 'Kumar Yash', Driver.OnTrip];
console.log(driver);



//4
type Role='Admin'|'Customer';
interface User 
{
  id: number;
  name: string;
  role: Role;
}
function getUserDetails<T extends User>(user: T):string 
{
  return `User ${user.name} is a ${user.role}`;
}

const admin: User = 
{
  id: 1,
  name: 'Alice',
  role: 'Admin'
};

const customer: User = 
{
  id: 2,
  name: 'Bob',
  role: 'Customer'
};

console.log(getUserDetails(admin));     
console.log(getUserDetails(customer));  



//5
abstract class BankAccount 
{
    accountNumber:number;
    balance:number;
    constructor(accountNumber:number,balance:number) 
    {
      this.accountNumber=accountNumber;
      this.balance=balance;
    }
    abstract withdraw(amount: number):void;
  }
  class SavingsAccount extends BankAccount 
  {
    constructor(accountNumber:number, balance:number) 
    {
      super(accountNumber,balance);
    }
    withdraw(amount: number):void 
    {
        if (amount <= this.balance) 
        {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
        }else
        {
            console.log(`Insufficient funds for withdrawal of $${amount}. Current balance: $${this.balance}`);
        }
    }
  }
  class CurrentAccount extends BankAccount 
  {
    constructor(accountNumber:number,balance:number) 
    {
      super(accountNumber,balance);
    }
    withdraw(amount: number): void 
    {
        if (this.balance - amount >= -500) 
        {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
        }else
        {
            console.log(`Insufficient funds for withdrawal of $${amount}. Current balance: $${this.balance}`);
        }
    }
  }
  const savings = new SavingsAccount(101, 1000);
  const current = new CurrentAccount(202, 200);
  savings.withdraw(500);  
  savings.withdraw(600);  
  current.withdraw(600);  
  current.withdraw(200);  
  current.withdraw(100); 

//6
interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
    isActive: boolean;
  }
  type ReadonlyEmployee = Readonly<Employee>;
  type PartialEmployee = Partial<Employee>;
  function updateEmployeeInfo(emp: PartialEmployee): void {
    console.log('Updated Employee Info:', emp);
  }
  const readonlyEmployee: ReadonlyEmployee = {
    id: 1,
    name: 'Kumar Yash',
    position: 'Software Engineer',
    salary: 80000,
    isActive: true
  };
  const partialEmployee: PartialEmployee = {
    name: 'Kumar Yash',
    salary: 85000
  };
  updateEmployeeInfo(partialEmployee);
  

  
  
  