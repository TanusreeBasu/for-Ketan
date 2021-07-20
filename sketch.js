var aeroplane,aeroplaneImg;
var story,keys,play,Menu;
var backImg,backImg;
var gameState = 0;
var aeroplaneState = 0;
var speed = 0;
var bg;
var intro;
var game;
var canvas;
function preload(){
aeroplaneImg = loadImage("Images/Aeroplane image.png")
backImg = loadImage("Images/Airportimage.png")
backImg2 = loadImage("Images/Background image.jpg")
}

function setup() {
 canvas =  createCanvas(1500,600);
 background(backImg )
 aeroplane = createSprite(600,470,50,50); 
 aeroplane.addImage(aeroplaneImg);
 aeroplane.visible=false;
 aeroplane.velocityX=3;
  game = new Game();
 
  game.start();
}

function draw(){
  //background(255);

drawSprites();
}
  // if(gameState===0){
//  bg = createSprite(700,400)
//  bg.addImage(backImg)
//  bg.scale = 2.4;


// story = createButton("STORY")
// story.position(400,100)
// story.mousePressed(Story)

// keys = createButton("KEYS")
// keys.position(400,200)
// keys.mousePressed(Keys)

// play = createButton("PLAY")
// play.position(400,300)
// play.mousePressed(Play)

// ground = createSprite(750,660,1500,10);
// ground.shapeColor = "grey"

 //aeroplane = createSprite(600,470,50,50);
// aeroplane.addImage(aeroplaneImg)
// //aeroplane.debug = true
// aeroplane.setCollider("rectangle", 0,0, 10,10)
// //aeroplane.visible = false
//   // }
//   story = createButton("STORY");
//   //story.shapeColor = "orange";
//   //story.visible = false
//  story.position(400,100)
 
// //story.mousePressed(Story)

// keys = createButton("KEYS")
//  keys.position(400,200);

//  play = createButton("PLAY")
// play.position(400,300);
// play.mousePressed(Play)
// }

// function draw() {

//  background(255)
//  if(gameState === "intro"){
//   intro=createSprite(750,300,1500,600);
//  // intro.shapeColor="black";
//  }
// //story.visible = true
// //   if(story.mousePressed(()=>{
// //     console.log("y")
// //     stroke(20)
// //     textSize(40)
// //     fill("yellow")
// //     textFont("Georgia")
// //     text("Dear Pilot,",10,30)
// //     text("This is to inform you that your application have been appcepted by",50,100)
// //     text("our company and your flight from Whales to 20,000 kilometers have",50,170)
// //     text("been accepted. You are requested to visit our company in Whales.",50,240)
// //     text("From,",10,310)
// //    text("The Company Owner,KETAN",10,380)
// //   })
// // }


// // if(gameState === 0){
// //     //background(0)
// //     fill("yellow");
// //     textSize(25); 
// //     text("Press space to start", 400, 200)
// // console.log(text);
// //   // aeroplane.collide(ground)
// //     aeroplane.velocityX= 0;
// //     aeroplane.velocityY= 0;
// //     bg.velocityX =0
// //     //  if(bg.x<0){
// //     //  bg.x = 1500
// //     //  }
// //     if(keyDown("space")){
// //       gameState = 1;
     
  
//    // }
//   //}
     
    

    
 
 


 

//   //camera.position.x = bg.x;
//   //camera.position.y = bg.y; 



 
   

 
// //   if(gameState===1){
// //     Menu = createButton("Main Menu")
// // Menu.position(50,450)
// //    Menu.mousePressed(MENU)
// //       }
// //       if(aeroplane.velocityX>=2){
// //         speed=speed+1;
// //       }

// //       console.log(speed)
// //       camera.position.x = (displayWidth-100)/2
// //       camera.position.y = aeroplane.y

//   drawSprites()
 
// }
// //   textSize(20)
// //   text("Aeroplane Speed:"+speed,displayWidth-600,100)


// // function Story(){
// //   background(intro)
// // story.hide()
// //  keys.hide()
// // //  play.hide()

// //  stroke(20)
// //  textSize(40)
// //  fill("yellow")
// //  textFont("Georgia")
// //  text("Dear Pilot,",10,30)
// //  text("This is to inform you that your application have been appcepted by",50,100)
// //  text("our company and your flight from Whales to 20,000 kilometers have",50,170)
// //  text("been accepted. You are requested to visit our company in Whales.",50,240)
// //  text("From,",10,310)
// //  text("The Company Owner,KETAN",10,380)
// // // gameState = 1;
// // }

// // // function Keys(){
// // // story.hide()
// // // keys.hide()
// // // play.hide()
// // // text("")
// // // gameState = 1
// // // }

// function Play(){
// console.log("working");

//   background(backImg);

//  // bg = createSprite(700,400)
//   console.log(bg);
//  // bg.addImage(backImg)
//  // bg.scale = 2.4;
//  // aeroplane = createSprite(600,470,50,50);
// //aeroplane.addImage(aeroplaneImg)
// //aeroplane.debug = true
// //aeroplane.setCollider("rectangle", 0,0, 10,10)
//   if(gameState === "serve"){
//     //background(0)
//    // fill("yellow");
//    // textSize(25); 
//   //  text("Press space to start", 400, 200)
// //console.log(text);
//   // aeroplane.collide(ground)
//     aeroplane.velocityX= 0;
//     aeroplane.velocityY= 0;
//     bg.velocityX =0
//     //   if(bg.x<0){
//     //  bg.x = 1500
//     //  }
//     if(keyDown("space")){
//       gameState = "play";
//      }
//      if(gameState === "play"){
//       bg.velocityX =-5
//       if(bg.x<0){
//          bg.x =1500
//           }
    
//       if(keyCode===LEFT_ARROW){
//         aeroplane.velocityX = -2;
//        }
//        if(keyCode===RIGHT_ARROW){
//         aeroplane.velocityX = 2;
//        }
//        if(keyCode===DOWN_ARROW){
//            aeroplane.velocityY = 2;
//           }
     
//           if(keyCode===UP_ARROW){
//            aeroplane.velocityY =- 2;
//           }
    
         
//         }


// }
// }
// //   story.hide()
// //   keys.hide()
// //   play.hide()

// //   aeroplane.visible = true
// // }

// // 
// // if(keyCode===32){
// //   if(speed===400){
// //     aeroplane.velocityY = -2;
// //   }
// //   else{
// //     aeroplane.destroy()
// //   }
// // }

// //
// // }

// // function MENU(){
// //   Menu.hide()
// // clear();
// //   story = createButton("STORY")
// // story.position(400,100)
// // story.mousePressed(Story)

// // keys = createButton("KEYS")
// // keys.position(400,200)
// // keys.mousePressed(Keys)

// // play = createButton("PLAY")
// // play.position(400,300)
// // play.mousePressed(Play)
