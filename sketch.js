var canvas;
var music;
var s1,s2,s3,s4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    s1 = createSprite(50,580,150,20);
    s2 = createSprite(205,580,150,20);
    s3 = createSprite(360,580,150,20);
    s4 = createSprite(515,580,150,20);

    s1.shapeColor = "blue";
    s2.shapeColor = "green";
    s3.shapeColor = "yellow";
    s4.shapeColor = "magenta";

    //create box sprite and give velocity
    box = createSprite(180,80,30,30);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 6;
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(s1.isTouching(box)&& box.bounceOff(s1)){
        box.shapeColor = "blue";
        music.play();
    }

    if(s2.isTouching(box)){
        box.shapeColor = "green";
        music.stop();
        box.velocityX = 0
        box.velocityY = 0
    }

    if(s3.isTouching(box)&& box.bounceOff(s3)){
        box.shapeColor = "yellow";
    }

    if(s4.isTouching(box)&& box.bounceOff(s4)){
        box.shapeColor = "magenta";
    }

    drawSprites();

//add condition to check if box touching surface and make it bounce



}



