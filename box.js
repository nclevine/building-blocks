var sandbox = $('.sandbox');
var sampleConfig = {
	width: 200,
	height: 75,
	depth: 100,
	color: 'rgba(40,200,200,0.3)'
}
function Box (config) {
	var container = $('<div class="box-container"></div>')
		xFace = $('<div class="face x-face"></div>'),
		yFace = $('<div class="face y-face"></div>'),
		zFace = $('<div class="face z-face"></div>');
	xFace.css({
		'width': config.depth,
		'height': config.height,
		'top': 'calc(50% - ' + (config.height / 2) + 'px)',
		'left': 'calc(50% - ' + (config.depth / 2) + 'px)',
		'transform': 'rotateY(90deg) translateZ(' + (config.width / 2) + 'px)'
	});
	var xFace2 = xFace.clone().css({ 'transform': 'rotateY(90deg) translateZ(' + (config.width / -2) + 'px)' });
	yFace.css({
		'width': config.width,
		'height': config.depth,
		'top': 'calc(50% - ' + (config.depth / 2) + 'px)',
		'left': 'calc(50% - ' + (config.width / 2) + 'px)',
		'transform': 'rotateX(90deg) translateZ(' + (config.height / 2) + 'px)'
	});
	var yFace2 = yFace.clone().css({ 'transform': 'rotateX(90deg)  translateZ(' + (config.height / -2) + 'px)' });
	zFace.css({
		'width': config.width,
		'height': config.height,
		'top': 'calc(50% - ' + (config.height / 2) + 'px)',
		'left': 'calc(50% - ' + (config.width / 2) + 'px)',
		'transform': 'translateZ(' + (config.depth / 2) + 'px)'
	});
	var zFace2 = zFace.clone().css({ 'transform': 'translateZ(' + (config.depth / -2) + 'px)' });
	container.append(xFace, xFace2, yFace, yFace2, zFace, zFace2);
	// container.children().css({ 'background-color': config.color });
	sandbox.append(container);
}
var sampleBox = new Box(sampleConfig);
