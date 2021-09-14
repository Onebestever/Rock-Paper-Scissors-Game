var botScore =0
var playerScore=0;

document.querySelector("#rock").addEventListener('click', playerThrowsRock);
document.querySelector("#paper").addEventListener('click', playerThrowsPaper);
document.querySelector("#scissors").addEventListener('click', playerThrowsScissors);

function playerThrowsRock(){
	const botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	let botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	const botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
	const randomNumber=Math.ceil(Math.random()*3);

	let botsWeapon="rock";
	if(randomNumber===1){
		botsWeapon="scissors";
	}
	else if(randomNumber===2){
		botsWeapon="paper";
		
		console.log("randomn number", randomNumber)
		console.log("bots weapon", botsWeapon)
		return botsWeapon;

	}}
	function checkWhoWon(botsWeapon,playersWeapon){
			if(botsWeapon==playersWeapon){
				displayCompleteMessage("There was tie");// tie scenario

	}
	else if(
		(botsWeapon==="scissors" && playersWeapon==="paper") ||
		(botsWeapon==="paper" && playersWeapon==="rock") ||
		(botsWeapon==="rock" && playersWeapon==="scissors") // bot wins scenario
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore(); // player wins scenarios
	}
}
function increaseBotScore(){
	botScore+=1;
	// botScore = botScore + 1 same thing as above
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Winner Winner Chicken Dinner");	

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

	