'use strict';

let addition, subtraction, multiplication, division = true;
	let number1 = Math.floor((Math.random() * 10) + 1);
    let number2 = Math.floor((Math.random() * 10) + 1);
    let correctAnswer = number1 + number2;
	let output;
	addition = true;
	document.querySelector("#numbers").innerHTML = (number1 + " + " + number2);

	document.querySelectorAll("button").forEach(function(el) {
		el.addEventListener("click", function() {
		if (this.id === "addition") {
			addition = true;
			subtraction = false;
			multiplication = false;
			division = false;
			correctAnswer = number1 + number2;
			document.querySelector("#flashcardTitle").innerHTML = "Addition Flashcards";
			document.querySelector("#numbers").innerHTML = (number1 + " + " + number2);
		} else if (this.id === "subtraction") {
			addition = false;
			subtraction = true;
			multiplication = false;
			division = false;
			correctAnswer = number1 - number2;
			document.querySelector("#flashcardTitle").innerHTML = "Subtraction Flashcards";
			document.querySelector("#numbers").innerHTML = (number1 + " - " + number2);
		} else if (this.id === "multiplication") {
			addition = false;
			subtraction = false;
			multiplication = true;
			division = false;
			correctAnswer = number1 * number2;
			document.querySelector("#flashcardTitle").innerHTML = "Multiplication Flashcards";
			document.querySelector("#numbers").innerHTML = (number1 + " x " + number2);
		} else if (this.id === "division") {
			addition = false;
			subtraction = false;
			multiplication = false;
			division = true;
			correctAnswer = Math.trunc(number1 / number2);
			document.querySelector("#flashcardTitle").innerHTML = "Division Flashcards";
			document.querySelector("#numbers").innerHTML = (number1 + " &#247; " + number2);
		}
	});
	});

	document.querySelector("#submitAnswer").addEventListener("click", function() {

        let userAnswer = document.querySelector("#answer").value;

        if (isNaN(userAnswer)) return document.querySelector("#output").innerHTML = "Hey! That's not a number, try again!";

		switch(true) {

		case userAnswer == correctAnswer && addition === true: 
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " + " + number2 + " = " + correctAnswer + ".";
			break;

		case userAnswer == correctAnswer && subtraction === true:
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " - " + number2 + " = " + correctAnswer + ".";
			break;

		case userAnswer == correctAnswer && multiplication === true:
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " x " + number2 + " = " + correctAnswer + ".";
			break;

		case userAnswer == correctAnswer && division === true:
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " &#247; " + number2 + " = " + correctAnswer + ".";
			break;

		default:
			document.querySelector("#output").innerHTML = "Incorrect answer.";
			break;
		}
	});

	document.querySelector("#nextCard").addEventListener("click", function() {

        document.querySelector("#output").innerHTML = "";            
        document.querySelector("#answer").value = "";
        number1 = Math.floor((Math.random() * 10) + 1);
        number2 = Math.floor((Math.random() * 10) + 1);

		if (addition === true) {
        correctAnswer = number1 + number2;
        document.querySelector("#numbers").innerHTML = (number1 + " + " + number2);
		} else if (subtraction === true) {
		correctAnswer = number1 - number2;
        document.querySelector("#numbers").innerHTML = (number1 + " - " + number2);
		} else if (multiplication === true) {
		correctAnswer = number1 * number2;
        document.querySelector("#numbers").innerHTML = (number1 + " x " + number2);
		} else if (division === true) {
		correctAnswer = Math.trunc(number1 / number2);
        document.querySelector("#numbers").innerHTML = (number1 + " &#247; " + number2);
		}
	});