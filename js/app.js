// Enemies our player must avoid
var Enemy = function(speed, x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y; // 50 150 230
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // this ensures the bugs continuously travel across the screen
    if (this.x < 505) {
        this.dx = this.speed * dt;
        this.x += this.dx;
    } else {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 100;
    this.y = 380;
    this.speed = 0;
    this.inBound = true;
};

Player.prototype.update = function(dt) {
    // update player location in response to keypress
    console.log(`${this.x}, ${this.y}`);
    console.log(`${this.inBound}`);
    // check to ensure that the player's position is within bounds
    if (this.x > 410 || this.x < -10 || this.y > 420 || this.y < -40) {
        this.inBound = false;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    // if player is within bouns update handle input normally
    if (this.inBound) {
        switch (direction) {
            case 'left':
                this.x -= 20;
                break;
            case 'right':
                this.x += 20;
                break;
            case 'up':
                this.y -= 20;
                break;
            case 'down':
                this.y += 20;
                break;
    
        }
    // if the player is out of bounds, reset the player location  
    } else {
        this.x = 100;
        this.y = 300;
        this.inBound = true;
    }
    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy(100, 0, 50);
const enemy2 = new Enemy(80, 0, 150);
const enemy3 = new Enemy(60, 0, 230);
const allEnemies = [enemy1, enemy2, enemy3];
const player = new Player();


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
