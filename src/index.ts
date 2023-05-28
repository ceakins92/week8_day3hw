//Imports ============================================================

import Items from './Items';
import Shop from './Shop';
import Users from './Users';
import { v4 as uuidv4 } from 'uuid'

// Create Items/User ====================================================


const beer = new Items(uuidv4(),'Beer','Real Tasty Brew',15)
const cheese = new Items(uuidv4(),'Cheese','Wisonson\'s Best Dairy',10)
const gum = new Items(uuidv4(),'Gum','Typical Impulse Purchase',2)

// Driver Function with Simulated Input ==================================

function driver(first_name:string,last_name:string,age:number){
    const user1 = new Users(uuidv4(), first_name, last_name, age, [])
    const shop = new Shop(beer, cheese, gum)
    user1.cart.push(shop.itemA)
    user1.cart.push(shop.itemA)
    user1.cart.push(shop.itemA)
    user1.cart.push(shop.itemA)
    user1.cart.push(shop.itemB)
    user1.cart.push(shop.itemB)
    user1.cart.push(shop.itemB)
    user1.cart.push(shop.itemC)
    user1.cart.push(shop.itemC)
    user1.cart.push(shop.itemC)
    user1.cartTotal(user1)
    user1.printCart(user1)
    user1.removeFromCart(user1, shop.itemA)
    user1.cartTotal(user1)
    user1.printCart(user1)
    user1.removeQuantityFromCart(user1, shop.itemB, 2)
    user1.cartTotal(user1)
    user1.printCart(user1)
}

driver('Christopher', 'Eakins', 40)


/* Output from driver():  ==========================================


*/