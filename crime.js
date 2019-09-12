$("#run-search").on("click", function(event) {

  console.log ("click")

 // event.preventDefault() can be used to prevent an event's default behavior.
 // Here, it prevents the submit button from trying to submit a form when clicked
 event.preventDefault();

 // Here we grab the text from the input box
 var state = $("#state").val();

 console.log('state', state)

 // Here we construct our URL
//    var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/" + state + "/aggravated-assault/2016/2017?&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";



 var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/"

 queryURL = queryURL + state +"/aggravated-assault/2017/2017?&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";



 $.ajax({



   url: queryURL,



   method: "GET"

 }).then(function(response) {

    for (var i = 0; i < response.results.length; i++) {

      var row = $('<tr>');

      console.log('res', response.results[i]);

        var stateAbbr = $('<td>').css('align','center').text(response.results[i].state_abbr);

        var ori = $('<td>').css('align','center').text(response.results[i].ori);

        var offense = $('<td>').css('align','center').text(response.results[i].offense);

        var actual = $('<td>').css('align','center').text(response.results[i].actual);

        var cleared = $('<td>').css('align','center').text(response.results[i].cleared);

        var data_year = $('<td>').css('align','center').text(response.results[i].data_year);



        row.append(stateAbbr, ori, offense, actual, cleared, data_year); 

        $("#tableCrime").append(row);

    };

    if(response.results.length > 0){

      $("#tableCrime").removeAttr( 'style' );

    }

    // -----------------------------------------------------------------------

  });

});