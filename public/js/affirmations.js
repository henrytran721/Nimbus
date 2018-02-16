
		var affirmations = ['Strive For Greatness', 'I feel good today', 'affirmation 3']
		console.log(affirmations['0'])
		document.getElementById("affirmations").innerHTML = affirmations[0];


		function randomString() {
			$("p").click(function(){
        alert("The affirmation is clicked.");
    	});

		var randomNumber = Math.floor(Math.random()*textArray.length);
		randomString = list[randomNumber]
		console.log(randomString)

		}