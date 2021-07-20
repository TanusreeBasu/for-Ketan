class Game{
    constructor(){

    } 
    keys(){
        if(keyDown("right")){
            aeroplane.velocityX= 4;
            console.log("working");
          }
          } 
    
    
    start(){
        background(backImg)
        if(gameState===0){
        
            intro = new Intro();
            intro.display();
           
       }
if(gameState ===1){
    text("Press Space to Start",400,200); 
aeroplane = createSprite(600,470,50,50); 
 aeroplane.addImage(aeroplaneImg);

}



    //        
    //        if(keyCode===DOWN_ARROW){
    //            aeroplane.velocityY = 2;
    //           }
         
    //           if(keyCode===UP_ARROW){
    //            aeroplane.velocityY =- 2;
    //           }
       
    }




play(){
   
  //background(backImg)
    // if(gameState ===1){
    //     if(keyDown(RIGHT_ARROW)){
    //         console.log("move right")
    //            aeroplane.velocityX=4;
    //        }
    //     }
    // //    
    // aeroplane.addImage(aeroplaneImg)

   
        // if(keyIsDown===LEFT_ARROW){
        //     console.log("working")
        //      aeroplane.velocityX = -2;
        //        }
           
    
   
  //  aeroplane = createSprite(600,470,50,50);  
   
drawSprites()

}

}



