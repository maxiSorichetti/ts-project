(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

    function createProductJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ){
    return {
            title,
            createdAt,
            stock,
            size
        }
    }
    const producto1 = createProductJson(
        "titulo",
        new Date('10/10/3030'),
        30,
        'M'
    )
    console.log('producto1', producto1)

    const createProductJson2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    ) => {
        return {
                title,
                createdAt,
                stock,
                size
            }
    }

    const producto2 = createProductJson2(
        "titulo",
        new Date('10/10/3030'),
        30,
        // 'M'
    )
    console.log('producto2', producto2)

})();
