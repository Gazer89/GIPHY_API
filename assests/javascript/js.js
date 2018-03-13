// var apikey = "&api_key=PjdDeIXV3C64o3SUtVxbLI0lTfODKeU5"
// var limit = 10;
// var topiclist = ["bart"];
    
// function createbuttons() {
//     $("#newbuttons").empty();

//     for (var i = 0; i < topiclist.length; i++) {
//         var createbutton = $("<button>");
//         createbutton.addClass("topicbuttons");
//         createbutton.attr("topicname", topiclist[i]);
//         createbutton.text(topiclist[i]);
//         $("#newbuttons").append(createbutton);
//         console.log(topiclist)
//     }
// }

// $("#add-item").on("click", function(event) {
//     event.preventDefault();
//     var topic = $("#iteminput").val().trim();
//     console.log(topic)
//     topiclist.push(topic);
//     console.log(topic)
//     console.log(topiclist)
//     createbuttons();
// });


// function displaytopics() {

// var topic = $(this).attr("topicname");
// var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ topic + apikey + "&limit="+ limit;


//   $.ajax({
//       url: queryURL,
//       method: "GET"
//       }).then(function(response) {
//         var rateing = response.Rateing;
//         console.log(queryURL)
//         console.log(topic)
//         console.log(response)
//     });

// };

// $(document).on("click", ".topicbuttons", displaytopics);
// createbuttons();
    