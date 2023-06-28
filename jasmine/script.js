window.addEventListener('load', () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game
  
  function startGame() {
    console.log("start game")
    game = new Game()
    game.start()
    document.addEventListener('keydown', event => {
      const key = event.key
      const possibleKeyStrokes = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
      if (possibleKeyStrokes.includes(key)) {
        switch (key) {
          case 'ArrowLeft':
        }
      }
    })
  }  

  startButton.addEventListener("click", function () {
    startGame();
  }); 
})
