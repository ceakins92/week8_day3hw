import { v4 as uuidv4 } from "uuid"

type User = {
    uid: string,
    first_name: string,
    last_name: string,
    age: number,
    cart: Item[]
}

function createUser(first_name:string,last_name:string,age:number):User{
    let userId = uuidv4()
    return {
        uid: userId,
        first_name,
        last_name,
        age,
        cart: []
    }
}

type Item = {
    iid: string,
    name: string,
    description: string,
    price: number
}

function createItem(name:string,description:string,price:number):Item{
    let itemId = uuidv4()
    return {
        iid: itemId,
        name,
        description,
        price
    }
}

function addToCart(user:User,item:Item):void{
    user.cart.push(item)
    console.log(`You added 1 ${item.name} to your cart.`)
}

function removeFromCart(user:User,item:Item):void {
    user.cart = user.cart.filter(function (cartItem) { return cartItem.iid !== item.iid; })
    console.log(`Removed all ${item.name}s from Cart.`)
}
function removeQuantityFromCart(user:User,item:Item, quantity:number):void {
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

function cartTotal(user: User): number {
    let totalCart: number = 0
    for (let item of user.cart) {
        totalCart += item.price
    }
    console.log('-> '.concat('Cart Total: $').concat(`${totalCart}.`))
    return totalCart
}

function printCart(user: User) {
    console.log(`${user.first_name}'s Cart:`);
    for (let _i = 0, _a = user.cart; _i < _a.length; _i++) {
        let item = _a[_i];
        console.log("-> ".concat(item.name, ": $ ").concat(`${item.price}`));
    }
}

function driver(): void {
    const user1 = createUser('Chris','Eakins', 40)
    const itemA = createItem('Beer', 'Real Tasty Brew', 15)
    const itemB = createItem('Cheese', 'Wisconson\'s Best Dairy', 10)
    const itemC = createItem('Gum','Typical Impulse Grab', 2)
    addToCart(user1, itemA)
    printCart(user1)
    cartTotal(user1)
    addToCart(user1,itemB)
    addToCart(user1,itemB)
    addToCart(user1,itemB)
    printCart(user1)
    cartTotal(user1)
    addToCart(user1,itemC)
    addToCart(user1,itemC)
    addToCart(user1,itemC)
    printCart(user1)
    cartTotal(user1)
    removeFromCart(user1,itemB)
    printCart(user1)
    cartTotal(user1)
    removeQuantityFromCart(user1, itemC, 2)
    printCart(user1)
    cartTotal(user1)
}

driver()

/*

You added 1 Beer to your cart.
Chris's Cart:
-> Beer: $ 15
Cart Total: 15
You added 1 Cheese to your cart.
You added 1 Cheese to your cart.
You added 1 Cheese to your cart.
Chris's Cart:
-> Beer: $ 15
-> Cheese: $ 10
-> Cheese: $ 10
-> Cheese: $ 10
Cart Total: 45
You added 1 Gum to your cart.
You added 1 Gum to your cart.
You added 1 Gum to your cart.
Chris's Cart:
-> Beer: $ 15
-> Cheese: $ 10
-> Cheese: $ 10
-> Cheese: $ 10
-> Gum: $ 2
-> Gum: $ 2
-> Gum: $ 2
Cart Total: 51
Removed all Cheeses from Cart.
Chris's Cart:
-> Beer: $ 15
-> Gum: $ 2
-> Gum: $ 2
-> Gum: $ 2
Cart Total: 21
You removed 2 Gum from Cart.
Chris's Cart:
-> Beer: $ 15
-> Gum: $ 2
Cart Total: 17

[Done] exited with code=0 in 1.793 seconds

*/