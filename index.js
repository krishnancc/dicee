var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="dice1.png+dice2.png+dice3.png+dice4.png+dice5.png+dice6.png"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="dice1.png+dice2.png+dice3.png+dice4.png+dice5.png+dice6.png"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="🚩 Play 1 wins!";
}

else if (randomNumber1<randomNumber2) 
    {document.querySelector("h1").innerHTML="Play 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}


