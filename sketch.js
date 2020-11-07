//Create variables here
var dog, happyDog;
var database;
var foodS;
var foodStock; 

function preload()
{
  dogIMG = loadImage ("images/dogImg.png");
  happyDogIMG = loadImage ("images/dogImg1.png");
}

function setup() {
	createCanvas(1200,1200);
  
   dog = createSprite (250,250,30,30);
   dog.addImage(dogIMG);

   database = firebase.database();

   foodStock=database.ref('Food');
   foodStock.on("value", readStock);
  
}


function draw() {  
  background (46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
    

  drawSprites();

  //add styles here

}

function readStock (data) {
    foodStock=data.val();
    console.log(foodStock);
}

function writeStock () {
  database.ref('/').set({
    'foodStock':foodStock + foodStock
  })
}

