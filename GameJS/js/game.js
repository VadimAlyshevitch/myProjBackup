var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var car = new Image();
var bg = new Image();
var fg = new Image();

var hellic = new Image();
var pol = new Image();


car.src = "img/car.png";
bg.src = "img/race.png";
//fg.src = "img/road.png";
hellic.src = "img/police_car.png";
pol.src = "img/police_car.png";

var drive = new Audio();
var score_audio = new Audio();

drive.src = "sound/Kavinsky_Nightcall_8_Bit.mp3"
//score_audio = "sound/score.mp3"


var gap = 100;

document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -=40;
    

}
var police = [];
police[0] = {
    x : cvs.width,
    y : 0
}

var score = 0;

var xPos = 10;
var yPos = 100;
var grav = 0.5;
 function draw() {
     ctx.drawImage(bg, 0, 0);
     drive.play();
    
     for (var i = 0; i < police.length; i++){
        ctx.drawImage(hellic, police[i].x, police[i].y);
        ctx.drawImage(pol, police[i].x, police[i].y + hellic.height + gap);
        
        police[i].x--;

        if(police[i].x == 120){
            police.push({
                x : cvs.width,
                y : Math.floor(Math.random() * hellic.height) - hellic.height
            });
        }

     }
     if(yPos + car.height >= cvs.height) {
         alert("SOSI HUI");
        location.reload(); // Перезагрузка страницы
        }

     ctx.drawImage(fg, 0, cvs.height - fg.height);
     ctx.drawImage(car, xPos, yPos);

     

     yPos += grav;

     ctx.fillStyle = "#FFF";
     ctx.font = "24px Verdana";

    // ctx.fillText("Счет: " + score, 10, cvs.height - 20);


     requestAnimationFrame(draw);
     
 }
 
 pol.onload = draw;
