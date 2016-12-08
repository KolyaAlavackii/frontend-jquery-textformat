'use strict';

var msgFormatted = $(".message-formatted");
var msgField = $(".message-field");

function format(textArray) {
     var textFormatted = $.trim(textArray)
      .toLowerCase()
      .replace(/\n+/g, " ")
      .replace(/\s+/g," ");
         
     return textFormatted;
}

msgField.on('input', function() {
    msgFormatted.text(format(this.value)); 
}); 
