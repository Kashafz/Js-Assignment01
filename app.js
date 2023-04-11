//Question 1

function add() {
    let five = 5;
    return function(num){
        console.log(five + num)
    }  
}
let passValue = add();
passValue(20);


// Question 3

function myFunction() {
    document.getElementById("demo").innerHTML = "Kashaf";
}
myFunction()

// Question 4

var unList = document.getElementById("ul");
function list(item) {
    var li_1 = document.createElement("li")
        li_1.innerHTML = item
        unList.appendChild(li_1);
}
list("123");
list("Kashaf Ali");