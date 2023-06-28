class MagicMike {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 300 + 50);
      this.top = 700;
      this.width = 100;
      this.height = 100;
      this.element = document.createElement("img");
      this.element.src="./images/avatarmagicmike.png"; 
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.gameScreen.appendChild(this.element);
    }
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
 
    move() {
        setInterval(() => {
          const randomDirection = Math.floor(Math.random() * 4); // Randomly choose a direction (0-3)
    
          // Move MagicMike based on the chosen direction
          switch (randomDirection) {
            case 0: // Move up
              this.top -= 6;
              break;
            case 1: // Move down
              this.top += 6;
              break;
            case 2: // Move left
              this.left -= 6;
              break;
            case 3: // Move right
              this.left += 6;
              break;
            default:
              break;
          }
    
          this.updatePosition();
        }, 1000);
      }
    }
