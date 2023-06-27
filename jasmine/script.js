/*window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {
        const myGame = new Game();
        myGame.init();
    }
};
*/

window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    }; 
    document.getElementById("instructions-button").onclick = () => {
        instructions.style.display = "block"; 
        IntroText.style.display ="none";
    }; 
    
}
