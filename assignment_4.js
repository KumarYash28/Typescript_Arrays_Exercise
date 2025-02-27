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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
//1
var userName = "John Doe";
var age = 25;
var isStudent = true;
//2
function add(a, b) {
    return a + b;
}
//3
function greet(name, message) {
    if (message === void 0) { message = "Hello"; }
    return "".concat(message, ", ").concat(name, "!");
}
//4
function displayId(id) {
    console.log("ID: ".concat(id));
}
//5
var numbers = [10, 20, 30];
var person = ["Alice", 30];
var user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};
var employee = {
    id: 1,
    name: "Alice",
    role: "admin"
};
//8
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Red;
// const user: Readonly<User> = { id: 1, name: "Alice", email: "alice@example.com" };
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
var newUser = { name: "Bob" };
//10
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return "".concat(this.brand, " ").concat(this.model, " (").concat(this.year, ")");
    };
    return Car;
}());
var car = new Car("Toyota", "Corolla", 2020);
console.log(car.getCarInfo()); // Output: Toyota Corolla (2020)
function getDiscountedPrice(products, discount) {
    return products.price - (products.price * discount / 100);
}
//2
function formatInput(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else if (typeof input === 'number') {
        return "$".concat(input);
    }
    else {
        return input.join(', ');
    }
}
//3
var DriverStatus;
(function (DriverStatus) {
    DriverStatus["Available"] = "Available";
    DriverStatus["OnTrip"] = "OnTrip";
    DriverStatus["Offline"] = "Offline";
})(DriverStatus || (DriverStatus = {}));
var driver = [1, "John Doe", DriverStatus.OnTrip];
function getUserDetails(user) {
    return "User ".concat(user.name, " is a ").concat(user.role);
}
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
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    };
    return SavingsAccount;
}(BankAccount));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.withdraw = function (amount) {
        if (this.balance + 500 >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Overdraft limit exceeded");
        }
    };
    return CurrentAccount;
}(BankAccount));
var savings = new SavingsAccount(12345, 1000);
var current = new CurrentAccount(67890, 200);
savings.withdraw(200); // Successful withdrawal
current.withdraw(700); // Allowed, overdraft
function updateEmployeeInfo(emp) {
    console.log(emp);
}
function isTextMessage(msg) {
    return msg.type === "text";
}
function handleMessage(msg) {
    if (isTextMessage(msg)) {
        console.log("Text: ".concat(msg.content));
    }
    else {
        console.log("Image: ".concat(msg.imageUrl));
    }
}
//8
function LogClass(target) {
    console.log("Class ".concat(target.name, " is instantiated"));
}
var OrderService = function () {
    var _classDecorators = [LogClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var OrderService = _classThis = /** @class */ (function () {
        function OrderService_1() {
            console.log("OrderService instance created");
        }
        return OrderService_1;
    }());
    __setFunctionName(_classThis, "OrderService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderService = _classThis;
}();
new OrderService(); // Logs the class instantiation
//9
function getWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Simulate fetching data from API
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        var temperature = Math.floor(Math.random() * 30) + 10; // Simulated temperature
                        resolve(temperature);
                    }, 2000);
                })];
        });
    });
}
function fetchWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var newYorkWeather, londonWeather, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getWeather("New York")];
                case 1:
                    newYorkWeather = _a.sent();
                    return [4 /*yield*/, getWeather("London")];
                case 2:
                    londonWeather = _a.sent();
                    console.log("New York: ".concat(newYorkWeather, "\u00B0C"));
                    console.log("London: ".concat(londonWeather, "\u00B0C"));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching weather:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchWeather();
function findProductById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var products;
        return __generator(this, function (_a) {
            products = [
                { _id: "1", name: "Product A", price: 100, stock: 50, category: "Electronics" },
                { _id: "2", name: "Product B", price: 200, stock: 30, category: "Clothing" },
            ];
            return [2 /*return*/, products.find(function (product) { return product._id === id; }) || null];
        });
    });
}
function getProduct() {
    return __awaiter(this, void 0, void 0, function () {
        var product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, findProductById("1")];
                case 1:
                    product = _a.sent();
                    if (product) {
                        console.log(product);
                    }
                    else {
                        console.log("Product not found");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
getProduct();
