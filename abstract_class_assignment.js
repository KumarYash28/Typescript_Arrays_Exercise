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
//Basic exercise
//1
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle("red", 5);
console.log("Circle Area: ".concat(circle.calculateArea()));
console.log("Circle Color: ".concat(circle.getColor()));
var rectangle = new Rectangle("blue", 10, 20);
console.log("Rectangle Area: ".concat(rectangle.calculateArea()));
console.log("Rectangle Color: ".concat(rectangle.getColor()));
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("The car is moving at ".concat(this.speed, " km/h."));
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(speed) {
        this.speed = speed;
    }
    Bicycle.prototype.move = function () {
        console.log("The bicycle is moving at ".concat(this.speed, " km/h."));
    };
    return Bicycle;
}());
var car = new Car(100);
car.move();
var bicycle = new Bicycle(15);
bicycle.move();
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    return Bird;
}());
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle(name) {
        return _super.call(this, name) || this;
    }
    Eagle.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    Eagle.prototype.fly = function () {
        console.log("".concat(this.name, " is flying high."));
    };
    return Eagle;
}(Bird));
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow(name) {
        return _super.call(this, name) || this;
    }
    Sparrow.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    Sparrow.prototype.fly = function () {
        console.log("".concat(this.name, " is flying low."));
    };
    return Sparrow;
}(Bird));
var eagle = new Eagle("Eagle");
eagle.eat();
eagle.fly();
var sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();
var Developer = /** @class */ (function () {
    function Developer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Developer.prototype.speak = function () {
        console.log("Hi, my name is ".concat(this.name));
    };
    Developer.prototype.work = function () {
        console.log("".concat(this.name, " is developing software."));
    };
    return Developer;
}());
var developer = new Developer("Alice", 50000);
developer.speak();
developer.work();
//Advanced exercise
//1
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, balance) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.withdrawalLimit = 500;
        return _this;
    }
    SavingsAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount >= 0 && amount <= this.withdrawalLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    return SavingsAccount;
}(BankAccount));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, balance) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.overdraftLimit = 1000;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    return CheckingAccount;
}(BankAccount));
var savings = new SavingsAccount(12345, 1000);
savings.deposit(200);
console.log(savings.getBalance());
console.log(savings.withdraw(600));
var checking = new CheckingAccount(67890, 200);
checking.deposit(300);
console.log(checking.getBalance());
console.log(checking.withdraw(1200));
var CreditCard = /** @class */ (function () {
    function CreditCard(balance) {
        this.balance = balance;
    }
    CreditCard.prototype.pay = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Paid ".concat(amount, " using Credit Card."));
        }
        else {
            console.log("Insufficient balance.");
        }
    };
    CreditCard.prototype.refund = function (amount) {
        this.balance += amount;
        console.log("Refunded ".concat(amount, " to Credit Card."));
    };
    return CreditCard;
}());
var DebitCard = /** @class */ (function () {
    function DebitCard(balance) {
        this.balance = balance;
    }
    DebitCard.prototype.pay = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Paid ".concat(amount, " using Debit Card."));
        }
        else {
            console.log("Insufficient balance.");
        }
    };
    DebitCard.prototype.refund = function (amount) {
        this.balance += amount;
        console.log("Refunded ".concat(amount, " to Debit Card."));
    };
    return DebitCard;
}());
var UPI = /** @class */ (function () {
    function UPI(balance) {
        this.balance = balance;
    }
    UPI.prototype.pay = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Paid ".concat(amount, " using UPI."));
        }
        else {
            console.log("Insufficient balance.");
        }
    };
    UPI.prototype.refund = function (amount) {
        this.balance += amount;
        console.log("Refunded ".concat(amount, " to UPI."));
    };
    return UPI;
}());
var creditCard = new CreditCard(1000);
creditCard.pay(200);
creditCard.refund(50);
var debitCard = new DebitCard(500);
debitCard.pay(100);
debitCard.refund(30);
var upi = new UPI(200);
upi.pay(150);
upi.refund(20);
var PaymentGateway = /** @class */ (function () {
    function PaymentGateway() {
    }
    return PaymentGateway;
}());
var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.processPayment = function (amount) {
        console.log("Processing payment of ".concat(amount, " through PayPal."));
    };
    PayPal.prototype.processRefund = function (amount) {
        console.log("Processing refund of ".concat(amount, " through PayPal."));
    };
    PayPal.prototype.validateTransaction = function (transactionId) {
        console.log("Validating transaction with ID: ".concat(transactionId));
        return true;
    };
    PayPal.prototype.authenticateUser = function (userId) {
        console.log("Authenticating user with ID: ".concat(userId));
        return true;
    };
    return PayPal;
}(PaymentGateway));
var paypal = new PayPal();
paypal.processPayment(100);
paypal.processRefund(50);
paypal.validateTransaction("123ABC");
paypal.authenticateUser("user123");
var Customer = /** @class */ (function () {
    function Customer() {
        this.loanDetails = '';
        this.insuranceDetails = '';
    }
    Customer.prototype.applyForLoan = function (amount) {
        this.loanDetails = "Loan applied for ".concat(amount);
        console.log(this.loanDetails);
    };
    Customer.prototype.applyForInsurance = function (policy) {
        this.insuranceDetails = "Insurance policy: ".concat(policy);
        console.log(this.insuranceDetails);
    };
    return Customer;
}());
var customer = new Customer();
customer.applyForLoan(10000);
customer.applyForInsurance("Health Insurance");
