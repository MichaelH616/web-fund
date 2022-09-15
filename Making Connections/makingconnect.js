var nameChange = document.querySelector("#name-change");

var requestGone = document.querySelector(".user");
var requestAgain = document.querySelector(".user-2");
var connections = document.querySelector(".connections");

function changeName(){
    nameChange.innerText = "Doe Jane"
}

function hide1(){
    requestGone.remove();
}

function hide2(){
    requestAgain.remove();
}

function add1(){
    var connectAmount = parseInt(connections.innerText);
    connections.innerText = connectAmount + 1
}

function sub1(){
    var connectAmount = parseInt(connections.innerText);
    connections.innerText = connectAmount - 1
}