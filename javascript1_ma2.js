//MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance

function phone() {
    this.make = "Apple"
}

phone.prototype.model = function() {
    console.log("I am a mobilephone and the make of this is " + this.make + " phone");
};

var mobile = new phone();
mobile.model();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var alsoNumbers = numbers.slice(5);
console.log(alsoNumbers);

//3. Delete the last number in the array that you created above.

numbers.pop();
console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas

/*Strawberries are a popular part of spring and summer diets throughout America. 
Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. 
They announce the impending arrival of the ruby red berries that so many people crave. 
Ripe strawberries taste sweet and have only a slight hint of tartness. 
They are also one of the healthiest fruits around. 
There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.
*/

var paragraph = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."

function changeParagraph() {
    console.log(paragraph);
    paragraph = paragraph.replace(/strawberry/g, "banana");
    paragraph = paragraph.replace(/strawberries/g, "bananas");
    paragraph = paragraph.replace(/Strawberry/g, "Banana");
    paragraph = paragraph.replace(/Strawberries/g, "Bananas");
    console.log(paragraph);
}

changeParagraph();

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var names = [
    "Liverpool",
    "Manchester United",
    "Real Madrid",
    "Arsenal"
];

function removeAndAdd() {
    console.log(names)
    names = [];
    names.push("Toyota");
    names.push("Audi");
    names.push("BMW");
    names.push("Volkswagen");
    console.log(names);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    { firstName: "Bjørn Håkon", lastName: "Noss" },
    { firstName: "Walther", lastName: "Hem" },
    { firstName: "Lotta", lastName: "Lofstad" },
]

var persons = people.filter(function(person) {
    return (person.firstName === "Lotta");
})

console.log(persons);

//7. Create a simple function that logs the date.

function logDate() {
    var d = new Date();
    console.log(d);
}

logDate();