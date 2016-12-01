'use strict';

function formatted(context) {
  	var formattedText = context.value
    	.trim() 
      	.toLowerCase() 
      	.replace(/\n+/g, " ") 
      	.replace(/\s+/g," "); 
    $(".message-formatted").text(formattedText);  
}

$(".message-field").blur(function() { 
  	formatted(this)
	});