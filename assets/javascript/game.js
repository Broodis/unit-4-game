// Global Variables  
var attack;
var defend;
var attacker;
var attackerHP;
var attackerAP;
var attackerCAP;
var defender;
var defenderHP;
var defenderAP;
var defenderCAP;
var characterChosen = true;
var chewyCount = 0;
var maceCount = 0;
var trooperCount = 0;
var princessCount = 0;
var characters = { 

	Chewy: {
			name: "Chewbacca",
			visual: 'assets/images/image1.png',
			healthPoints: 180,
			attackPower: 12,
			counterAttackPower: 20,
			},

	Mace: {
			name: "Mace Windu",
			visual: 'assets/images/image2.png',
			healthPoints: 140,
			attackPower: 10,
			counterAttackPower: 35,
			},

	Trooper: { 
			name: "Storm Trooper",
			visual: 'assets/images/image3.png',
			healthPoints: 150,
			attackPower: 16,
			counterAttackPower: 5,
			},

	Princess: { 
			name: "Princess Leia",
			visual: 'assets/images/image4.png',
			healthPoints: 200,
			attackPower: 14,
			counterAttackPower: 10,
            }
};

// Character Selection

// Disable button
var disableBtn = true;
// If Chewbacca is chosen, move other characters to the "Defenders" section
$('.char1').on('click',function(){
    if(charChosen === true)
    {
        chewyCount++;
        // Changes to false so Main character wont move to enemies area
        char1Count = false;
        // Adds the characters that were not clicked to the enemies section
        $('.char2').appendTo('.battlefieldCol');

        $('.char3').appendTo('.battlefieldCol');

        $('.char4').appendTo('.battlefieldCol');
    }
    else if(char1Count === false && chewyCount === 0)
    {
        //Enables attack button after defender is selected
        maceCount++;
        trooperCount++;
        princessCount++;
        disableBtn = false;
        $('.char1').appendTo('.yourOpponentContainer');
    }
});