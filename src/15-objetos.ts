(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    const products: Product[] = [];

    const addProduct = (data: Product) => {
        products.push(data);
    }

    addProduct({
        title: "lalala",
        createdAt: new Date (2022,1,2),
        stock: 12,
    })

    addProduct({
        title: "lalala",
        createdAt: new Date (2022,1,2),
        stock: 12,
        size: 'L'
    })

    console.log('products', products)
})();
