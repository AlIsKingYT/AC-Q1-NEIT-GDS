// console.log("Hello World")

// var canvas = document.querySelector("canvas")
// var ctx = canvas.getContext("2d")

// var person ={
//     first: "Alex",
//     last: "Crespo",
// firstAndLastName: function(){
// alert("My name is: "+ this.first + this.last)

//     }
// }
// person.firstAndLastName
// console.log(person.first)

// var square ={
//     x: 500,
//     y: 500,
//     width: 100,
//     height: 100,
//     color: "red",

// }

// var copy = square;
// copy.x = 200;
// //create square idimg keyvaluer
// ctx.fillStyle = square.color
// ctx.fillRect(square.x,square.y,square.width,square.height)

// //for loops

// for(var i = 0; i < 20; i++)
// {
//     console.log(4 * i)
// }

// for(var s= 0; s < 5; s++ )
   
// {
//     ctx.fillStyle = "green"
//     ctx.fillRect(s * 5  * 5 * 10, s, 20, 20)
// }

// //ARRAYS!

// var colors = []
// colors[0] = "blue"
// colors[1] = "orange"
// colors[2] = "red"


// var person =["Alex", "Josh", "Mike"]
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])

// var twodArray = [
//     [1,1,1,1,1,1,1,1],
//     [2,2,2,2,2,2,2,2],
//     [3,3,3,3,3,3,3,3],
//     [4,4,4,4,4,4,4,4],
//     ]

//     for(var x = 0; x < twodArray.length; x++)
//     {
//         //accessing the value within the array
//         console.log(twodArray[x][4])
//     }

//     //double for loop

//     for(var xCord = 0; xCord<twodArray.length;xCord++)
//     {
//         for(var yCord = 0; yCord < 8; yCord++)
//           {console.log(twodArray[xCord][yCord])
//           }
//     }
//     //While Loop!
//     var whileInt = 0;
//     while(whileInt < 20 * 4)
//     {
//         whileInt++;
//         console.log(whileInt)
//         }
    var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
   var timer = setInterval(main, 1000/60)  
   var x = 50;
   var y = canvas.height / 2;
   var w = 100;
   var h = 100;
   var moveAmountX = 10;
   var moveAmountY = 10;

   var randomNumber = Math.round(Math.random()*5)
   //var.floor = always rounds down
   var lowRandomNumber = Math.floor(Math.random()*5)
   console.log(randomNumber)
   console.log(lowRandomNumber)

   var paulTheBox = new gameObject(canvas)
   paulTheBox.width = 50;
   paulTheBox.height = 50;
   paulTheBox.x = canvas.width / 2;
   paulTheBox.y = canvas.height / 2;
    paulTheBox.color = "orange"

   var jimmyTheBox = new gameObject(canvas);
   jimmyTheBox.width = 100;
   jimmyTheBox.height = 100;
   jimmyTheBox.x = 72;
   jimmyTheBox.y = 82;


//main function
function main()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    jimmyTheBox.renderRect()
    paulTheBox.renderRect()
    x += moveAmountX;
    y += moveAmountY;
    jimmyTheBox.move()
    paulTheBox.move()
    ctx.fillStyle = "olive"

    ctx.beginPath();
    ctx.arc(x,y,50,0,2 * Math.PI);
    ctx.fill();

    //bounce x
    if (x > canvas.width - 50)
    {
        moveAmountX *= -1
    }

    if(x < 50){
        moveAmountX *= -1
    }

    if (y < 50)
    {
        moveAmountY *= -1
    }
    
    if(y > canvas.height - 50)
    {
        moveAmountY *= -1
    }
}