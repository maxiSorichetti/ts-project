(() => {

    const calcTotal = (prices: number[]): number => {
        let total = 0;
        prices.forEach((item) => {
            total+= item;
        })
        return total;
    }

    const printTotal = (prices: number[]) => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`)
    }

    const rta = printTotal([1,2,3,21,3])
    // const rta = calcTotal([1,2,3,21,3])
    console.log('rta', rta)
})();
