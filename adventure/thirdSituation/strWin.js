var strength = 0;
var intel = 0;
var char = 0;
function setup() {
    var canvas = createCanvas(1200,500);
    canvas.parent('sketch');
}

function draw() {
    background(204, 255, 204);

    textSize(40);

    text("You jump to see above the walls of corn and\n see you're near an edge! Now to just continue\n jumping along the wall to see how to get there!", 200, 200);

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