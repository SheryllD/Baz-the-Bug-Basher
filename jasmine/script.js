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
            game.player.directionX = -10
            break
            case 'ArrowUp':
              game.player.directiony = -10
              break
              case 'ArrowRight':
                game.player.directionX = 10
                break
                case 'ArrowDown':
                  game.player.directionX = 10
                  break
        }
        console.log(game, player, dirextionX, game.player.directiony)
      }
    })
    document.addEventListener('keyup', event => {
      const key = event.key
      const possibleKeystrokes = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Space']

      if (possibleKeystrokes.includes(key)) {
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case 'ArrowLeft':
            game.player.directionX = -1;
            game.player.directionY = 0;
            break;
          case 'ArrowRight':
            game.player.directionX = 1;
            game.player.directionY = 0;
            break;
          case 'ArrowUp':
            game.player.directionX = 0;
            game.player.directionY = -1;
            break;
          case 'ArrowDown':
            game.player.directionX = 0;
            game.player.directionY = 1;
            break; 
            case 'Space':
              killInsect(); 
              break;
        }
      }
    });
  } 
  function killInsect() {
    console.log("Insect killed!");
  }
  startButton.addEventListener("click", function () {
    startGame();
  });
});
