'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);

}


/* 
 * Define the projectClick function:
 * what occurs when user clicks on a "project" class object?
 */
funnction projectClick(e) {

    // prevent the current page from reloading:
    e.preventDefault();

    $(this).css("background-color", "#7FFF00");

    var containingProject = $(this).closest(".project");
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

}

