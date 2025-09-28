
var randomNumber = Math.floor(Math.random() * 6) + 1;

randomeDiceImage = "images/dice" + randomNumber + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomeDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomeDiceImage2);

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins"
}

else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player2 Wins"
}

else {
    document.querySelector("h1").innerHTML = "Draw"
}