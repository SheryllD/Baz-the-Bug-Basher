# Baz-the-Bug-Basher
My first DEV game

# Description
Join Baz the Bug Basher in a thrilling adventure at Tempelhofer Feld, Berlin, where a peaceful hot Sunday barbecue in the month June turns into a battle. As the sun sets, an unexpected threat emerges – a horde of mischievous June Bugs! Play as Baz the Bug Basher and embark on a mission to defend and face off these insects. Armed with only your bare hands, you must protect your companions, Gabs, Magic Mike, Sherry and Ollie. Your mission is clear: ensure the survival of your companions. Defeat the June bugs and emerge as the ultimate victor. But be warned, if any of your friends perish, the game is lost. Can you rise to the challenge and save the day with your bare-handed heroics? The destiny of your friends rests in your hands! Become their fearless savior and eliminate the clumsy bugs.

# Main Functionalities 
**Move Baz around using the arrow keys on your keyboard**
- Arrow left - Move Baz to the left 
- Arrow right - Move Baz to the right 
- Arrow up - Move Baz up
- Arrow down - Move Baz down 
- Press the Space bar - to kill the June Bug

# MVP
- Baz the bug Basher will move across the screen.
- June bugs will appear randomly from the front of the screen.
- The player's objective is to protect all of their friends.
- The player will start with 3 lives, losing one each time they collide with a June bug until - - it's game over.
- Backlog:

# Backlog Functionalities 
- Implement a scoreboard to display the player's remaining lives.
- Update the remaining lives display each time the player collides with an enemy, decreasing - - from 3 to 0.
- Enable game restart functionality after winning or losing.

# Technologies Used 
- HTML
- CSS
- JavaScript 
- DOM Manipulation
- JS Canvas
- JS Classes
- Local Storage 
- JS Audio() and JS Image ()
- Version control tool (Git/Github)

# States 
- Start Screen
- Game Screen 
- Game over Screen 

## JS Folder & Tasks

Project tasks:
- Craft a compelling storyline for the game.
- Sketch out the minimum viable product (MVP) features.
- Create a README.md file to provide instructions and information about the game.
- Design and create avatar graphics for the game.
- Find an appropriate background image for the game.
- Source suitable music and sound effects.
- Build the HTML structure for the game.
- Style the game using CSS.
- Implement the necessary functionalities in Script.js.
- Develop the Game.js file to handle game logic.
- Create the Player.js file to manage player-related operations.
- Implement the obstacles.js file for managing the behavior of obstacles.
- Create the MagicMike.js, Gabs.js, Ollie.js, and Sherry.js files for controlling each avatar's movement.
- Enable player movement within the game.
- Implement game restart functionality.
- Thoroughly test the game deployment for any issues.

# Script.js
- Define a function for game instructions.
- Implement functions for starting the game and killing insects.

## Game.js 
- Create a Game class.
- Include methods for starting the game, running the game loop, updating the game state, handling win conditions, ending the game, and resetting the game.

## Player.js
- Develop a Player class.
- Set up the constructor to initialize the player's position on the game screen.
- Implement methods for player movement, updating the player's position, and detecting collisions.

## JuneBugs.js 
- Create an Obstacle class specifically for the June bugs.
- Implement methods for updating the June bug's position and movement.

## Ollie.js, Sherry.js, Gabs.js, MagicMike.js:
- Create classes for each avatar (Ollie, Sherry, Gabs, MagicMike).
- Include methods for updating the avatar's position and movement.
