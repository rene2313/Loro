var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {

  document.querySelector("h1").innerHTML = "Gil Gano.  el Loro da ese CULO"
} else if (randomNumber2 > randomNumber1) {

  document.querySelector("h1").innerHTML = "Gano el Loro, igual quiere que Gil lo coja"
} else {

  document.querySelector("h1").innerHTML = "😂 Empate igual, igual te voy a cojer Loro 😂"
}
