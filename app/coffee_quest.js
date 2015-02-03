var Dungeon = function (name, sizeX, sizeY) {
	var that = this;

	this.name = name;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.HTML;

	this.dungeon = dungeon = [];

	for (x = 0; x < sizeX; x++) { 
		dungeon[x] = [];

		for (y = 0; y < sizeY; y++) {
			dungeon[x][y] = {};
			dungeon[x][y].vis = 'darkSquare';
			 
		}
	}
	
	//create the start and render it.
	createDungeonStart();
	setDungeonVisibility();
	renderDungeonHTML();

	
	
	//privileged function, can call private functions. 
	this.explore = function (sqId) {
		console.log(dungeon);
		console.log(sqId);

		//sqId is equal to x-y ex (2-5)
		var coords;
		var x;
		var y;

		coords = sqId.split("_");
		x = coords[0];
		y = coords[1];

		//check if square is able to be clicked?
		if (inBounds(x, y) && dungeon[x][y].vis == "clickableSquare"){

			//determine what's in the square.
			//discoverEncounter(floorSquare, dungeon);
				
			//TODO: call square encounter

			//change square data (visibility)
			setSquareData(dungeon[x][y], 'clearSquare', '');

			//render dungeon
			//TODO: should we do this, or just change the 4 squares around it?

			setDungeonVisibility();
			renderDungeonHTML();
		}

		return;
	}

	
	//PRIVATE FUNCTIONS...
	function inBounds (x, y) {
		if ( (x >= 0) && (x <= sizeX) && (y >= 0) && (y <= sizeY) ){
			return true;
		} else {
			return false;
		}
	}

	function createDungeonStart () {
		var xLen = sizeX - 1;
		var yLen = sizeY - 1;
		//pick a random square and make it blank

		var randX = Math.floor((Math.random() * xLen)); 
		var randY = Math.floor((Math.random() * yLen));

		var randomFloorSquare = dungeon[randX][randY];

		setSquareData(randomFloorSquare, 'clearSquare', '');
	}

	function setDungeonVisibility () {
		// iterate through squares and set dark squares nearby visible to clickable
		var vis; //clearSquare, darkSquare or clickableSquare
		var squareVis;
		var floorSquare;

		//loop through all squares
		for (var x = 0; x < sizeX; x++) {
			for (var y = 0; y < sizeY; y++) {
				floorSquare = dungeon[x][y];
				squareVis = floorSquare.vis;
				
				if (squareVis != 'clearSquare' && squareNextToVisible(x, y)) {
					vis = 'clickableSquare';
				} else {
					vis = squareVis;
				}

				setSquareData(floorSquare, vis, '');
			}
		}
	}

	function squareNextToVisible (floorSquareX, floorSquareY) {

		// return true if given square is next to visible
		var xLen = sizeX - 1;
		var yLen = sizeY - 1;

		var sq0vis = dungeon[floorSquareX][floorSquareY].vis;
		var sq1vis, sq2vis, sq3vis, sq4vis;

		//Check all 4 squares around the current square. but first make sure they exist.
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
	}

	function setSquareData (floorSquare, visibility, encounter) {
		floorSquare.vis = visibility;
	  	floorSquare.enc = encounter;
	}

	function discoverEncounter () {
		//TODO: build this at some point.
	}

	function renderDungeonHTML () {

		HTML = "<div class='row'>";

		for (var y = 0; y < dungeon.length; y++) {
			for (var x = 0; x < dungeon[y].length; x++) {
				HTML += "<div id='" + x + "_" + y + "' class='col-xs-2 "+ dungeon[x][y].vis +"' onClick='exploreSquare(\"" + x + "_" + y + "\")'>" + dungeon[x][y].vis + "</div>";
			}
			HTML += "</div><div class='row'>";
		}

		HTML += "</div>";
	}

	

	function diffSquares (sq1vis, sq2vis) {
		//if one square is visible and one square isn't
		return  (sq1vis == "clearSquare" && (sq2vis != sq1vis)) || (sq2vis == "clearSquare" && (sq2vis != sq1vis));
	}

	return that;
};



