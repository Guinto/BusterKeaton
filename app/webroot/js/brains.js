var userMessageID = 0;
var responseMessageID = 0;
var brain;

var sampleResponses = {
	hi: ["hello", "howdy", "hello there!"],
	can: ["yes", "no", "maybe", "ask again later"],
	would: ["yes", "no", "maybe", "ask again later"],
	should: ["yes", "no", "maybe", "ask again later"],
	will: ["yes", "no", "maybe", "ask again later"],
	bye: ["laters", "see ya!", "until next time..."],
};

function sendMessageSetup(data) {
	brain = data;
	$('input').keypress(function(e) {
		var userMessage = this.value;
		if (e.which == 13) {
			addMessage(userMessage);
			var responseMessage = createResponse(userMessage);
			sendResponse(responseMessage);
		}
	});
}

/* IN LINE STYLE!!! */
function addMessage(message) {
	$("<div/>", {
		id: "message" + userMessageID,
		"class": "well user span12",
		style: "display: none;",
		text: message
	}).prependTo('.messages');
	$('input').val("");
	$('#message' + userMessageID).show('fast');
	userMessageID++;
}

function createResponse(message) {
	return createResponseBasedOnFirstWord(message);
}

function sendResponse(response) {
	$("<div/>", {
		id: "message" + responseMessageID,
		"class": "well response span12",
		style: "display: none;",
		text: response
	}).prependTo('.messages');
	$('input').val("");
	var responseDelay = Math.random() * 1000 + 500;
	$('#message' + responseMessageID).delay(responseDelay).show('fast');
	responseMessageID++;
}

function createResponseBasedOnFirstWord(message) {
	var firstWordFromMessage= message.split(" ");
	firstWordFromMessage = firstWordFromMessage[0];
	var response = "what?";
	if (firstWordFromMessage in sampleResponses) {
		//var possibleChoices = sampleResponses[firstWordFromMessage];
		var possibleChoices = retrieveChoicesFromDB(firstWordFromMessage);
		response = possibleChoices[parseInt(Math.random() * possibleChoices.length)];
	} 
	return response;
}

function retrieveChoicesFromDB(message) {
	console.log(brain);
	var possibleResponses = new Array();
	for (var i = 0; i < brain.length; i++) {
		console.log(brain[i].Brain.message);
		if (brain[i].Brain.message === message) {
			possibleResponses.push(brain[i].Brain.response);
		}
	}
	return possibleResponses;v
}
