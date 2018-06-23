$(document).ready(function () {

	var heroNotChosenYet = true;
	var opponentsDefeated = 0;
	var chewyCount = 0;
	var maceCount = 0;
	var trooperCount = 0;
	var princessCount = 0;
	var gameNotReady = true;
// Character Selection

	$(".char1").on("click", function () {
		if (heroNotChosenYet === true) {
			$(this).addClass("attacker");
			chewyCount++;
			heroNotChosenYet = false;
			$(".char1").appendTo(".yourChar").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && chewyCount === 0) {
			$(this).addClass("defender");
			maceCount++;
			trooperCount++;
			princessCount++;
			gameNotReady = false;
			$(".char1").appendTo(".yourOpponent").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Click the ATTACK button");
		}
	});

	$(".char2").on("click", function () {
		if (heroNotChosenYet === true) {
			$(this).addClass("attacker");
			maceCount++;
			heroNotChosenYet = false;
			$(".char2").appendTo(".yourChar").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && maceCount === 0) {
			$(this).addClass("defender");
			chewyCount++;
			trooperCount++;
			princessCount++;
			gameNotReady = false;
			$(".char2").appendTo(".yourOpponent").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Click the ATTACK button");
		}
	});

	$(".char3").on("click", function () {
		if (heroNotChosenYet === true) {
			$(this).addClass("attacker");
			trooperCount++;
			heroNotChosenYet = false;
			$(".char3").appendTo(".yourChar").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && trooperCount === 0) {
			$(this).addClass("defender");
			chewyCount++;
			maceCount++;
			princessCount++;
			gameNotReady = false;
			$(".char3").appendTo(".yourOpponent").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Click the ATTACK button");
		}
	});

	$(".char4").on("click", function () {
		if (heroNotChosenYet === true) {
			$(this).addClass("attacker");
			princessCount++;
			heroNotChosenYet = false;
			$(".char4").appendTo(".yourChar").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && princessCount === 0) {
			$(this).addClass("defender");
			chewyCount++;
			maceCount++;
			trooperCount++;
			gameNotReady = false;
			$(".char4").appendTo(".yourOpponent").css({'width':'35%', 'margin':'auto', 'color':'black',});
			$("#instructions").text("Click the ATTACK button");
		}
	});

	$(".attackButton").on("click", function() {
		if (gameNotReady === false) {
			var defenderName = $(".defender").attr("characterName");
			var defenderHealth = $(".defender").attr("health");
			var defenderDamage = $(".defender").attr("counterAttack");
			var attackerHealth = $(".attacker").attr("health");
			var attackerDamage = $(".attacker").attr("attack");
			var defenderHealthAfterClick = defenderHealth - attackerDamage;
			var attackerHealthAfterClick = attackerHealth - defenderDamage;
			
			var newAttackerHealth = $(".attacker").attr("health", attackerHealthAfterClick);
			var newDefenderHealth = $(".defender").attr("health", defenderHealthAfterClick);
			
			$(".attacker h4").text($(".attacker").attr("health"));
			$(".defender h4").text($(".defender").attr("health"));
			$("#attackAlert").text("You attacked " + defenderName + " for " + attackerDamage + " damage and took " + defenderDamage + " damage from " + defenderName).css({'width':'35%', 'margin':'auto', 'color':'black',});

			attackerDamage = attackerDamage * 2;
			var newAttackerDamage = $('.attacker').attr('attack', attackerDamage);

			if (attackerHealthAfterClick <= 0) {
				$("#attackAlert").text("You have been defeated...Reset the game and try again!").css({'margin':'auto', 'color':'black',});
				$(".attacker").remove();
				this.disabled = true;
			}
			else if (defenderHealthAfterClick <= 0) {

				if ($(".defender.char1").attr("health") <= 0) {
					$("#attackAlert").text("You have defeated Chewbacca, choose another character to attack.").css({'margin':'auto', 'color':'black',});
					$(".defender.char1").remove();
					console.log(true);
					winduCount--;
					princessCount--;
					trooperCount--;
					opponentsDefeated++;
				}
				else if ($(".defender.char2").attr("health") <= 0) {
					$("#attackAlert").text("You have defeated Mace Windu, choose another character to attack.").css({'margin':'auto', 'color':'black',});
					$(".defender.char2").remove();
					chewyCount--;
					princessCount--;
					trooperCount--;
					opponentsDefeated++;
				}
				else if ($(".defender.char3").attr("health") <= 0) {
					$("#attackAlert").text("You have defeated Storm Trooper, choose another character to attack.").css({'margin':'auto', 'color':'black',});
					$(".defender.char3").remove();
					chewyCount--;
					princessCount--;
					maceCount--;
					opponentsDefeated++;
				}
				else if ($(".defender.char4").attr("health") <= 0) {
					$("#attackAlert").text("You have defeated Princess Leia, choose another character to attack.").css({'margin':'auto', 'color':'black',});
					$(".defender.char4").remove();
					chewyCount--;
					maceCount--;
					trooperCount--;
					opponentsDefeated++;
				}
			}
		}
	})
});