// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() {
// Get the info from the checkbox
  	let check = document.getElementById('opponent');
  	let buttonrps = document.getElementById('rps');
// Check if the checkbox is checked and show or hide options accordingly
	if (check.checked == true) {
		$('.shots').show()
		if (buttonrps.checked == true) {
			$('.rpsls').hide();
		}

	} else {
		$('.shots').hide()
	}
}


// This function clears the input form and also resets the shot selection
// radio buttons. 
function startOver () {
	document.getElementById('userinput').reset();
	showHideShots();
}

async function playGame () {
	// Get which game is being played based on the value in the form
	let game = $('input[type=radio][name=game]:checked').val();

	// Get which shot is being played based on the value in the form
	let shot = $('input[type=radio][name=shot]:checked').val();

	//check if game is with opponent or not
	let check = document.getElementById('opponent');

	// Identify the base URL based on browser information
	let baseurl = window.location.href + 'app/'

	// Log the base URL
	console.log(baseurl)

	// This constructs a URL for the opponent option ONLY. To incorporate
	// the other option, you can use a conditional to change the URL based
	// on what is selected. You could also write separate functions, or use
	// a conditional somewhere above in this function to construct the 
	// correct URL
	let urlone = baseurl + game + '/play/' + shot
	let urltwo = baseurl + game + '/play/'
	let url = baseurl;

	if (check.checked == true) {
		url = urlone;
	} else {
		url = urltwo;
	}


	let response = await fetch(url)
	let result = await response.json()
	// Log the result
	console.log(result)
	// Here you should include code that uses the DOM API or jQuery to 
	// manipulate another block of HTML in the interface to display the 
	// results in some way. 
	let resulttext ='';

	if (check.checked == true) {
		resulttest = 'You: ' + result.player + ', Opponent: ' + result.opponent + ', Result: ' + result.result;
	} else {
		resulttest = 'You: ' + result.player
	}

	document.getElementById('results').innerText = resulttext;
}

function getRules(){
	$('.playpage').hide();
	$('.rules').show();
}