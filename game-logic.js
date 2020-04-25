var currentOrange = 1;
var currentPurple = 1;
var currentGreen = 1;
var currentPurpleValue = 0;
var purpleScore = 0;
var orangeScore = 0;

var numberDieSelected = 0;
var numberOfTurnsLeft = 10;

var orange = rollDie();
var blue = rollDie();
var white = rollDie();
var green = rollDie();
var yellow = rollDie();
var purple = rollDie();

function rollDie(){
	var random = Math.floor(Math.random() * 6);
	
	random++;
	
	if(random == 7){
		random = 6;
	} else if(random == 0){
		random = 1;
	}
	
	return random;
}

function rollDice(){
	
}

function selectOrangeDie(orangeVal){
	
	if(currentOrange < 12 && numberDieSelected < 3){
		var orangeDie = "orange-box-" + currentOrange.toString();
		
		if(currentOrange == 4 || currentOrange == 7 || currentOrange == 9){
			orangeVal = orangeVal * 2;
		} else if(currentOrange == 11){
			orangeVal = orangeVal * 3;
		} 
		
		$("#"+orangeDie).html(orangeVal);
		
		$("#orange-die").html("");
		
		orangeScore = orangeScore + orangeVal;
		currentOrange++;
		numberDieSelected++;
	}
}

function selectPurpleDie(){
	
	if(currentPurple < 12 && numberDieSelected < 3){
		
		if(currentPurpleValue < purple){
			var purpleBox = "purple-box-" + currentPurple.toString();
			
			$("#"+purpleBox).html(purple);
			
			$("#purple-die").html("");
		
			currentPurpleValue = purple;
			if(currentPurpleValue == 6){
				currentPurpleValue = 0;
			}
			
			purpleScore = purpleScore + purple;
			currentPurple++;
			numberDieSelected++;
		}
	}
	
}

function selectBlueDie(){
	if(numberDieSelected < 3){
		
		var value = blue + white;
		
		var blueBox = "blue-box-" + value.toString();
		
		if($("#"+blueBox).attr('value') != "X"){
			$("#"+blueBox).html("X");
			$("#"+blueBox).attr('value', "X");
			
			$("#blue-die").html("");
		
			numberDieSelected++;
		} 		
	}
}

function selectGreenDie(){
	
	if(numberDieSelected < 3){
		
		var greenBox = "green-box-" + currentGreen.toString();
		
		if($("#"+greenBox).attr('value') <= green){
			
			$("#" + greenBox).html("X");
			
			$("#green-die").html("");
			
			$("#"+greenBox).attr('value', "X");
			currentGreen++;
			numberDieSelected++;
		} 
	}
}

function selectYellowDie(yellowBox){
	if(numberDieSelected < 3){
				
		if($(yellowBox).attr('value') == yellow.toString()){
				
			$(yellowBox).html("X");
			$(yellowBox).attr('value', 'X');
			
			$("#yellow-die").html("");
			yellow = 0;
			numberDieSelected++;
		} else if($(yellowBox).attr('value') == white.toString()){
			$(yellowBox).html("X");
			$(yellowBox).attr('value', 'X');
			
			$("#white-die").html("");
			numberDieSelected++;
		}
	}
}

function selectWhiteDie(color){
	
	if(numberDieSelected < 3){
		
		if(color == "blue"){
			
			var value = blue + white;
		
			var blueBox = "blue-box-" + value.toString();
			
			if($("#"+blueBox).attr('value') != "X"){
				$("#"+blueBox).html("X");
				$("#"+blueBox).attr('value', "X");
				
				$("#white-die").html("");
			
				numberDieSelected++;
				$(function () {
					$('#white-die-modal').modal('toggle');
				});
			}
			
		} else if(color == "yellow"){
			
			
			
		} else if(color == "green"){
			
			var greenBox = "green-box-" + currentGreen.toString();
		
			if($("#"+greenBox).attr('value') <= white){
				
				$("#" + greenBox).html("X");
				
				$("#white-die").html("");
				$("#"+greenBox).attr('value', "X");
				
				currentGreen++;
				numberDieSelected++;
				$(function () {
					$('#white-die-modal').modal('toggle');
				});
			} 
			
		} else if(color == "orange"){
		
			if(currentOrange < 12){
				var orangeDie = "orange-box-" + currentOrange.toString();
				
				var whiteVal = white;
				
				if(currentOrange == 4 || currentOrange == 7 || currentOrange == 9){
					whiteVal = whiteVal * 2;
				} else if(currentOrange == 11){
					whiteVal = whiteVal * 3;
				} 
				
				$("#"+orangeDie).html(whiteVal);
				
				$("#white-die").html("");
				
				orangeScore = orangeScore + whiteVal;
				currentOrange++;
				numberDieSelected++;
				$(function () {
					$('#white-die-modal').modal('toggle');
				});
			}
			
		} else if(color == "purple"){
			
			if(currentPurple < 12){
		
				if(currentPurpleValue < white){
					var purpleBox = "purple-box-" + currentPurple.toString();
					
					$("#"+purpleBox).html(white);
					
					$("#white-die").html("");
				
					currentPurpleValue = white;
					if(currentPurpleValue == 6){
						currentPurpleValue = 0;
					}
					
					purpleScore = purpleScore + white;
					currentPurple++;
					numberDieSelected++;
					$(function () {
						$('#white-die-modal').modal('toggle');
					});
				}
			}
			
		}
		
		
	}
	
	
}



function finalScore(){
	var score = 0;
	
	var blueCount = 0;
	
	for(var i = 1; i < 13; i++){
		
		var blueBox = "blue-box-" + i.toString();
		
		if($("#"+blueBox).attr('value') == "X"){
			
			blueCount++;
			
		}
	}
	
	if(blueCount == 0){
		var blueScore = 0;
	} else if(blueCount == 1){
		var blueScore = 1;
	} else if(blueCount == 2){
		var blueScore = 2;
	} else if(blueCount == 3){
		var blueScore = 4;
	} else if(blueCount == 4){
		var blueScore = 6;
	} else if(blueCount == 5){
		var blueScore = 10;
	} else if(blueCount == 6){
		var blueScore = 15;
	} else if(blueCount == 7){
		var blueScore = 21;
	} else if(blueCount == 8){
		var blueScore = 29;
	} else if(blueCount == 9){
		var blueScore = 37;
	} else if(blueCount == 10){
		var blueScore = 46;
	} else if(blueCount == 11){
		var blueScore = 56;
	}
	
	var greenCount = 0;
	
	for(var i = 1; i < 12; i++){
		
		var greenBox = "green-box-" + i.toString();
		
		if($("#"+greenBox).attr('value') == "X"){
			
			greenCount++;
			
		}
	}
	
	if(greenCount == 0){
		var greenScore = 0;
	} else if(greenCount == 1){
		var greenScore = 1;
	} else if(greenCount == 2){
		var greenScore = 3;
	} else if(greenCount == 3){
		var greenScore = 6;
	} else if(greenCount == 4){
		var greenScore = 10;
	} else if(greenCount == 5){
		var greenScore = 15;
	} else if(greenCount == 6){
		var greenScore = 21;
	} else if(greenCount == 7){
		var greenScore = 28;
	} else if(greenCount == 8){
		var greenScore = 36;
	} else if(greenCount == 9){
		var greenScore = 45;
	} else if(greenCount == 10){
		var greenScore = 55;
	} else if(greenCount == 11){
		var greenScore = 66;
	}
	
	var yellowScore = 0;
	
	if($("#yellow-box-1").attr('value') == $("#yellow-box-2").attr('value') && $("#yellow-box-3").attr('value') == $("#yellow-box-4").attr('value')){
		yellowScore = yellowScore + 5;
	}
	if($("#yellow-box-5").attr('value') == $("#yellow-box-6").attr('value') && $("#yellow-box-7").attr('value') == $("#yellow-box-8").attr('value')){
		yellowScore = yellowScore + 7;
	}
	if($("#yellow-box-9").attr('value') == $("#yellow-box-10").attr('value') && $("#yellow-box-11").attr('value') == $("#yellow-box-12").attr('value')){
		yellowScore = yellowScore + 10;
	}
	if($("#yellow-box-13").attr('value') == $("#yellow-box-14").attr('value') && $("#yellow-box-15").attr('value') == $("#yellow-box-16").attr('value')){
		yellowScore = yellowScore + 14;
	}
	if($("#yellow-box-1").attr('value') == $("#yellow-box-5").attr('value') && $("#yellow-box-9").attr('value') == $("#yellow-box-13").attr('value')){
		yellowScore = yellowScore + 5;
	}
	if($("#yellow-box-2").attr('value') == $("#yellow-box-6").attr('value') && $("#yellow-box-10").attr('value') == $("#yellow-box-14").attr('value')){
		yellowScore = yellowScore + 7;
	}
	if($("#yellow-box-3").attr('value') == $("#yellow-box-7").attr('value') && $("#yellow-box-11").attr('value') == $("#yellow-box-15").attr('value')){
		yellowScore = yellowScore + 10;
	}
	if($("#yellow-box-4").attr('value') == $("#yellow-box-8").attr('value') && $("#yellow-box-12").attr('value') == $("#yellow-box-16").attr('value')){
		yellowScore = yellowScore + 14;
	}
	if($("#yellow-box-1").attr('value') == $("#yellow-box-6").attr('value') && $("#yellow-box-11").attr('value') == $("#yellow-box-16").attr('value')){
		yellowScore = yellowScore + 20;
	}
	
	
	score = score + orangeScore + purpleScore + blueScore + greenScore + yellowScore;
	
	$("#die-area").hide();
	$("#score-div").html("<p>Yellow Score: " + yellowScore.toString() + "</p>" + "<p>Blue Score: " + blueScore.toString() + "</p>" + "<p>Green Score: " + greenScore.toString() + "</p>" + "<p>Orange Score: " + orangeScore.toString() + "</p>"
		+ "<p>Purple Score: " + purpleScore.toString() + "</p>" + "<p>Final Score: " + score.toString() + "</p>").show();
	
}

$("#roll-die").click(function(){
	
	if(numberOfTurnsLeft > 0){
	
		orange = rollDie();
		white = rollDie();
		blue = rollDie();
		yellow = rollDie();
		green = rollDie();
		purple = rollDie();
		
		numberDieSelected = 0;
		
		
		$("#white-die").html("<img style='width:75px;' src='http://jonathan-louis-com.stackstaging.com/thats-pretty-clever/views/dice-images/whiteDie" + white + ".png'>");
		$("#yellow-die").html("<img style='width:75px;' src='http://jonathan-louis-com.stackstaging.com/thats-pretty-clever/views/dice-images/yellowDie" + yellow + ".png'>");
		$("#blue-die").html("<img style='width:75px;' src='http://jonathan-louis-com.stackstaging.com/thats-pretty-clever/views/dice-images/blueDie" + blue + ".png'>");
		$("#green-die").html("<img style='width:75px;' src='http://jonathan-louis-com.stackstaging.com/thats-pretty-clever/views/dice-images/greenDie" + green + ".png'>");
		$("#orange-die").html("<img style='width:75px;' src='http://jonathan-louis-com.stackstaging.com/thats-pretty-clever/views/dice-images/orangeDie" + orange + ".png'>");
		$("#purple-die").html("<img style='width:75px;' src='http://jonathan-louis-com.stackstaging.com/thats-pretty-clever/views/dice-images/purpleDie" + purple + ".png'>");
		
		numberOfTurnsLeft--;
	} else{
		
		finalScore();
		
	}
	
});

$("#orange-die").click(function(){
	
	selectOrangeDie(orange);
	
});

$("#blue-die").click(function(){
	
	selectBlueDie();
	
});

$("#green-die").click(function(){
	
	selectGreenDie();
	
});

$("#purple-die").click(function(){
	
	selectPurpleDie();
	
});

$(".yellow-box").click(function(){
	
	selectYellowDie(this);
	
});

$("#white-green-select").click(function(){
	
	selectWhiteDie("green");
	
});

$("#white-blue-select").click(function(){
	
	selectWhiteDie("blue");
	
});

$("#white-purple-select").click(function(){
	
	selectWhiteDie("purple");
	
});

$("#white-orange-select").click(function(){
	
	selectWhiteDie("orange");
	
});

$("#white-yellow-select").click(function(){
	
	selectWhiteDie("yellow");
	
});