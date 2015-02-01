function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

var explore = function(floorSquare, dungeon){

	//check if square is able to be clicked?
	if (inBounds(floorSquare, dungeon)){
		//determine what's in the square.
		discoverEncounter(floorSquare, dungeon);
		
		//TODO: call square encounter

		//change square data (visibility)
		setSquareData(floorSquare, 'clear', '');

		//render dungeon
		//TODO: should we do this, or just change the 4 squares around it?
		setDungeonVisibility(dungeon);
	}

	//not inbounds? log it?
};

var createDungeon = function(dimX, dimY) {
	// create empty dungeon array dungeon[dimX][dimY]
	var dungeon = createArray(1, 1);

	for (x = 0; x < dimX; x++) { 
		dungeon[x] = [];

    	for (y = 0; y < dimY; y++) { 
    		dungeon[x][y] = {};

    		dungeon[x][y].vis = 'hidden';
    		dungeon[x][y].enc = '';

		}
	}

	console.log(dungeon);

	// needs starting position -> used to generate can-click spaces
	dungeon = createDungeonStart(dungeon, dimX, dimY);

	dungeon = setDungeonVisibility(dungeon);

	dungeonHTML = renderDungeonHTML(dungeon);

	return dungeonHTML;
};

var discoverEncounter = function(floorSquare, dungeon) {
	//figure out what goes in the square.
	//for now, just randomly?

	//exit square:
		//do not pick exit square if one exists
		//if this is the last square, AND no exit exists, this MUST be an exit

	return e;
};

var createDungeonStart = function(dungeon, dimX, dimY) {
	//pick a random square and make it blank
	var randX = Math.floor((Math.random() * dimX) + 1); 
	var randY = Math.floor((Math.random() * dimY) + 1);
	var randomFloorSquare = dungeon[randX][randY];

	setSquareData(randomFloorSquare, 'clear','');

	return dungeon;
};

var setDungeonVisibility = function(dungeon){
	var vis; //clear, hidden or clickable
	var squareVis;
	//loop through all squares
	for (var x = 0; x < dungeon.length; x++) {
		for (var y = 0; y < dungeon[x].length; y++) {

			squareVis = dungeon[x][y].vis;
			
			if (squareVis != 'clear' && squareNextToVisible(dungeon, x, y)) {
				vis = 'clickable';
			} else {
				vis = squareVis;
			}

			dungeon[x][y] = setSquareData(dungeon[x][y], vis, '');
		}
	}

	return dungeon;
};


var setSquareData = function(floorSquare, visibility, encounter){
	// set appt visibility
	floorSquare.vis = visibility;
    floorSquare.enc = encounter;

    return floorSquare;

};


var renderDungeonHTML = function(dungeon){
	console.log(dungeon);

	var dungeonHTML = "<div class='row'>";

	for (var x = 0; x < dungeon.length; x++) {
		for (var y = 0; y < dungeon[x].length; y++) {
			dungeonHTML += "<div class='" + dungeon[x][y].vis + "'>" + dungeon[x][y].vis + "</div>";
		}
		dungeonHTML += "</div><div class='row'>";
	}

	dungeonHTML += "</div>";

	return dungeonHTML;
}


var renderSquareHTML = function(floorSquare){

}


var squareNextToVisible = function(dungeon, floorSquareX, floorSquareY){
	console.log("x: "+ floorSquareX +",y: "+ floorSquareY);
	var xLen = dungeon.length;
	var yLen = dungeon[0].length;

	var sq0vis = dungeon[floorSquareX][floorSquareY].vis;
	var sq1vis;
	var sq2vis;
	var sq3vis;
	var sq4vis;

	if (floorSquareX > 0) {
		sq1vis = dungeon[floorSquareX-1][floorSquareY].vis;
		if (diffSquares(sq0vis, sq1vis)){
			return true
		}
	}
	
	if (floorSquareX < xLen) {
		sq2vis = dungeon[floorSquareX+1][floorSquareY].vis;
		if (diffSquares(sq0vis, sq2vis)){
			return true
		}
	}

	if (floorSquareY > 0) {
		sq3vis = dungeon[floorSquareX][floorSquareY-1].vis;
		if (diffSquares(sq0vis, sq3vis)){
			return true
		}
	}

	if (floorSquareY < yLen) {
		sq4vis = dungeon[floorSquareX][floorSquareY+1].vis;
		if (diffSquares(sq0vis, sq4vis)){
			return true
		}
	}

	return false;

};

var diffSquares = function(sq1vis, sq2vis) {
	//if one square is visible and one square isn't
	if ((sq1vis == "clear" && (sq2vis == "hidden" || sq2vis == "clickable")) || (sq2vis == "clear" && (sq1vis == "hidden" || sq1vis == "clickable"))) {
		return true;
	} else {
		return false;
	}
}