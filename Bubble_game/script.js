var timer=60;
var score=0;
var hitval;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitval=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitval;
}

function makeBubble(){
    var clutter="";

    for(var i=1;i<=133;i++)
    {
        let rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    

   var timerint= setInterval(() => {
        if(timer>0)
        {
            timer--;
            document.querySelector("#timeval").textContent=timer;
        }
        else
        {
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`+`<h1>Your Score is ${score}</h1>`;
          clearInterval(timerint);
        }
    }, 1000);
   
}

function gameStart(){
    document.querySelector("#pbtm").addEventListener("click",function(dets){
        var a = Number(dets.target.textContent)
        if(a==  hitval)
        {
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })
}

getNewHit();
runTimer();
makeBubble();
gameStart();
