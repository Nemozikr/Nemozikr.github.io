const meow = new Audio("deep-ass-meow.mp3")
var clicks = 0;
var points_amount = 0;
var pointMutliplier = 2;
var muliplierChance = 10;
var img1 = document.createElement("img")
const buttonsElement = document.querySelectorAll(".meowButton")
buttonsElement.forEach((buttonElement) => {
    buttonElement.addEventListener("click", hdhqClick(this.id))
}) 


function hdhqClick(clicked){
    clicks++;
    console.log("number of clicks: " + clicks)
    console.log("this: "+ clicked)
    if (clicked == "hdhqButton"){
        pointIncrease(); 
    }
}
function pointIncrease(){
    Gains = earnedPoints();
    points_amount = points_amount + Gains;
    console.log("amount of HDHQ points: "+ points_amount);
    valChange(points_amount)
    return points_amount;
}
function earnedPoints(){
    Gains = 0;
    Gains ++;
    chance = (Math.random() * 100) + 1
    console.log("chance value = " + chance + " out of " + muliplierChance)
    if (chance <= muliplierChance){
        Gains = Gains + ((Gains * pointMutliplier) - Gains);
        console.log("Capital Gains: " + Gains)
    } 
    else{
        console.log("Capital Gains: " + Gains);
    }
    return Gains;
}
function valChange(points_amount){
    document.getElementById("points").innerHTML = points_amount;
    console.log("------")
}

const showHidden = () => {
    document.getElementById("show").classList.toggle('hidden');
    document.getElementById("hide").classList.toggle('hidden');
  }
