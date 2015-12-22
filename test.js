var parentSelector = '.sandbox'

var boxConfig = {
	width: 250,
	height: 200,
	depth: 150,
	color: 'rgba(40,200,200,0.3)'
};

var box = new Box(boxConfig, parentSelector);

var pyrConfig = {
	width: 275,
	height: 400,
	depth: 325
};

var pyramid = new Pyramid(pyrConfig, parentSelector);

var cylConfig = {
	radius: 200,
	height: 50,
	resolution: 1,
	thickness: 30
};

var cylinder = new Cylinder(cylConfig, parentSelector);
