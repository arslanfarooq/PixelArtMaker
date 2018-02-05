// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}


/* ################################################
	 Start -- Color input
###################################################*/

// Let's set our own default color on page load, just because
function defaultColor() {
	var defaultColor = "#efefef";
	$("#colorPicker").attr("value", defaultColor);
	//console.log( $("#colorPicker") );
}
$(defaultColor);


// This function looks for change in color, and sets the
// imput's color "value" on color change
function changeColor() {
	var color = "";
	$( "#colorPicker" ).on( 'change', function( evt ) {
		var color = evt.target.value;
		$("#colorPicker").attr("value", color);
		//console.log( "---" );
		//console.log( evt );
		//console.log( evt.target.value );
		getColor();
	});
}
$(changeColor);


// Get current color after a color change
function getColor() {
	color = $(colorPicker).attr("value");
	console.log("Current color is: " + color);
}
$(getColor);

/* ################################################
	 End -- Color input
###################################################*/





/* ################################################
	 Start -- Size input
###################################################*/

// Let's set our own default grid on page load, just because
function defaultGrid() {
	var defaultRows = 2;
	var defaultCols = 2;
	$("#inputHeight").attr("value", defaultRows);
	$("#inputWeight").attr("value", defaultCols);
}
$(defaultGrid);


/* ################################################
	 End -- Size input
###################################################*/