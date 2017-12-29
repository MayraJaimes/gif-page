var sports = ["football", "soccer", "volleyball", "swimming"];

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
    var p = '';
    for (var i = 0; i < results.length; i++) {
      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        p += `<div class="gif-images"><p>Rating: ${results[i].rating}</p><img src='${results[i].images.fixed_height_still.url}' data-still='${results[i].images.fixed_height_still.url}' data-animate='${results[i].images.fixed_height_downsampled.url}' data-state='still' class='gif'/></div>`        
        }    
    }
    $("#sportGifs").append(p);
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
  var a = "";
  for (var i = 0; i < sports.length; i++) {
    a += `<button class='sport' data-name='${sports[i]}'>${sports[i]}</button>`;
  }
  $("#sportButtons").append(a);
}

$("#add-sport").on("click", function(event) {
  event.preventDefault();
  var sportsInput = $("#sport-input")
  var sport = $("#sport-input").val().trim().toLowerCase();;
  sports.push(sport);
  renderButtons();
  sportsInput.val('');
});

$(document).on("click", ".sport", displayTopicGif);
renderButtons();

