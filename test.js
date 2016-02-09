var parentSelector = '.sandbox'

var boxConfig = {
	width: 250,
	height: 200,
	depth: 150,
};

// var box = new Box(boxConfig, parentSelector);

var pyrConfig = {
	width: 275,
	height: 400,
	depth: 325
};

// var pyramid = new Pyramid(pyrConfig, parentSelector);

var cylConfig = {
	radius: 200,
	height: 50,
	resolution: 1,
	thickness: 30
};

// var cylinder = new Cylinder(cylConfig, parentSelector);

var sphereConfig = {
	radius: 100,
	resolution: 1
};

// var sphere = new Sphere(sphereConfig, parentSelector);

var letterConfig = {
	size: 200,
	depth: 20,
	// bold: true
};

var letterN = new LetterN(letterConfig, parentSelector);
var letterO = new LetterO(letterConfig, parentSelector);
var letterA = new LetterA(letterConfig, parentSelector);
var letterH = new LetterH(letterConfig, parentSelector);
