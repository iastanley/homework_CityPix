$(document).ready(function(){

//get input from the user upon submission 
$("form").submit(function(e){
	//prevent form sending to server and page reload
	e.preventDefault();

	//store user input
	var userInput = $("#city-type").val();

	//clear form after use
	$("#city-type").val("");
	
	//change background pic based on city
	picByCity(userInput);


});

//a function for changing body class based on user provided city name
function picByCity(city){
	city = city.toLowerCase()
	city = city.trim();

	switch (city) {
		case "new york city":
		case "new york":
		case "ny":
		case "nyc": 
			$("body").addClass("nyc");
			break;
		case "austin":
			$("body").addClass("austin");
			break;
		case "la":
		case "los angeles":
			$("body").addClass("la");
			break;
		case "sf":
		case "san fran":
		case "san francisco":
			$("body").addClass("sf");
			break;
		case "sydney":
			$("body").addClass("sydney");
			break;
		default:
			alert("Please choose another city.");
	}
}


});

//QUESTIONS FOR TA
//I thought we were supposed to use submit not click for forms?
//the only way I can get this to work is to call submit on the form tag OR
//call click on the #submit-btn
//neither seems like what I remember from class???