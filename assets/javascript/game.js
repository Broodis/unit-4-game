$(document).ready(function () {


	var heroNotChosenYet = true;
	var countDefeated = 0;

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
			$(".char1").appendTo(".yourChar").css({'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && chewyCount === 0) {
			$(this).addClass("defender");
			maceCount++;
			trooperCount++;
			princessCount++;
			gameNotReady = false;
			$(".char1").appendTo(".yourOpponent").css({'color':'black',});
			$("#instructions").text("Click the ATTACK button");
		}
	});

	$(".char2").on("click", function () {
		if (heroNotChosenYet === true) {
			maceCount++;
			heroNotChosenYet = false;
			$(".char2").appendTo(".yourChar").css({'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && maceCount === 0) {
			chewyCount++;
			trooperCount++;
			princessCount++;
			gameNotReady = false;
			$(".char2").appendTo(".yourOpponent").css({'color':'black',});
			$("#instructions").text("Click the ATTACK button");
		}
	});

	$(".char3").on("click", function () {
		if (heroNotChosenYet === true) {
			trooperCount++;
			heroNotChosenYet = false;
			$(".char3").appendTo(".yourChar").css({'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && trooperCount === 0) {
			chewyCount++;
			maceCount++;
			princessCount++;
			gameNotReady = false;
			$(".char3").appendTo(".yourOpponent").css({'color':'black',});
			$("#instructions").text("Click the ATTACK button");
		}
	});

	$(".char4").on("click", function () {
		if (heroNotChosenYet === true) {
			princessCount++;
			heroNotChosenYet = false;
			$(".char4").appendTo(".yourChar").css({'color':'black',});
			$("#instructions").text("Choose an enemy to attack!");
		}
		else if (heroNotChosenYet === false && princessCount === 0) {
			chewyCount++;
			maceCount++;
			trooperCount++;
			gameNotReady = false;
			$(".char4").appendTo(".yourOpponent").css({'color':'black',});
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
			$(".attacker h4").text($(".attacker").attr("health"));
		}
	})
});