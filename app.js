const iceCream =[{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Chocolate',
    price: 1.25,
    quantity: 0,
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
},
{
    name: 'Mint Chip',
    price: 1.50,
    quantity: 0
}]


const toppings =[{
    name: 'Sprinkles',
    price: .15,
    quantity: 0
},
{
    name: 'Chocolate Chips',
    price: .20,
    quantity: 0
},
{
    name: 'Oreo Crumbles',
    price: .25,
    quantity: 0
},
{
    name: 'Strawberries',
    price: .25,
    quantity: 0
}]


function orderVanilla() {
    iceCream[0].quantity += 1
    console.log('Added 1 Scoop of', iceCream[0])
}

function orderChocolate() {
    iceCream[1].quantity += 1
    console.log('Added 1 Scoop of', iceCream[1])
}

function orderStrawberry() {
    iceCream[2].quantity += 1
    console.log('Added 1 Scoop of', iceCream[2])
}

function orderMint() {
    iceCream[3].quantity += 1
    console.log('Added 1 Scoop of', iceCream[3])
}


function getOrderTotal() {
    let total = 0
    for (let i = 0; i < iceCream.length; i++) {
        const item = iceCream[i]
        console.log("Total:", item.price * item.quantity);
        total += item.price * item.quantity
    }
    console.log('💵', total);
    return total
}