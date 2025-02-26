var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getDiscountedPrice(product, discount) {
    if (product.isAvailable) {
        return product.price - (product.price * (discount / 100));
    }
    return product.price;
}
var product = {
    id: 1,
    name: 'Laptop',
    price: 1000,
    isAvailable: true
};
var discount = 10;
var discountedPrice = getDiscountedPrice(product, discount);
console.log("Discounted Price: $".concat(discountedPrice));
//2
function formatInput(key) {
    if (typeof (key) === 'string')
        return key.toUpperCase();
    else if (typeof key === 'number')
        return "$".concat(key);
    else if (Array.isArray(key))
        return key.join(', ');
    return '';
}
console.log(formatInput('hello'));
console.log(formatInput(12345));
console.log(formatInput(['apple', 'banana', 'mango']));
//3
var Driver;
(function (Driver) {
    Driver["Available"] = "Available";
    Driver["OnTrip"] = "OnTrip";
    Driver["Offline"] = "Offline";
})(Driver || (Driver = {}));
var driver = [1, 'Kumar Yash', Driver.OnTrip];
console.log(driver);
function getUserDetails(user) {
    return "User ".concat(user.name, " is a ").concat(user.role);
}
var admin = {
    id: 1,
    name: 'Alice',
    role: 'Admin'
};
var customer = {
    id: 2,
    name: 'Bob',
    role: 'Customer'
};
console.log(getUserDetails(admin));
console.log(getUserDetails(customer));
//5
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, balance) {
        return _super.call(this, accountNumber, balance) || this;
    }
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawal of $".concat(amount, " successful. New balance: $").concat(this.balance));
        }
        else {
            console.log("Insufficient funds for withdrawal of $".concat(amount, ". Current balance: $").concat(this.balance));
        }
    };
    return SavingsAccount;
}(BankAccount));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accountNumber, balance) {
        return _super.call(this, accountNumber, balance) || this;
    }
    CurrentAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount >= -500) {
            this.balance -= amount;
            console.log("Withdrawal of $".concat(amount, " successful. New balance: $").concat(this.balance));
        }
        else {
            console.log("Insufficient funds for withdrawal of $".concat(amount, ". Current balance: $").concat(this.balance));
        }
    };
    return CurrentAccount;
}(BankAccount));
var savings = new SavingsAccount(101, 1000);
var current = new CurrentAccount(202, 200);
savings.withdraw(500);
savings.withdraw(600);
current.withdraw(600);
current.withdraw(200);
current.withdraw(100);
function updateEmployeeInfo(emp) {
    console.log('Updated Employee Info:', emp);
}
var readonlyEmployee = {
    id: 1,
    name: 'Kumar Yash',
    position: 'Software Engineer',
    salary: 80000,
    isActive: true
};
var partialEmployee = {
    name: 'Kumar Yash',
    salary: 85000
};
updateEmployeeInfo(partialEmployee);
