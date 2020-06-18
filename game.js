var buttonColours=["red","green","blue","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

$(document).keypress(function()
{
   
    if(!started)
    {
    $("h1").text("Level "+level);
    nextSequence();
    started=true;
    }

});
function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length===gamePattern.length)
      {
         
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }
}
    else
    {   console.log("fail");
        playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function()
    {   $("body").removeClass("game-over")
    },300);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}
   
}
function nextSequence()
{
  userClickedPattern=[]; 
var randomNo= Math.round(Math.random()*3);
 var randomChosenColour=buttonColours[randomNo];
 $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
gamePattern.push(randomChosenColour);
console.log(gamePattern);
playSound(randomChosenColour);
animatePress(randomChosenColour);
level++;
$("h1").text("Level "+level);

}
    $(".btn").click(function(){
var  userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);

    animatePress(userChosenColour); 
    checkAnswer(userClickedPattern.length-1);

    });   


function playSound(name)
{
var music=new Audio("sounds/"+name+".mp3");
music.play();
}
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

function startOver()
{
level=0;
gamepattern=0;
started=false;
}

if(level===2)
{
    $("body").addClass("win");
}