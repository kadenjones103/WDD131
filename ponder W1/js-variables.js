let age = 21;
let name = "Kaden Jones";

//this is like print in python
console.log(age);

//this is a constant variable, it cannot be changed
const eyeColor = "blue";
let favoriteColor = "";

console.log(eyeColor);
//scope is where a variable can be referenced, global scope is anywhere in the code, local scope is only within a function
if(age == 21) {
    //we are in a different scope
    //inside this scope, we can reference varibles declared outside of it.
    console.log(name); //example

    //if you declare a variable in an inner scope
    favoriteColor = "orange";
}

console.log(favoriteColor); //this will throw an error because favoriteColor is not in the global scope

//pulling from the page
document.querySelector("h1").style.color = favoriteColor; 
document.querySelector("p").style.color = "black";
