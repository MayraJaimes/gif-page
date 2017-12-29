var sports = ["Football", "Soccer", "Volleyball", "Swimming"];

function displayTopicGif() {

  var topic = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  topic + "&api_key=Ak6PdPxUS0ITIiJwSTuVkHwTl3wDdZRg&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    var results = response.data;
    $("#sportGifs").empty();

    for (var i = 0; i < results.length; i++) {
      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        var sportDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var sportImage = $("<img>");
        sportImage.attr("src", results[i].images.fixed_height_still.url);
        sportImage.attr("data-still", results[i].images.fixed_height_still.url);
        sportImage.attr("data-animate", results[i].images.fixed_height_downsampled.url);
        sportImage.attr("data-state", "still");
        sportImage.addClass("gif");
        $("#sportGifs").append(p);
        $("#sportGifs").append(sportImage);
      }
    }
  renderButtons();
  animateGif();
  });
}

function animateGif(){
  $(".gif").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
}

function renderButtons() {
  $("#sportButtons").empty();
  for (var i = 0; i < sports.length; i++) {
    var a = $("<button>");
    a.addClass("sport");
    a.attr("data-name", sports[i]);
    a.text(sports[i]);
    $("#sportButtons").append(a);
  }
}

$("#add-sport").on("click", function(event) {
  event.preventDefault();
  var sport = $("#sport-input").val().trim();
  sports.push(sport);
  renderButtons();
  animateGif();
});

$(document).on("click", ".sport", displayTopicGif);
renderButtons();

