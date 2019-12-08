//Global Scope
var  a = 'One';
let b ="Two";
const c = "Three"

// function Test(){
//     var a ="four";
//     let b = "five";
//     const c = "Six";
//     console.log('Function scope:'+a,b,c);
// }

// Test();

// if(true){
//     //Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If scope:'+a,b,c);
// }

for(var a = 0; a < 10; a++){
    console.log(`Loop:${a}`);
}

console.log('Global scope:'+a,b,c);
