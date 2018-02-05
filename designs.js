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
// input's color "value" on color change
function changeColor() {
	$( "#colorPicker" ).on( 'change', function( evt ) {
		var color = evt.target.value;
		$("#colorPicker").attr("value", color);
		console.log( "-- Color input changed -- " );
		//console.log( evt );
		//console.log( evt.target.value );
		getColor();
	});
}
$(changeColor);


// Get current color after a color change
function getColor() {
	color = $("#colorPicker").attr("value");
	console.log("Current color is: " + color);
}

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


// This function looks for change in grid input, and
// sets the grid input's "value" on input change
function changeGrid() {
	$( "#inputHeight" ).on( 'change', function( evt ) {
		var rows = evt.target.value;
		$("#inputHeight").attr("value", rows);
		console.log( "-- Grid rows changed --" );
		console.log( evt );
		//console.log( evt.target.value );
		getGrid();
	});

	$( "#inputWeight" ).on( 'change', function( evt ) {
		var cols = evt.target.value;
		$("#inputWeight").attr("value", cols);
		console.log( "-- Grid columns changed --" );
		console.log( evt );
		//console.log( evt.target.value );
		getGrid();
	});
}
$(changeGrid);



// Get current grid after an input change
function getGrid() {
	rows = $("#inputHeight").attr("value");
	cols = $("#inputWeight").attr("value");
	console.log("Current rows are: " + rows + "\nCurrent columns are: " + cols);
}


/* ################################################
	 End -- Size input
###################################################*/