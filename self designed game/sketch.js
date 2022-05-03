var jungleImg,jungle;
var boy,boyImg;

function preload(){
jungleImg=loadImage("images/background.jpg");
boyImg=loadAnimation("images/boy 2.png","images/boy 3.png");
}

//Function to set initial environment
function setup() {
createCanvas(800,400)
   jungle=createSprite(400,100,400,20);
   jungle.addImage(jungleImg)
   jungle.x=width/2

   boy=createSprite(50,300);
   boy.addAnimation("boy",boyImg)
   boy.scale=1.8;
   
}

// function to display UI
function draw() {

   jungle.velocityX=-3

   if(jungle.x<100){
      jungle.x=400
   }

   drawSprites();
}