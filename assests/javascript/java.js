
var apikey = "&api_key=PjdDeIXV3C64o3SUtVxbLI0lTfODKeU5"
var limit = 9;
var topiclist = ["Simpsons", "King of the Hill", "Venture Bros"];
var gifstillimg;
var gifactiveimg;
    
function createbuttons() {
    $("#newbuttons").empty();

    for (var i = 0; i < topiclist.length; i++) {
        var createbutton = $("<button class='btn btn-primary'>");
        createbutton.addClass("topicbuttons");
        createbutton.attr("topicname", topiclist[i]);
        createbutton.text(topiclist[i]);
        $("#newbuttons").append(createbutton);
    }
}

$("#add-item").on("click", function(event) {
    event.preventDefault();
    var topic = $("#iteminput").val().trim();
    topiclist.push(topic);
    createbuttons();
});


function displaytopics() {

var topic = $(this).attr("topicname");
var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ topic + apikey + "&limit="+ limit;

$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response)
        var result = response.data;
        // var displaygif = $("<div class='results'>")
        for (j=0; j < result.length; j++) {
        var displaygif = $("<div class='results'>")
        var gifrateing = $("<p>").text("Rateing: " + response.data[j].rating);
        
        var stillimg = response.data[j].images.downsized_still.url;
     

        var activeimg = response.data[j].images.downsized.url;
      
        var displayimg = $("<img>").attr({
            src: stillimg,
            activeimg: activeimg,
            stillimg: stillimg,
            datastate: "still",
            class: "gif"
            });

        if (response.data[j].rating !== "r") {
            var gif = $(displaygif).append(gifrateing, displayimg);
            
            $("#gifs").prepend(gif);
            }
        }
    });
};


function animiation() {    
    var state = $(this).attr("datastate");

        if (state === "still") {
            $(this).attr("src", ($(this).attr("activeimg")));
            $(this).attr("datastate", "animate");
            
            } 
        else {
            $(this).attr("src", ($(this).attr("stillimg")));
            $(this).attr("datastate", "still");

        }
}

function topicbutton (){
    $(document).on("click", ".topicbuttons", displaytopics);
}



createbuttons();
topicbutton();
$(document).on("click", ".gif", animiation);
