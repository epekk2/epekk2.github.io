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


    text("He isn't thinking clearly due to rage and\n " +
        "is extra rough with you due to him\n" +
        "thinking you were trying to outsmart him", 200, 200);

    text("Lose 20 hp", 200, 350);


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