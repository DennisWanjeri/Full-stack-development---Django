function addNum(num1, num2) {
    console.log(num1 + num2)
}
function helloSomeone(name = "Frankie") {
    console.log("hello " + name)
}

function formal(title = "Sir", name = "Sam") {
    return title + " " + name
}

function timesFive(numInput) {
    var result = numInput * 5
    return result
}