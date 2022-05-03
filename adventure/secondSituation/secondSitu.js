var strength = 0;
var intel = 0;
var char = 0;
var health = 0;
function setup() {
    var canvas = createCanvas(1200,500);
    canvas.parent('sketch');
}

function draw() {
    background(220);

    line(0, 100, 1200, 100);

    textSize(40);
    text("Health: " + health, 50, 65);
    text("Strength: " + strength, 290, 65);
    text("Intelligence: " + intel, 550, 65);
    text("Charisma: " + char, 900, 65);

    setStrength();
    setIntel();
    setCharisma();
    setHealth();

    text("You and a friend are in a forest and you \n want to get across a river, how \n do you cross it?", 200, 200);

}

function setHealth() {
    health = document.getElementById("health").value;
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