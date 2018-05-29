// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // create enemy
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 40
    this.speed = speed;
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    this.x += 2;
    if(this.x > 510){
        this.x = -100;
    }
};

// Draw the enemy on the screen on start up
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// create player class
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 425;
    this.height = 50;
    this.width = 40;
}

// show alert of winning if user gets to water
Player.prototype.update = function() {
    // reset player if touching enemy
    for(i = 0; i < allEnemies.length; i++){
        if (allEnemies[i].x < player.x + player.width &&
            allEnemies[i].x + allEnemies[i].width > player.x &&
            allEnemies[i].y < player.y + player.height &&
            allEnemies[i].height + allEnemies[i].y > player.y) {
            // place player back at start
            player.x = 200;
            player.y = 400;
        }
    }

    // if player reaches water reset player and show alert
    if(player.y == -25){
        alert("you won!!!!")
        // place player back at start
        player.x = 200;
        player.y = 400;
    }
}

// draw player on screen on start up
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// handle user input and move player accordingly
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

// creating enemys to show on screen
let enemy1 = new Enemy(-100,200,100)
let enemy2 = new Enemy(250,100,50)
let enemy3 = new Enemy(50,50,50)
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
let player = new Player();

// This listens for key presses and sends the keys to the
// Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
