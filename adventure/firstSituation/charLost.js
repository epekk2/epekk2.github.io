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

    text("You try to ask him questions to figure out why he\n must rob you " +
        "as you assume he must have a hard life,\n but he doesn't seem to care. " +
        "You get robbed and a nice\n punch in the gut for asking.", 200, 200);

    text("That punch really hurt" + "lose 10 health", 200, 400);

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