(() => {
    // let myNumber: number = undefined;
    // let myString: string = null;
    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let myString: string | undefined = undefined;
    myString = 'aas';

    function hi(name: string | null) {
        let hello = 'Hola ';
        if (name) {
            hello += name;
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    }

    function hi2(name: string | null) {
        let hello = 'Hola ';
            hello += name?.toLocaleLowerCase() || 'no body;'
    }

    hi('Nicolas');
    hi(null);
    hi2('Nicolas');
    hi2(null);

})();
