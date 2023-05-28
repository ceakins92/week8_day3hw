"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let uuid_1 = require("uuid");
let User = /** @class */ (function () {
    function Users(_uid, _first_name, _last_name, _age, _cart) {
        if (_uid === void 0) { _uid = (0, uuid_1.v4)(); }
        this._uid = _uid;
        this._first_name = _first_name;
        this._last_name = _last_name;
        this._age = _age;
        this._cart = _cart;
    }
    Object.defineProperty(Users.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (value) {
            this._cart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "name", {
        get: function () {
            return this._first_name;
        },
        set: function (value) {
            this._first_name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "userid", {
        get: function () {
            return this._uid;
        },
        set: function (value) {
            this._uid = value;
        },
        enumerable: false,
        configurable: true
    });
    Users.prototype.addToCart = function (user, item) {
        user.cart.push(item)
        return `You added 1 ${item.name} to your cart.`;
    };
    Users.prototype.removeFromCart = function (item, user) {
        var i = user.cart.length;
        while (i--) {
            if (user.cart[i] === item) {
                user.cart.splice(i, 1);
            }
        }
        console.log(`Removed all ${item.name}s from your cart.`)
    };
    Users.prototype.removeQuantityFromCart = function (item, user, quantity) {
        var n = user.cart.indexOf(item);
        user.cart.splice(n, quantity);
        console.log(`<- You removed ${quantity} ${item.name} from Cart.`)
    };
    Users.prototype.cartTotal = function (user) {
        console.log("The total in ".concat(user.name, "'s cart is: $").concat(user.cart.reduce(function (acc, item) { return acc + item.price; }, 0), "."));
        return user.cart.reduce(function (acc, item) { return acc + item.price; }, 0);
    };
    Users.prototype.printCart = function (user) {
        console.log(`${user.name}'s Cart:`);
    for (let _i = 0, _a = user.cart; _i < _a.length; _i++) {
        let item = _a[_i];
        console.log("-> ".concat(item.name, ": $ ").concat(`${item.price}`));
    }
    };
    return Users;
}());
exports.default = User;