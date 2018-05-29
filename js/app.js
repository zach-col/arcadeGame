// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 2;
    if(this.x > 510){
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 425;
}

// show alert of winning if user gets to water
Player.prototype.update = function() {
    if(enemy1.x === player.x){
        console.log("same as bug")
    }
    if(player.y == -25){
        alert("you won!!!!")
        // place player back at start
        player.x = 200;
        player.y = 400;
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyPressed) {
    // move player based on key click
    if(keyPressed == "left"){
        // disable button if going out of bounds
        if(player.x == 25){
            return
        }
        player.x -= 25;
    } else if(keyPressed == "right"){
        // disable button if going out of bounds
        if(player.x == 375){
            return
        }
        player.x += 25;
    } else if(keyPressed == "up"){
        player.y -= 25;
    } else if(keyPressed == "down"){
        // disable button if going out of bounds
        if(player.y == 425){
            return
        }
        player.y += 25
    }
}

let enemy1 = new Enemy(-100,200,100)
let enemy2 = new Enemy(250,100,70)
let enemy3 = new Enemy(50,50,60)
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
