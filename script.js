// Initialize Firebase
var config = {
	apiKey: "AIzaSyD5w0UTFHlzWQKYQ4dtqWYFByFY_Ye-J7w",
	authDomain: "train-times-b046f.firebaseapp.com",
	databaseURL: "https://train-times-b046f.firebaseio.com",
	storageBucket: "train-times-b046f.appspot.com",
	messagingSenderId: "151568551068"
};

firebase.initializeApp(config);

var dataRef = firebase.database();

var tNumber = ""
var dest = ""
var arr = ""
var freq = ""



$('#add-train').on("click", function(event) {
	event.preventDefault();

	



	var tNumber = $('#trainNumber-input').val().trim();
	var dest = $('#destination-input').val().trim()
	var arr = $('#arrival-input').val().trim()
	var freq = $('#frequency-input').val().trim()

	console.log(tNumber);
	console.log(dest);
	console.log(arr);
	console.log(freq);
	
	dataRef.ref().push({
		tNumber : tNumber,
		dest: dest,
		arr: arr,
		freq : freq

	});

})


	


$()
