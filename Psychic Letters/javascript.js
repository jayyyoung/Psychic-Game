		// Variables for wins, loses, guesses
		
		//the variable for the entire alphabet, the computer will choose one of these at random
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var win = 0;
		var loss = 0;
		var guesses = 10;
		var guessesUsed = [];
		var userGuesses = undefined;
		var winningLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		
		

		//game reset variable
		//gameReset();
		//display();

		//computer guess

		// function will run on the key up
		document.onkeyup = function(event) {

			var userSelect = String.fromCharCode(event.keyCode).toLowerCase();


			//
			if (guessesUsed.indexOf(userGuesses) < 0 && alphabet.indexOf(userGuesses) >= 0) {
				guessesUsed[guessesUsed.length]=userGuesses;
		
				guesses --;
			}

			//Winning Way
			if (userSelect == winningLetter) {
				win ++;
				alert("You got lucky!");
				guesses = 9;
				guessesUsed = [];
				winningLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			}

			//Losing Way
			if (guesses == 0) {
				loss ++;
				alert("You have FAILED!");
				guesses = 9;
				guessesUsed = [];
				winningLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			}

			document.getElementById('win').innerHTML = "Times you were lucky: " + win;
    		document.getElementById('loss').innerHTML = "Times you failed: " + loss;
    		document.getElementById('guesses').innerHTML = "Remaining Choices: " + guesses;	
    		document.getElementById('guessedLetters').innerHTML = "Letters Chosen: " + guessesUsed;	

    		//var docuText = "<p><h1>So I'm Thinking of a Letter...</h1></p>" + "<p><h4>Can you guess what it is?</h4></p>" + "<p><h4>Times You Were Lucky: " + win + "</h4></p>" + "<p><h4>Times You Have Failed: " + loss + "</h4></p>" + "<p><h4>Remaining Choices: " + guesses + "</h4></p>" + "<p><h4>Letters Chosen So Far: " + guessesUsed + "</h4></p>";
			
    		//document.querySelector("#bodyContent").innerHTML = html;

			}
