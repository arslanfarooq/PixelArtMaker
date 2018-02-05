// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const GRID = {
	'rows': '1',
	'columns': '1'
};

let color = '#efefef';

function makeGrid() {
// Your code goes here!
let tableGrid = "";

let gridStatus = document.getElementById('pixelCanvas');

// Let's use while loop to clear the grid
while ( gridStatus.firstElementChild ) {
	$("#pixelCanvas").empty();
}

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


/* This function looks for change in color, and sets the
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

// Let"s set our own default grid on page load, just because
/*function defaultGrid() {
	$("#inputHeight").attr("value", GRID.rows);
	$("#inputWeight").attr("value", GRID.columns);
}
$(defaultGrid);*/


/*	This function looks for change in grid input, and
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