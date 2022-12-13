(() => {
    let userId: string | number;

    userId = 10;
    userId = "10";

    function helloUser(id: string | number){
        console.log(`Hola usuario con el número de id ${id}`);
    }

    function greeting(myText: string | number) {
        if(typeof myText === "string") {
            console.log('mytext.toLowerCase()', myText.toLowerCase())
        } else {
            console.log('myText.toFixed(1)', myText.toFixed(1))
        }
    }

    greeting('asd')
    greeting(23)
})();
