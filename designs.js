// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const GRID = {
	'rows': '4',
	'columns': '4'
};

let color = '#01b3e3';










/* ################################################
	 Start -- makeGrid()
###################################################*/

function makeGrid() {
// Your code goes here!
let tableGrid = "";

/*
	Let's use while loop to clear the grid
	https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
	https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild
*/
let gridStatus = document.getElementById('pixelCanvas');

while ( gridStatus.firstElementChild ) {
	$("#pixelCanvas").empty();
}

/*
	Creating the table grid
	https://stackoverflow.com/questions/3479783/insert-html-using-jquery-html

*/
for ( r = GRID.rows; r >= 1; --r ) {
	tableGrid += "<tr>";

	for ( c = GRID.columns; c >= 1; c-- ) {
		tableGrid += "<td></td>";
	}
	tableGrid += "</tr>";

}

$("#pixelCanvas").append(tableGrid);

}
/* ################################################
	 End -- makeGrid()
###################################################*/





/* ################################################
	 Start -- fill color
###################################################*/

function fillColor() {
	$( "#pixelCanvas" ).on( "click", "td", function( evt ) {
    $( evt.target ).css( "background", color );
	});

	// Let's have the feature to remove color on right-click
	$( "#pixelCanvas" ).on( "contextmenu", "td", function( evt ) {
		evt.preventDefault();
    $( evt.target ).css( "background", "#ffffff" );
	});
}
$(fillColor);

/* ################################################
	 End -- fill color
###################################################*/










/* ################################################
	 Start -- submit event
###################################################*/

function submitForm() {
	$( "#sizePicker" ).on( "submit", function( evt ) {
		evt.preventDefault();
		makeGrid();
	});
}
$(submitForm);

/* ################################################
	 Start -- submit event
###################################################*/






/* ################################################
	 Start -- Color input
###################################################*/

// Let's set our own color on page load, just because
function defaultColor() {
	$("#colorPicker").attr("value", color);
	//console.log( $("#colorPicker") );
}
$(defaultColor);


/*
	This function looks for change in color, and sets the
  input's color "value" on color change
*/
function changeColor() {
	$( "#colorPicker" ).on( "change", function( evt ) {
		color = evt.target.value;
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
	console.log("Current color is: " + color);
}

/* ################################################
	 End -- Color input
###################################################*/





/* ################################################
	 Start -- Size input
###################################################*/

/*
	This function looks for change in grid input, and
  sets the grid input's "value" on input change.
*/
function changeGrid() {
	$( "#inputHeight" ).on( "change", function( evt ) {
		GRID.rows = evt.target.value;
		$("#inputHeight").attr("value", GRID.rows);
		console.log( "-- Grid rows changed --" );
		console.log( evt );
		//console.log( evt.target.value );
		getGrid();
	});

	$( "#inputWeight" ).on( "change", function( evt ) {
		GRID.columns = evt.target.value;
		$("#inputWeight").attr("value", GRID.columns);
		console.log( "-- Grid columns changed --" );
		console.log( evt );
		//console.log( evt.target.value );
		getGrid();
	});
}
$(changeGrid);



// Print current grid after an input change
function getGrid() {
	console.log("Current rows are: " + GRID.rows + "\nCurrent columns are: " + GRID.columns);
}


/* ################################################
	 End -- Size input
###################################################*/