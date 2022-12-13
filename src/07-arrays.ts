(() => {
    let prices = [1,2,21,2,1,2,'hola', true];
    //quedo inferido que es un array de numeros
    prices.push('asdf');
    prices.push(true);
    // prices.push({});
    prices.push(12);
    console.log('prices', prices)

    let products = ['hola', true];
    products.push(false);

    let mixed: (number | boolean | string)[] = ['hola', true];
    mixed.push(12)
    console.log('mixed', mixed)

})();
