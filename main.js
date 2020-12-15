canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car1width=120;
var car1height=70;
var car_1image= "car1.png";
var car1_x=10;
var car1_y=10;

var car2width=120;
var car2height=70;
var car_2image= "car2.png";
var car2_x=10;
var car2_y=100;

backgroundImage="racing.gif";


function add(){
    backgroundImageTag=new Image();
    backgroundImageTag.onload=uploadBackground;
backgroundImageTag.src=backgroundImage;

car_1imageTag=new Image();
car_1imageTag.onload=uploadCar1;
car_1imageTag.src=car_1image;

car_2imageTag=new Image();
car_2imageTag.onload=uploadCar2;
car_2imageTag.src=car_2image;


}
function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0,0,canvas.width,canvas.height);

}
function uploadCar1(){
    ctx.drawImage(car_1imageTag, car1_x, car1_y, car1width,  car1height);
    

}
function uploadCar2(){
    ctx.drawImage(car_2imageTag, car2_x, car2_y, car2width,  car2height);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed=e.keyCode;
    if ( keyPressed=='38'){
        console.log("up");
        car1_up();
        

    }
    if ( keyPressed=='40'){
        console.log("down");
        car1_down();
        
        
    }    if ( keyPressed=='37'){
        console.log("left");
        car1_left();
        
        
    }    if ( keyPressed=='39'){
        console.log("right");
        car1_right();
    }
     if ( keyPressed=='72'){
        console.log("up");
        car2_up()
        

    }
    if ( keyPressed=='83'){
        console.log("down");
        car2_down()
        
        
    }    if ( keyPressed=='65'){
        console.log("left");
        car2_left()
        
        
    }    if ( keyPressed=='68'){
        console.log("right");
        car2_right()
        
        if (car1_x > 700){
            console.log("car1 won")
            document.getElementById('game_status').innerHTML = "Car 1 won!"
        }

        
    }
    function car1_up(){
        if (car1_y>=0){
            car1_y=car1_y-10;
            console.log("when Up Arrow Is Pressed, X= " +car1_y +" & Y= " +car1_y);
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
        
        }
        function car1_down(){
           if (car1_y<=500){
               car1_y=car1_y+10;
               console.log("when down arrow is pressed, X=" +car1_x+ "&Y= " +car1_y);
               uploadBackground();
               uploadCar1();
            uploadCar2();
               
           } 
        }
        function car1_left(){
            if (car1_x>=0){
                car1_x=car1_x-10;
                console.log("when left arrow is pressed, Y=" +car1_x+ "& X="+car1_y)
                uploadBackground();
                uploadCar1();
            uploadCar2();
            }
        }
        function car1_right(){
            if (car1_x<=700){
        car1_x=car1_x+10;
        console.log("when right arrow is pressed, X=" +car1_x+ "& X=" +car1_y)
        uploadBackground();
        
            }
        }}
        function car2_down(){
            if (car2_y<=500){
                car2_y=car2_y+10;
                console.log("when down arrow is pressed, X=" +car2_x+ "&Y= " +car2_y);
                uploadBackground();
                uploadCar1();
             uploadCar2();
                
            } 
         }
         function car2_left(){
             if (car_2x>=0){
                 car2_x=car2_x-10;
                 console.log("when left arrow is pressed, X=" +car2_x+ "& Y="+car2_y)
                 uploadBackground();
                 uploadCar1();
             uploadCar2();
             }
         }
         function car2_right(){
             if (car2_x<=700){
         car2_x=car2_x+10;
         console.log("when right arrow is pressed, X=" +car2_x+ "& X=" +car2_y)
         uploadBackground();
         uploadCar1();
         uploadCar2();
             }
         }
