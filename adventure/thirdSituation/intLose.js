var strength = 0;
var intel = 0;
var char = 0;
function setup() {
    var canvas = createCanvas(1200,500);
    canvas.parent('sketch');
}

function draw() {
    background(255, 153, 153);

    textSize(40);

    text("You begin retracing the path you think\n you took to just leave through the\n enterance, but it doesn't seem to be right!", 200, 200);

    text("You get very hungry before making it out\n lose 5 health", 200, 350);


}



function setStrength() {
    strength = document.getElementById("strength").value;
}

function setIntel() {
    intel = document.getElementById("intel").value;
}

function setCharisma() {
    char = document.getElementById("char").value;
}