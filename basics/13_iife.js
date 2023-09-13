// Immediately Invoked Function Expressions (IIFE)


(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ram');


//(function block) (call function);      //;--> is compulsory to stop context 