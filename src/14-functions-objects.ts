(() => {

    const login = (data: {email:string, password: number}) => {
        console.log('data.email, data.password', data.email, data.password)
    }

    login({
        email: 'maxi@gmail.com',
        password: 123123
    })

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const products: any[] = [];

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {
        products.push(data);
    }

    addProduct({
        title: "lalala",
        createdAt: new Date (2022,1,2),
        stock: 12,
    })

    console.log('products', products)
})();
