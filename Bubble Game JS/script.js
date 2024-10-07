
var timer = 60;

var score = 0;

var hitrandom=0;


function makeBubble(){
    var multinums="";
 
    for(var i=1; i<=85;i++){
    var random = Math.floor(Math.random()*10);
    multinums +=`<div class="bubble"><h2>${random}</h2> </div>`;
    }
    document.querySelector("#panel-bottom").innerHTML = multinums;

}
makeBubble();



function makeTimer(){
  var timerinterval =  setInterval(function(){
        if(timer>0){
            timer--;
            document.getElementById('timeval').innerHTML=timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#panel-bottom").innerHTML=`<h1>TIME OVER !!!</h1>`;
                }
        
    },1000)
}
makeTimer();


function makeHit(){
hitrandom=Math.floor(Math.random()*10);
document.getElementById('hitval').innerHTML=hitrandom;
}
makeHit();



function makeScore(){
     score += 10;
     document.getElementById('scoreval').innerHTML=score;

}




document.querySelector("#panel-bottom").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
console.log(clickednum)
    if(clickednum === hitrandom){
        makeScore();
        makeBubble();
        makeHit();
    }

});