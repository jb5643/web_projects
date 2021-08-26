
let ruleA;  // cell continuation rule (set of integers)
let ruleB;  // cell initiation rule (set of integers)
let liveCellSym;  // symbol for 'live' cell
let deadCellSym;  // symbol for 'dead' cell
let cols = 50;  // number of cols
let rows = 120;  // number of rows
let nextGen;  // array for next generation
let neighbors;  // array containing number of neighbors for each cell
let grid;
let symChosen;


//---------------------------------------------------------------------------------------------------
// stop events from refreshing page (grid content is removed otherwise)

document.getElementById("genStep").addEventListener("click",
function(event){
	event.preventDefault();
})

//---------------------------------------------------------------------------------------------------
//
function startStop() {
		console.log('startStop function called.\n');
		if(formValidate()) {
			setRules();
			generate();
		} else {
			alert("I think you missed something...");
		}
}


//-----------------------------------------------------------------------------------------------------
// 
function systemDefs() {
	var x = document.getElementById('systems').value;
	console.log("systemDefs function called, Rule = " + x + '\n');
	if(x == '23/3') {
		document.getElementById('a1').checked = false;
		document.getElementById('a2').checked = true;
		document.getElementById('a3').checked = true;
		document.getElementById('a4').checked = false;
		document.getElementById('a5').checked = false;
		document.getElementById('a6').checked = false;
		document.getElementById('a7').checked = false;
		document.getElementById('a8').checked = false;
		document.getElementById('b1').checked = false;
		document.getElementById('b2').checked = false;
		document.getElementById('b3').checked = true;
		document.getElementById('b4').checked = false;
		document.getElementById('b5').checked = false;
		document.getElementById('b6').checked = false;
		document.getElementById('b7').checked = false;
		document.getElementById('b8').checked = false;
	} else if(x == '34/34') {
		document.getElementById('a1').checked = false;
		document.getElementById('a2').checked = false;
		document.getElementById('a3').checked = true;
		document.getElementById('a4').checked = true;
		document.getElementById('a5').checked = false;
		document.getElementById('a6').checked = false;
		document.getElementById('a7').checked = false;
		document.getElementById('a8').checked = false;
		document.getElementById('b1').checked = false;
		document.getElementById('b2').checked = false;
		document.getElementById('b3').checked = true;
		document.getElementById('b4').checked = true;
		document.getElementById('b5').checked = false;
		document.getElementById('b6').checked = false;
		document.getElementById('b7').checked = false;
		document.getElementById('b8').checked = false;
	} else if(x == '34/346') {
		document.getElementById('a1').checked = false;
		document.getElementById('a2').checked = false;
		document.getElementById('a3').checked = true;
		document.getElementById('a4').checked = true;
		document.getElementById('a5').checked = false;
		document.getElementById('a6').checked = false;
		document.getElementById('a7').checked = false;
		document.getElementById('a8').checked = false;
		document.getElementById('b1').checked = false;
		document.getElementById('b2').checked = false;
		document.getElementById('b3').checked = true;
		document.getElementById('b4').checked = true;
		document.getElementById('b5').checked = false;
		document.getElementById('b6').checked = true;
		document.getElementById('b7').checked = false;
		document.getElementById('b8').checked = false;
	} else if(x == '125/36') {
		document.getElementById('a1').checked = true;
		document.getElementById('a2').checked = true;
		document.getElementById('a3').checked = false;
		document.getElementById('a4').checked = false;
		document.getElementById('a5').checked = true;
		document.getElementById('a6').checked = false;
		document.getElementById('a7').checked = false;
		document.getElementById('a8').checked = false;
		document.getElementById('b1').checked = false;
		document.getElementById('b2').checked = false;
		document.getElementById('b3').checked = true;
		document.getElementById('b4').checked = false;
		document.getElementById('b5').checked = false;
		document.getElementById('b6').checked = true;
		document.getElementById('b7').checked = false;
		document.getElementById('b8').checked = false;
	} else if(x == '1358/357') {
		document.getElementById('a1').checked = true;
		document.getElementById('a2').checked = false;
		document.getElementById('a3').checked = true;
		document.getElementById('a4').checked = false;
		document.getElementById('a5').checked = true;
		document.getElementById('a6').checked = false;
		document.getElementById('a7').checked = false;
		document.getElementById('a8').checked = true;
		document.getElementById('b1').checked = false;
		document.getElementById('b2').checked = false;
		document.getElementById('b3').checked = true;
		document.getElementById('b4').checked = false;
		document.getElementById('b5').checked = true;
		document.getElementById('b6').checked = false;
		document.getElementById('b7').checked = true;
		document.getElementById('b8').checked = false;
	} else if(x == '345/4567') {
		document.getElementById('a1').checked = false;
		document.getElementById('a2').checked = false;
		document.getElementById('a3').checked = true;
		document.getElementById('a4').checked = true;
		document.getElementById('a5').checked = true;
		document.getElementById('a6').checked = false;
		document.getElementById('a7').checked = false;
		document.getElementById('a8').checked = false;
		document.getElementById('b1').checked = false;
		document.getElementById('b2').checked = false;
		document.getElementById('b3').checked = false;
		document.getElementById('b4').checked = true;
		document.getElementById('b5').checked = true;
		document.getElementById('b6').checked = true;
		document.getElementById('b7').checked = true;
		document.getElementById('b8').checked = false;
	}
}


//-----------------------------------------------------------------------------------------------------
// startup function
function startup() {
	console.log("startup function called.\n");
	if(percentValidate()) {
		symChosen = true;
		// set symbols
		var x = document.getElementById('symbols').value;
		if(x === '1') {
			liveCellSym = '1';
			deadCellSym = '0';
		} else if(x === '2') {
			liveCellSym = '*';
			deadCellSym = '-';
		} else if(x === '3') {
			liveCellSym = '+';
			deadCellSym = '-';
		} else if(x === '4') {
			liveCellSym = '#';
			deadCellSym = '-';
		} else if(x === '5') {
			liveCellSym = '*';
			deadCellSym = ' ';
		} else if(x === '6') {
			liveCellSym = '+';
			deadCellSym = ' ';
		} else if(x === '7') {
			liveCellSym = '#';
			deadCellSym = ' ';
		}
		gen = 0;
		// create 2d grid, neighbors, currGen, and nextGen arrays 
		grid = []
		neighbors = []
		nextGen = []
		for(var i = 0; i < cols; i++) {
			grid[i] = []
			neighbors[i] = []
			nextGen[i] = []
		}
		// initiate grid values
	
		if(document.getElementById("5%").checked === true) {
			var percent =  0.45;
		} else if(document.getElementById("10%").checked === true) {
			var percent =  0.40;
		} else if(document.getElementById("20%").checked === true) {
			var percent =  0.30;
		} else if(document.getElementById("30%").checked === true) {
			var percent =  0.20;
		} else if(document.getElementById("50%").checked === true) {
			var percent =  0.00;
		} else {
			var percent =  0;
		}
	
		// initiate grid values
		var n = 0;
		for(var i = 0; i < cols; i++) {
			for(var j = 0; j < rows; j++) {
				n = Math.round(Math.random() - percent);
				if(n == 1) {
					grid[i][j] = liveCellSym;
				} else {
					grid[i][j] = deadCellSym;
				}
			}
  		}
		render();
		console.log("startup function finished.\n");
	} else {
		symChosen = false;
		alert("Initial live cell percentage is required");
	}
}


//-----------------------------------------------------------------------------------------------------


function percentValidate() {
	var x1 = document.getElementById("5%").checked;
	var x2 = document.getElementById("10%").checked;
	var x3 = document.getElementById("20%").checked;
	var x4 = document.getElementById("30%").checked;
	var x5 = document.getElementById("50%").checked;
	if(x1 === true || x2 === true || x3 === true || x4 === true || x5 === true) {
		return true;
	} else {
		return false;
	}
}


//-----------------------------------------------------------------------------------------------------


function formValidate() {
	// rule selection is not required, default is 0
	var percentValid = percentValidate();
	var symValid = symChosen;
	if(percentValid === true && symValid === true) {
		return true;
	} else {
		return false;
	}
}


//-----------------------------------------------------------------------------------------------------
// sets user defined rules
function setRules() {
	console.log("setRules function called.\n");
	ruleA = [];
	ruleB = [];
	var a = 0;
	var b = 0;
	if(document.getElementById('a1').checked == true) {
		ruleA[a] = document.getElementById('a1').value;
		a++;
	}
	if(document.getElementById('a2').checked == true) {
		ruleA[a] = document.getElementById('a2').value;
		a++;
	}
	if(document.getElementById('a3').checked == true) {
		ruleA[a] = document.getElementById('a3').value;
		a++;
	}
	if(document.getElementById('a4').checked == true) {
		ruleA[a] = document.getElementById('a4').value;
		a++;
	}
	if(document.getElementById('a5').checked == true) {
		ruleA[a] = document.getElementById('a5').value;
		a++;
	}
	if(document.getElementById('a6').checked == true) {
		ruleA[a] = document.getElementById('a6').value;
		a++;
	}
	if(document.getElementById('a7').checked == true) {
		ruleA[a] = document.getElementById('a7').value;
		a++;
	}
	if(document.getElementById('a8').checked == true) {
		ruleA[a] = document.getElementById('a8').value;
		a++;
	}
	if(document.getElementById('b1').checked == true) {
		ruleB[b] = document.getElementById('b1').value;
		b++;
	}
	if(document.getElementById('b2').checked == true) {
		ruleB[b] = document.getElementById('b2').value;
		b++;
	}
	if(document.getElementById('b3').checked == true) {
		ruleB[b] = document.getElementById('b3').value;
		b++;
	}
	if(document.getElementById('b4').checked == true) {
		ruleB[b] = document.getElementById('b4').value;
		b++;
	}
	if(document.getElementById('b5').checked == true) {
		ruleB[b] = document.getElementById('b5').value;
		b++;
	}
	if(document.getElementById('b6').checked == true) {
		ruleB[b] = document.getElementById('b6').value;
		b++;
	}
	if(document.getElementById('b7').checked == true) {
		ruleB[b] = document.getElementById('b7').value;
		b++;
	}
	if(document.getElementById('b8').checked == true) {
		ruleB[b] = document.getElementById('b8').value;
		b++;
	}
	if(a == 0){
		ruleA[0] = 0;
	}
	if(b == 0){
		ruleB[0] = 0;
	}
	console.log("setRules finished.\nruleA = " + ruleA.toString() + "\nruleB = " + ruleB.toString() + "\n");
}


//-----------------------------------------------------------------------------------------------------
// find number of neighbors for each cell, store as 2d array
function findNeighbors() {
	console.log("findNeighbors function called. gen = " + gen + "\n");
	var n = 0;
	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			// ignore edges
			if(i != 0 && i != (cols-1) && j != 0 && j != (rows-1)) {
				if(grid[i - 1][j - 1] == liveCellSym) {
					n++;
				}
				if(grid[i + 1][ j + 1] == liveCellSym) {
					n++;
				}
				if(grid[i + 1][j - 1] == liveCellSym) {
					n++;
				}
				if(grid[i - 1][j + 1] == liveCellSym) {
					n++;
				}
				if(grid[i][j - 1] == liveCellSym) {
					n++;
				}
				if(grid[i][j + 1] == liveCellSym) {
					n++;
				}
				if(grid[i - 1][j] == liveCellSym) {
					n++;
				}
				if(grid[i + 1][j] == liveCellSym) {
					n++;
				}
				neighbors[i][j] = n;
				n = 0;
			} else {
				neighbors[i][j] = 0;
			}
		}
	}
	//console.log('Gen = ' + gen + ',  neighbors = ' + neighbors.toString() + '\n');
}


//-----------------------------------------------------------------------------------------------------
// generates cellular automata evolution
function generate() {
		console.log("generate function called. gen = " + gen + "\n");	
		findNeighbors();  // begin by updating neighbors array
		console.log('neighbors found, calculating nextGen...\n');
		// set nextGen values using defined rules
		for(var i = 0; i < cols; i++) {
			for(let j = 0; j < rows; j++) {
				for(var k = 0; k < ruleA.length; k++) {
					// determine which cells continue to live
					if(ruleA[k] == neighbors[i][j] && grid[i][j] == liveCellSym && nextGen[i][j] == null) {
						nextGen[i][j] = liveCellSym;
					}
				}
				for(var k = 0; k < ruleB.length; k++) {
					// determine which cells become alive
					if(ruleB[k] == neighbors[i][j] && grid[i][j] == deadCellSym && nextGen[i][j] == null) {
						nextGen[i][j] = liveCellSym;
					}
					if(nextGen[i][j] == null) {
						nextGen[i][j] = deadCellSym;
					}
				}
			}
		}
		// set grid values to nextGen values
		for(var i = 0; i < cols; i++) {
			for(let j = 0; j < rows; j++) {
				grid[i][j] = nextGen[i][j];
				nextGen[i][j] = null;
			}
		}
		gen++;
		render();  // display new genetation in text area
}


//-----------------------------------------------------------------------------------------------------
function render() {
	//console.log('render:  Gen = ' + gen + '\n');
	console.log('render function called.\n')
	var string = '';
	for(var i = 0; i < cols; i++) {
		for(var j = 0; j < rows; j++) {
			string = string + grid[i][j];
		}
		string = string + '\n';
	}
	document.getElementById('textGrid').textContent = string;  // update textGrid with new generation
}


//-----------------------------------------------------------------------------------------------------
// show current generation number onmouseover
function showGen() {
	document.getElementById('tooltipGen').style.visibility = "visible";
	document.getElementById('tooltipGen').textContent = "Generation = " + gen;
}


//-----------------------------------------------------------------------------------------------------
// hide current generation number onmouseover
function hideGen() {
	document.getElementById('tooltipGen').style.visibility = "hidden";
}


