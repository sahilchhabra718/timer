import * as time from "./time.js";

let sec = 0;
let min = 0;
let hour = 0;
let day = 0;
let ms = 0;

let started = false;

function update(){
    document.getElementById("timer").innerHTML = `Day: ${day} Hour: ${hour} Min: ${min} Sec: ${sec}`;
    document.getElementById("progress").value = sec;
}

update();

document.getElementById("start").onclick = function(){
    if(!started){
        initialize();
    }
    else{
        console.log("Already Started!");
    }
    started = true;
    update();
}

document.getElementById("reset").onclick = function(){
    if(started||paused){
        sec = 0;
        min = 0;
        hour = 0;
        day = 0;
        started = false;
        paused = false;
        clearInterval(timer);
        update();
    }
    else{
        console.log("Start first!");
    }
}

let paused = false;

document.getElementById("pause").onclick = function(){
    if(started){
        started = false;
        paused = true;
        clearInterval(timer);
        update();
    }
    else if(paused&&!started){
        started = true;
        paused = false;
        initialize();
    }
    else{
        console.log("Incapable!");
    }
}

let timer;

function initialize(){
    timer = setInterval(increment, 1000);
}

function increment(){
    sec++;
    if(sec==60){
        sec = 0;
        min++;
    }
    if(min ==60){
        min = 0;
        hour ++;
    }
    if(hour == 24){
        hour = 0;
        day++;
    }
    update();
}




//Adding a time stamp:

setInterval(time.updateVar, 1000);