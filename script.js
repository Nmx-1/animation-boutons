document.getElementById("btn1").onclick = function() {myFunction()};

function myFunction() {
document.querySelector("body").style.backgroundColor = "coral";
}

let btn2;
let box1;   
document.getElementById("btn2").onclick = function() {myFunction1()};

function myFunction1() {
document.getElementById("box1").style.backgroundColor = "red";
}

let btn3;
document.getElementById("btn3").onclick = function() {myFunction2()};

function myFunction2() {
document.getElementById("box2").innerHTML = "Coucou John ";
}

let btn4;
document.getElementById("btn4").onclick = function() {myFunction3()};

function myFunction3() {
document.getElementById("box3").innerHTML = "John Forever ";
document.getElementById("box3").style.borderColor = "green";
}