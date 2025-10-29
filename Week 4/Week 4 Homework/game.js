var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)

/*-------------INSTRUCTION--------------
Create variable called score to store amount of "pickups" collected
---------------------------------------*/
var score = 0;

/*--------------avatar------------*/
var avatar = new GameObject();
avatar.color = `#ff0099`;
avatar.vx = 2;
avatar.vy = 2;

/*--------------testPickup------------*/
var testPickup = new GameObject();
testPickup.x = 100;
testPickup.y = 100;
testPickup.w = 18;
testPickup.h = 18;
testPickup.color = `#2244ff`;

/*--------------powerups------------*/
var amt = 50;
var pickups = [];

for (var i = 0; i < amt; i++) {
    pickups[i] = new GameObject();
    pickups[i].color = `#ffff00`;
    pickups[i].w = 18;
    pickups[i].h = 18;
    pickups[i].x = rand(0, c.width);
    pickups[i].y = rand(0, c.height);

    while (pickups[i].overlaps(avatar)) {
        if (pickups[i].x < avatar.x) {
            pickups[i].x -= 1;
        }
        if (pickups[i].x >= avatar.x) {
            pickups[i].x++;
        }
    }
}

/*--------------main()------------------------*/
function main() {
    //erase screen
    ctx.clearRect(0, 0, c.width, c.height);

    //move avatar
    if (d == true) { avatar.x += avatar.vx; }
    if (a == true) { avatar.x -= avatar.vx; }
    if (w == true) { avatar.y -= avatar.vy; }
    if (s == true) { avatar.y += avatar.vy; }

    //keep avatar on screen
    if (avatar.x < 0 + avatar.w / 2) { avatar.x = 0 + avatar.w / 2; }
    if (avatar.x > c.width - avatar.w / 2) { avatar.x = c.width - avatar.w / 2; }
    if (avatar.y < 0 + avatar.h / 2) { avatar.y = 0 + avatar.h / 2; }
    if (avatar.y > c.height - avatar.h / 2) { avatar.y = c.height - avatar.h / 2; }

    //testPickup collision
    if (testPickup.overlaps(avatar)) {
        testPickup.x = 1000;
        avatar.color = testPickup.color;
        //increase the score by one
        score++;
    }

    //loop through all pickups
    for (var i = 0; i < pickups.length; i++) {
        if (pickups[i].overlaps(avatar)) {
            //move collected pickup off screen
            pickups[i].x = 1000;
            pickups[i].y = 1000;
            //increase score
            score++;
        }
        pickups[i].render();
    }

    testPickup.render();
    avatar.render();

    /*--------------text----------------*/
    ctx.textAlign = `center`;
    ctx.font = `32px Arial`;
    ctx.fillStyle = `black`;
    ctx.fillText(`Score: ` + score, c.width / 2, 40);

/*--------------text----------------*/
ctx.textAlign = `center`;
ctx.font = `32px Arial`;
ctx.fillStyle = `blanchedalmond`;
ctx.fillText(`Score: ` + score, c.width / 2, 40);

// Display "YOU WIN!" 
if (score >= amt + 1) { 
    ctx.font = `64px Arial`;
    ctx.fillStyle = `goldenrod`;
    ctx.fillText(`YOU WIN!`, c.width / 2, c.height / 2);
}




}

//random number generator
function rand(_low, _high) {
    return Math.random() * (_high - _low) + _low;
}
// change avatar color when collecting pickups
if (pickups[i].overlaps(avatar)) {
    pickups[i].x = 1000;
    pickups[i].y = 1000;
    avatar.color = pickups[i].color;
    score++;
}

