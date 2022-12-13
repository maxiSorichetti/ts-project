(() => {
    type UserID = string | number | boolean;
    let userId: string | number | boolean;

    //Literal types
    type Sizes = 'S' | 'M';
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'S';
    // shirtSize = 'L';

    function greeting(userId: UserID, size: Sizes) {
        if(typeof userId === "string") {
            console.log('userId.toLowerCase()', userId.toLowerCase())
        }
    }

    greeting(111,'M');
})();
