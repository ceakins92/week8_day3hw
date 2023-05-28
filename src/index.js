"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Items");
const User_1 = require("./Users");
const Shop_1 = require("./Shop");
var uuid_1 = require("uuid");
var beer = new Item_1.default((0, uuid_1.v4)(), 'Beer','Real Tasty Brew',15);
var cheese = new Item_1.default((0, uuid_1.v4)(), 'Cheese','Wisonson\'s Best Dairy',10);
var gum = new Item_1.default((0, uuid_1.v4)(),'Gum','Typical Impulse Purchase',2);

function Driver(first_name,last_name,age) {
    var shop = new Shop_1.default(beer,cheese,gum);
    var user = new User_1.default((0, uuid_1.v4)(),first_name,last_name,age, []);
    user.cart.push(shop.itemA);
    user.cart.push(shop.itemA);
    user.cart.push(shop.itemA);
    user.cart.push(shop.itemB);
    user.cart.push(shop.itemB);
    user.cart.push(shop.itemB);
    user.cart.push(shop.itemC);
    user.cart.push(shop.itemC);
    user.cart.push(shop.itemC);
    user.cartTotal(user);
    user.printCart(user);
    user.removeFromCart(shop.itemA, user);
    user.cartTotal(user);
    user.printCart(user);
    user.removeQuantityFromCart(shop.itemB, user, 2);
    user.cartTotal(user);
    user.printCart(user);
}
Driver('Christopher','Eakins',40);