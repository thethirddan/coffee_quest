var explore = function(floorSquare, dungeon){

	//check if square is able to be clicked?
	if (inBounds(floorSquare, dungeon)){
		//determine what's in the square.
		discoverEncounter(floorSquare, dungeon);
		
		//TODO: call square encounter

		//change square data (visibility)
		renderSquare(floorSquare, 'clear');

		//render dungeon
		setDungeonVisibility(dungeon);
	}

	//not inbounds? log it?
};

var createDungeon = function(dimX, dimY) {
	// create empty dungeon array dungeon[dungeonId][dimX][dimY]
	dungeon = [[]];

	for (x = 0; x < dimX; x++) { 
    	for (y = 0; y < dimY; y++) { 
    		dungeon[x][y].vis = 'hidden';
    		dungeon[x][y].enc = '';
		}
	}
	
	// needs starting position -> used to generate can-click spaces
	dungeon = createDungeonStart(dungeon, dimX, dimY);

	dungeon = setDungeonVisibility(dungeon);

	return dungeon;
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

	renderSquare(randomFloorSquare, 'clear');

	return dungeon;
};

var setDungeonVisibility = function(dungeon){
	var vis; //clear, hidden or clickable
	var squareVis;
	//loop through all squares
	for (var x = 0; x < dungeon.length; x++) {
		for (var y = 0; y < dungeon[x].length; y++) {

			squareVis = dungeon[x][y].vis;
			
			if (squareVis != 'clear' && squareNextToVisible(floorSquare, dungeon)) {
				vis = 'clickable';
			} else {
				vis = squareVis;
			}

			renderSquare(floorSquare, vis);
		}
	}

	return dungeon;
};

var renderSquare = function(floorSquare, visibility){
	// set appt visibility

};

var squareNextToVisible = function(floorSquare, dungeon){
	//check the 4 squares next to the passed in square
	// (-1,0), (1,0), (0,-1), (0,1)
	if (diffSquares() || diffSquares() || diffSquares() ||diffSquares() ){
		return true;
	} else {
		return false;
	}
};

var diffSquares = function(sq1, sq2) {
	//if one square is visible and one square isn't
		return true;
	//else
		return false;
}

var inBounds = function(floorSquare, dungeon){
	//if a square is inbounds of a dungeon
		return true;
	//else
		return false;

};