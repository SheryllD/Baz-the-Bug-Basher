class Gabs {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 700 + 60);
      this.top = 800;
      this.width = 100;
      this.height = 100;
      this.element = document.createElement("img");
      this.element.src="./images/avatar.gabs.png"; 
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
      this.top += 1;
      this.updatePosition();
    }
  }