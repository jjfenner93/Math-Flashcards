"use strict";

let addition, subtraction, multiplication, division = true;
	let number1 = Math.floor((Math.random() * 10) + 1); // Math.floor returns the largest integer less than or equal to a given number.
    // Math.random selects between 1 to 10 now because of the + 1 to Math.floor, this will remove the 0 basically.
    let number2 = Math.floor((Math.random() * 10) + 1);
    let correctAnswer = number1 + number2;
	let output;
	addition = true; // It starts by default with the addition flashcards.
	document.querySelector("#numbers").innerHTML = (number1 + " + " + number2);

	document.querySelectorAll("button").forEach(function(el) { // It will loop through every button on the page first.
		el.addEventListener("click", function() { // Then it will listen for the click event (when it will be clicked).
		if (this.id === "addition") { // It will then change it according to what the id of the button was.
			addition = true; // These booleans will switch between the arithmetic.
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
			correctAnswer = number1 / number2;
			document.querySelector("#flashcardTitle").innerHTML = "Division Flashcards";
			document.querySelector("#numbers").innerHTML = (number1 + " &#247; " + number2);
		}
	});
	});

	document.querySelector("#submitAnswer").addEventListener("click", function() {

        let userAnswer = document.querySelector("#answer").value; // It will store the value of the answer into a variable.

        if (isNaN(userAnswer)) return document.querySelector("#output").innerHTML = "Hey! That's not a number, try again!";

		switch(true) {

		case userAnswer === correctAnswer && addition === true: // This will check if the answer is correct to the one input,
		// and then it has to be the correct boolean value for the addition which needs to be true for the addition text in this case.
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " + " + number2 + " = " + correctAnswer + ".";
			break;

		case userAnswer === correctAnswer && subtraction === true:
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " - " + number2 + " = " + correctAnswer + ".";
			break;

		case userAnswer === correctAnswer && multiplication === true:
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " x " + number2 + " = " + correctAnswer + ".";
			break;

		case userAnswer === correctAnswer && division === true:
			document.querySelector("#output").innerHTML = "Correct! " + number1 + " &#247; " + number2 + " = " + correctAnswer + ".";
			break;

		default:
			document.querySelector("#output").innerHTML = "Incorrect answer.";
			break;
		}
	});

	document.querySelector("#nextCard").addEventListener("click", function() {

        document.querySelector("#output").innerHTML = ""; // Resets the text output here.         
        document.querySelector("#answer").value = ""; // And resets it here too.
        number1 = Math.floor((Math.random() * 10) + 1); // Does a new equation for the user.
        number2 = Math.floor((Math.random() * 10) + 1);

		if (addition === true) { // The following code will generate a fresh new equation and the correct answer
		// will be put into the variable to be checked later in the submitAnswer listen event (switch) above.
        correctAnswer = number1 + number2;
        document.querySelector("#numbers").innerHTML = (number1 + " + " + number2);
		} else if (subtraction === true) {
		correctAnswer = number1 - number2;
        document.querySelector("#numbers").innerHTML = (number1 + " - " + number2);
		} else if (multiplication === true) {
		correctAnswer = number1 * number2;
        document.querySelector("#numbers").innerHTML = (number1 + " x " + number2);
		} else if (division === true) {
		correctAnswer = number1 / number2;
        document.querySelector("#numbers").innerHTML = (number1 + " &#247; " + number2);
		}
	});
