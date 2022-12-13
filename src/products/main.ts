import { addProduct, calcStock, products } from "./product.service";

addProduct({
    title: "lalala",
    createdAt: new Date (2022,1,2),
    stock: 5,
})

addProduct({
    title: "lalala",
    createdAt: new Date (2022,1,2),
    stock: 12,
    size: 'L'
})

console.log('products', products)
const total = calcStock();
console.log('total', total)
