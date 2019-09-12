$("#run-search").on("click", function (event) {

  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  // Here we grab the text from the input box
  var state = $("#state option:selected").val();

  //grab city name
  // var city = 

  // Here we construct our URL
  var queryURL = "https://api.schooldigger.com/v1.2/rankings/schools/" + state + "?appID=e331e8d4&appKey=95854d6e3a149605261b9a55d9630fdc";



  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-requested-with": "xhr"
    }
  }).then(function (response) {
    for (var i = 0; i < response.schoolList.length; i++) {
      var schoolName = response.schoolList[i].schoolName;
      var cardTitle = $('<div>').addClass('card-header').text(schoolName);
      var cardBody = $('<div>').addClass('card-body');
      var schoolAddress = response.schoolList[i].address.street + ", " + response.schoolList[i].address.city + ", " + response.schoolList[i].address.zip;
      var addressP = $('<p>').text("School Address: " + schoolAddress);
      var schoolLevel = response.schoolList[i].schoolLevel;
      var levelP = $('<p>').text("School Level: " + schoolLevel);
      var schoolRanking = i + 1;
      var rankingP = $('<p>').text("Ranking: " + schoolRanking);

      cardBody.append(addressP, levelP, rankingP);

      var card = $('<div>').addClass('card');
      card.append(cardTitle, cardBody)

      $('.school-body').append(card);

    }
  });

  // -----------------------------------------------------------------------

});