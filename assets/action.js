
alert("hello");

// initial set of buttons with emotions
  var emotions = ["happy", "sad", "passive aggressive", "sassy", "crazy eyes", "eye roll", "table flip", "love", "spinning", "russian"];

function displayEmotion(){
//create a function that will display the gif
$("button").on("click", function(){
	var search = $(this).attr("data-emotion");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
 	url: queryURL,
 	method: "GET"
 }).done(function(response){
 	console.log(response);
 	var results = results.data;
 	

 	for (var i = 0; i<results.length; i++){
 		var gifDiv = $("<div class='item'></div> ")
 		var rating= results[i].rating;
 		var p = $("<p>").text("Rating: "+ rating);

 		var emotionImg = ("<img>");

 		emotionImg.attr("src", results[i].images_fixed_height.url);

 		gifDiv.append(p);
 		gifDiv.append(emotionImg);


 		$("#gifs-appear-here").prepend(gifDiv);

 	}

 });
});
}
     
//render the buttons from the exisitng array

  function renderButtons(){
  	$("#TestBtn").empty();

  	for(var i=0; i< emotions.length; i++){

  		var a = $("<button>");
  		a.addClass("newEmotions");
  		a.attr("data-emotion", emotions[i]);
  		a.text(emotions[i]);
  		$("#TestBtn").append(a);
  	}

  } 

// taking the input of the search, adding the button and displaying the gifs
  $("#add-input").on("click", function(event){
  	event.preventDefault();

  	var userInput = $("#input").val().trim();
  	emotions.push(userInput);
  	renderButtons();
  	console.log(userInput);


  });

$(document).on("click", ".gifDump", displayEmotion);

renderButtons();





