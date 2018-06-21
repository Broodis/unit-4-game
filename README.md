# unit-4-game

PSEUDO CODE:

1. Generate a list of characters that you can choose between to start the game.
    - Once you choose your character, that character is set as your character for the rest of the game, and the rest of the characters are returned to the "Enemies to attack" section.

2. In the "Enemies to attack" section each character from above (minus the character you selected) is available for selection. Selection of a character will move that character into the "Fighting Section"

3. The "Fighting Section" will be comprised of all of the available enemies + your character.

4. Press the "attack" button to chip away at your oponent's health.
    - Your character will deal an increasing amount of damage as time goes on, starting with a low number...
    - Each defender deals the same amount of damage with every attack
    - The attack button will change each character's health until one of the character's health < or = 0. 
    - If the user's chosen character reaches 0 health then the game is over, else if the opponent's health reaches < or = 0, the User wins that match and may select the next opponent.

5. Once all enemies are defeated, User wins the game!








*** Create onClick events first, then create functions after.
$("#stop").on("click", function);