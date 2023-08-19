//Look at https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment4/assignment4-solution-starter/easier/SpeakHello.js
//for easier access

(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);