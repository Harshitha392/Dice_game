function function_display(){
var random_player1=Math.floor(Math.random() * 6+1);
var dice_image="dice"+random_player1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice_image);
var random_player2=Math.floor(Math.random()*6+1);
var dice_image11="dice"+random_player2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice_image11);
if(random_player1>random_player2){
    document.querySelector("h1").innerHTML="PLAYER1 WINS";
}
else if(random_player1<random_player2){
    document.querySelector("h1").innerHTML="PLAYER2 WINS";
}
else{
    document.querySelector("h1").innerHTML="ITS A DRAW";
}
}