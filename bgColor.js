
var color1 = document.getElementById("color1");

var color2 = document.getElementById("color2");

var color1Value = color1.value;
var color2Value = color2.value;
document.body.style.background = "linear-gradient(to right,"+color1Value+","+color2Value+")";
var colorType = document.querySelector(".colorType");

var changeRandom = document.querySelector(".colorBtn");

function changeGradientColor(color1,color2){
    
    document.body.style.background = "linear-gradient(to right,"+color1+","+color2+")";    
    colorType.textContent = document.body.style.background+";";
}

changeGradientColor();
color1.addEventListener("input",function()
{
    color1Value = color1.value;
    changeGradientColor(color1Value,color2Value);
})
color2.addEventListener("input",function()
{
    color2Value = color2.value;
    changeGradientColor(color1Value,color2Value);
})

changeRandom.addEventListener("click",function(){
    
    var randomList = [];
    for(var index=0;index<6;index++){
        randomList[index] = Math.floor((Math.random()*254)+1);
    }
    
    color1Value = "rgb("+randomList[0]+","+randomList[1]+","+randomList[2]+")";
    
    color2Value = "rgb("+randomList[3]+","+randomList[4]+","+randomList[5]+")";

   changeGradientColor(color1Value,color2Value);
    
})


