// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name) {
    roster.push(name)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(name) {
    var index = roster.indexOf(name)
    if (index > -1) {
        roster.splice(index, 1)
    }
    return roster
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display() {
    console.log(roster)
}

// Start by asking if they want to use the web app
var desc = prompt("Hello and welcome :) Do you want to use the web app? Yes or No")
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
var choice = ""
while (choice != "quit" && desc === "Yes") {
    choice = prompt("What would you like to do? (add, remove, display or quit)")
    if (choice == "add") {
        var newName = prompt("Enter the name of the student you would like to add")
        addNew(newName)
    }
    else if (choice == "remove") {
        var rem = prompt("Enter the name you would like to remove")
        remove(rem)
    }
    else if (choice == "display") {
        display()
    }
    else {
        alert("Not recognized, quitting!")
    }
}
alert("Thanks for using the roster web application. Enjoy your day :)")
// Use if and else if statements to execute the correct function for each command.
