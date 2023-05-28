// Imports/Exports ================================

import Item from './Items'
//import { v4 as uuidv4 } from 'uuid'

// User Class =====================================
export default class User {
   
    constructor(
    private _uid: string,
    private _first_name: string,
    private _last_name: string,
    private _age: number,
    private _cart: Item[]
){}
public get cart(): Item[] {
    return this._cart
}
public set cart(value: Item[]) {
    this._cart = value
}
public get age(): number {
    return this._age
}
public set age(value: number) {
    this._age = value
}
public get last_name(): string {
    return this._last_name
}
public set last_name(value: string) {
    this._last_name = value
}
public get first_name(): string {
    return this._first_name
}
public set first_name(value: string) {
    this._first_name = value
}
public get uid(): string {
    return this._uid
}
public set uid(value: string) {
    this._uid = value
}
// User Function to Add to Cart ===============================================

addToCart(user:User,item:Item):string{
    user.cart.push(item)
    return `You added 1 ${item.name} to your cart.`
}

// User Function to Remove from Cart ===========================================

removeFromCart(user:User,item:Item):void {
    user.cart = user.cart.filter(function (cartItem) { return cartItem.iid !== item.iid; })
    console.log(`Removed all ${item.name}s from Cart.`)
}

// User Fuction to Remove a Certain Quantity From Cart ========================

removeQuantityFromCart(user:User,item:Item, quantity:number):void {
    let remainingItems = [];
    let count = 0;
    for (let _i = 0, _a = user.cart; _i < _a.length; _i++) {
        let cartItem = _a[_i];
        if (cartItem.iid === item.iid) {
            if (count < quantity) {
                count++;
            }
            else {
                remainingItems.push(cartItem);
            }
        }
        else {
            remainingItems.push(cartItem);
        }
    }
    user.cart = remainingItems;
    console.log(`<- You removed ${quantity} ${item.name} from Cart.`)
}

// User Function to View Cart Total ============================================

cartTotal(user: User): number {
    let totalCart: number = 0
    for (let item of user.cart) {
        totalCart += item.price
    }
    console.log('-> '.concat('Cart Total: $').concat(`${totalCart}.`))
    return totalCart
}

// User Function to Print Cart ================================================

printCart(user: User) {
    console.log(`${user.first_name}'s Cart:`);
    for (let _i = 0, _a = user.cart; _i < _a.length; _i++) {
        let item = _a[_i];
        console.log("-> ".concat(item.name, ": $ ").concat(`${item.price}`));
    }
}}