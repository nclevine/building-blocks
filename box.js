/*

sample config:

var boxConfig = {
	width: 250,
	height: 200,
	depth: 150,
};

*/

function Box (config, parentSelector) {

	var parent = $(parentSelector);

	var container = $('<div class="box-container"></div>')
		xFace = $('<div class="face x-face"></div>').css({
			'width': config.depth,
			'height': config.height,
			'top': 'calc(50% - ' + (config.height / 2) + 'px)',
			'left': 'calc(50% - ' + (config.depth / 2) + 'px)',
			'transform': 'rotateY(90deg) translateZ(' + (config.width / 2) + 'px)'
		}),
		xFace2 = xFace.clone().css({ 'transform': 'rotateY(90deg) translateZ(' + (config.width / -2) + 'px)' }),
		yFace = $('<div class="face y-face"></div>').css({
			'width': config.width,
			'height': config.depth,
			'top': 'calc(50% - ' + (config.depth / 2) + 'px)',
			'left': 'calc(50% - ' + (config.width / 2) + 'px)',
			'transform': 'rotateX(90deg) translateZ(' + (config.height / 2) + 'px)'
		}),
		yFace2 = yFace.clone().css({ 'transform': 'rotateX(90deg)  translateZ(' + (config.height / -2) + 'px)' }),
		zFace = $('<div class="face z-face"></div>').css({
			'width': config.width,
			'height': config.height,
			'top': 'calc(50% - ' + (config.height / 2) + 'px)',
			'left': 'calc(50% - ' + (config.width / 2) + 'px)',
			'transform': 'translateZ(' + (config.depth / 2) + 'px)'
		}),
		zFace2 = zFace.clone().css({ 'transform': 'translateZ(' + (config.depth / -2) + 'px)' });
	
	container.append(xFace, xFace2, yFace, yFace2, zFace, zFace2);
	
	parent.append(container);
}
