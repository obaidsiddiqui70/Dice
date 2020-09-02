var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomNumber2 = (Math.floor(Math.random()*6))+1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var folder1="images/"+randomDiceImage1;
var folder2="images/"+randomDiceImage2;
document.querySelectorAll('img')[0].setAttribute("src",folder1);
document.querySelectorAll('img')[1].setAttribute("src",folder2);
if(randomNumber1>randomNumber2)
{
  document.querySelector('.container h1').innerHTML="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector('.container h1').innerHTML="Player 2 Wins!";
}
else
{
    document.querySelector('.container h1').innerHTML="It's a Draw!";
}
