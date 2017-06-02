(function ($) {
  'use strict';

  var list = "";

  // Perform an asynchronous HTTP (Ajax) request.
  $.ajax({
    url: 'http://www.json-generator.com/api/json/get/cqhjRoDnvS', // A string containing the URL to which the request is sent.
    dataType: 'json', // The type of data that you're expecting back from the server.
  }).done(successFunction)
    .fail(failFunction);

  // A successful request
  function successFunction(data) {
    // If the object contains elements
    if (data.length > 0) {
      for (var i = 0; i < data[0].cats.length; i++) {
        list = '<div class="col col-sm-6"><div class="item"><img class="item-image img-circle" src="' + data[0].cats[i].imageUrl + '/" alt=""><h2 class="item-name">' + data[0].cats[i].name + '</h2><p class="item-description">' + data[0].cats[i].description + '</p></div><div>';
        $('#dataList').append(list);
      }
      $('#dataList').wrapInner('<div class="row"></div>');
    } else {
      // otherwise log "no data" message to console
      console.log('No data received from your response!');
    }
  }

  // A failed request
  function failFunction(request, textStatus, errorThrown) {
    // log "error" message to console
    console.log('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
  }
})(jQuery);
