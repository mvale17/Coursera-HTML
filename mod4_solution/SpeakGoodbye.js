//Look at https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment4/assignment4-solution-starter/easier/SpeakGoodBye.js
//for instructions

(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);
