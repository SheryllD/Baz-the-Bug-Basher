class Game { 
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameContainer = document.getElementById("game-container");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScreen = document.getElementById("game-screen");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(this.gameScreen);
   
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.animatedId 
    this.IsGameOver = false;
    this.intervalId = null;
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameEndScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block"; 
    this.gameLoop();
  }

  gameLoop() {
    this.update()
    console.log(this.animatedId)
    if (this.animatedId % 200 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen))
    }
    if (this.isGameOver) {
      this.endGame()
    }
    else {
      this.animatedId = requestAnimationFrame(() => this.gameLoop())
    }
  }

  update(){
    this.player.move()
    const obstaclesToKeep = []
    this.obstacles.forEach(obstacle => {
      obstacle.move()
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove()
        this.lives -= 1
      }
      else if (obstacle.top > this.gameScreen.offsetHeight) {
        this.score += 1
      }
      else {
        obstaclesToKeep.push(obstacle)
      }
    })
    this.obstacles = obstaclesToKeep

    if(this.lives <= 0) {
      this.isGameOver = true
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());
    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}