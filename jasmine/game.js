class Game { 
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player(this.gameScreen);
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.animated; 
        this.gameIsOver = false;    
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`; 
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block"; 

        this.gameLoop();
    }

    gameLoop() {
        this.update()
        console.log("this.animateId"); 
        if (this.animated % 200 === 0) {
            this.obstacles.push(new this.obstacles(this.gameScreen))
        }
        if (this.gameIsOver) {
            this.endGame()
        } else {
            this.animatedId = requestAnimationFrame(() => this.gameLoop())
        }
    }

    update() {
        this.player.move()
        const obstaclesToKeep = []
        this.obstacles.forEach(obstacle => {
          obstacle.move()
          if (this.player.didCollide(obstacle)) {
            obstacle.element.remove()
            this.lives -= 1
          } else if (obstacle.top > this.gameScreen.offsetHeight) {
            this.score += 1
          } else {
            obstaclesToKeep.push(obstacle)
          }
        })
        this.obstacles = obstaclesToKeep
    
        if (this.lives <= 0) {
          this.isGameOver = true
        }
      }

      endGame() {
        this.player.element.remove()
        this.obstacles.forEach(obstacle => obstacle.element.remove())
    
        // Hide game screen
        this.gameScreen.style.display = 'none'
        // Show end game screen
        this.gameEndScreen.style.display = 'block'

window.requestAnimationFrame(() => this.gameLoop()); 

update() {
    console.log("in the update"); 
}
}
// 
