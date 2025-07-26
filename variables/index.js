// variable = a container that stores a value .
//              bahave as if it were the value it contains 

// 1. declearation     let x;
// 2. asignment        x=100;

let x ;
x=100;

let age=20;
let price =10.20;
let gpa =8.67;
let grade="hello";
let ispass=true;

console.log(typeof grade)
console.log(`You are ${age} years old`);
console.log(`yhthe price is ${price}`)
console.log(`The gpa is ${gpa} in my graduation`)

// const = a variable that can't be changed

const PI=3.14;
let radius;
let circumfarance;

radius= Number(radius);



document.getElementById("sub").onclick = function(){
    radius=document.getElementById("inp").value;
    radius = Number(radius)
    document.getElementById("H3").textContent=circumfarance=2*PI*radius;
}