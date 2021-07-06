
// Function currying 

// Function currying using Bind

let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

// Function currying using closure

let add = function(x){
    return function(y){
        console.log(x+y);
    }
}

let addByTwo = add(2);
addByTwo(5);