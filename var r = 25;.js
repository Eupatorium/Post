var r = 25;
var g = 50;
var b=255

function setup() {
    createCanvas(1200,1200);
    background("green");  
}
if(mouse.X>0 && mouse.X<1200){
    var r = Math.round(random(0,255));
    var g = Math.round(random(50,255));
    var b = Math.round(random(0,255));
}
if((mouse.Y>0 && mouse.Y<1200 ){
    var r = Math.round(random(0,255));
    var g = Math.round(random(50,255));
    var b = Math.round(random(0,255));
}