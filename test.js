function test(a ,b ){
    return a + b;

}
function test2(a,b){
    return a - b;

}
function test3(a,b){
    return a * b;
    
}

const add=test(34,6);
const sub=test2(40,21);
const multi=test3(10,300);

console.log("Addition " + add,"Substraction "+ sub);
console.log("Multiplication "+ multi);
