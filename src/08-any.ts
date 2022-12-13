(() => {
    let myDynamicVar: any;
    myDynamicVar=100;
    myDynamicVar=null;
    myDynamicVar={};

    myDynamicVar='Hola';
    const rta = (myDynamicVar as string).toLocaleLowerCase();
    console.log('rta', rta)

    myDynamicVar= 1212;
    const rta2 = (<number>myDynamicVar).toFixed();
    console.log('rta2', rta2)

})();
