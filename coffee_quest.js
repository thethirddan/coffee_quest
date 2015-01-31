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

var createDungeon = function(dungeonId, dimX, dimY) {
	// create empty dungeon array dungeon[dungeonId][dimX][dimY]

	
	// needs starting position -> used to generate can-click spaces
	createDungeonStart(dungeon);

	setDungeonVisibility(dungeon);

	//return dungeon;
};

var discoverEncounter = function(floorSquare, dungeon) {
	//figure out what goes in the square.
	//for now, just randomly?

	//exit square:
		//do not pick exit square if one exists
		//if this is the last square, AND no exit exists, this MUST be an exit

	return e;
};

var createDungeonStart = function(dungeon) {
	//pick a random square and make it blank

	//set surrounding squares to 
};

var setDungeonVisibility = function(dungeon){
	var visibility; //
	//loop through all squares
		//check to see if:
			//it's been clicked
				visibility = 'clear';
			//else
				if (squareNextToVisible(floorSquare, dungeon)) {
					//it hasn't && can be.
					visibility = 'clickable';
				} else {
					//it hasn't && can't be clicked
					visibility = 'hidden';
				}
			
			
			renderSquare(floorSquare, visibility);
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