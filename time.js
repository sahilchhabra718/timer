//Displaying Time:


let hours;
let minutes;
let seconds;
let amOrPm;

export function updateVar(){
    let date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    amOrPm = "AM";

    if(hours>12){
        hours = hours%12;
        amOrPm = "PM";
    }
    if(seconds<=9){
        seconds = "0" + seconds;
    }
    if(hours<=9){
        hours = "0" + hours;
    }
    document.getElementById("time").innerHTML = `Time: ${hours}:${minutes}:${seconds}  ${amOrPm}`;
}

// setInterval(updateVar, 1000);