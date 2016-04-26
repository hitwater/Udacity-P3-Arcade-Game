// Enemies our player must avoid
var Enemy = function(x,y,vel) {
    // Initial positions and velocities for enemies
    this.x=x;
    this.y=y;
    this.vel=vel;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt,player) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // check Collision between enmey and player
    this.checkCollision(player);
    // assign the new initial positions
    // when an enemy hits the right boundary
    if (this.x>=550){
        this.x=-150 ;
    }
    else{
         this.x=this.vel*dt+this.x;
    }
};

// Check both the enemy and player's position to decide if they collapse
Enemy.prototype.checkCollision = function(player) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // check collision for 2D rectangle shape
    if (player.x < this.x + 75 &&
        player.x + 65 > this.x &&
        player.y < this.y + 50 &&
        70 + player.y > this.y) {
    // reset the player's position
        player.reset();
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
    // Initial positions for player
    this.x=200;
    this.y=400;
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};
// Update the player's position, required method for game
Player.prototype.update = function() {
    if (this.x<-5){
        player.x=-5;
    }else if(this.x>400){
        player.x=400;
    }
    else if (this.y>450){
        player.y=400;
    }else if(this.y<-14){
        player.reset();
    }
    else{
           this.x=this.x;
           this.y=this.y;
    };
};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Control the player's position with arrow keys on the screen
Player.prototype.handleInput = function(key) {
    if (key=='up'){
        this.y=this.y-83*1;
    } else if(key=='down'){
       this.y=this.y+83*1;
    } else if(key=='left'){
       this.x=this.x-101*1;
    } else if(key=='right'){
       this.x=this.x+101*1;
    };
// Reset the player's position
Player.prototype.reset = function() {
           this.x=200;
           this.y=400;
    };
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var bug1=new Enemy(-150,60,Math.random() * (500-100) + 100);
var bug2=new Enemy(-150,143,Math.random() * (500-100) + 160);
var bug3=new Enemy(-150,226,Math.random() * (500-100) + 130);
allEnemies=[bug1,bug2,bug3];
var player=new Player();

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
