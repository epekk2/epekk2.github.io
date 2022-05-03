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

    text("You attempt to jump above the tops of the corn\n to see around you but you can't get high enough.\n gotta try another approach.", 200, 200);

    text("You get very hungry before getting out\n lost 5 health", 200, 350);


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