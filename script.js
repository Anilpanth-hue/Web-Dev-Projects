var timer = 25;
var score = 0;
var hitrn = 0;

// EventBubling-> matlab jis element par click karoge vo element par event raise ho jayega, aur event listner na 
// milne par event element ke parent par listner dhundega, vaha bhi na milne par event parent ke parent ke parent 
//  par listner dhundega

document.querySelector("#pbottom").addEventListener("click", function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber == hitrn){
        //matlab jaise hi hitrn par click kiya, to teeno function apna kaam karne lage and it's DONE..
        increaseScore();
        makeBubble();
        getnewHit();
    }
})  

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = ""

for(var i=1; i<=84; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`

}
document.querySelector("#pbottom").innerHTML = clutter;
}

function runTime(){ 
    var timerin = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerin);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
    
}
runTime();
makeBubble();
getnewHit();
increaseScore();