var first = prompt("Hello and welcome. What is your first name?")
var second = prompt("What is your second name, buddy :) ?")
var age = prompt("Kindly tell me your age")
var height = prompt("Kindly tell me your age in centimetres")
var pet = prompt("What is the name of your pet?")

if (first[0] === second[0] && age > 20 && age < 30 && height >= 170 && pet.charAt(pet.length - 1) == 'y') {
    console.log("Welcome comrade. You qualified!")
} else {
    console.log("Sorry, there is nothing to see here!")
}