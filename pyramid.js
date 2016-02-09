/*

sample config:

var pyrConfig = {
	width: 275,
	height: 400,
	depth: 325
};

*/

function Pyramid (config, parentSelector) {

	var parent = $(parentSelector);

	var xFaceHeight = Math.sqrt(Math.pow((config.width / 2), 2) + Math.pow(config.height, 2)),
		xFaceHeightDiff = xFaceHeight - config.height,
		xFaceAngle = (Math.PI / 2) - Math.atan(2 * config.height / config.width),
		zFaceHeight = Math.sqrt(Math.pow((config.depth / 2), 2) + Math.pow(config.height, 2)),
		zFaceHeightDiff = zFaceHeight - config.height,
		zFaceAngle = (Math.PI / 2) - Math.atan(2 * config.height / config.depth),
		widthDepthDiff = config.width - config.depth;

	var container = $('<div class="pyramid-container"></div>').css({
		'width': config.width,
		'height': config.height
	}),
		xFace = $('<div class="face x-face triangle"></div>').css({
			'left': widthDepthDiff > 0 ? (widthDepthDiff / 2) : 0,
			'border-width': '0 ' + (config.depth / 2) + 'px ' + xFaceHeight + 'px ' + (config.depth / 2) + 'px',
			'transform': 'rotateY(90deg) rotateX(' + xFaceAngle + 'rad) translateY(' + xFaceHeightDiff + 'px) translateZ(' + (config.width / 2) + 'px)'
		}),
		xFace2 = xFace.clone().css({
			'transform': 'rotateY(90deg) rotateX(' + (xFaceAngle * -1) + 'rad) translateY(' + xFaceHeightDiff + 'px) translateZ(' + (config.width / -2) + 'px)'
		}),
		yFace = $('<div class="face y-face"></div>').css({
			'left': widthDepthDiff < 0 ? (widthDepthDiff / -2) : 0,
			'width': config.width,
			'height': config.depth,
			'transform': 'rotateX(90deg) translateZ(' + ((config.height - (config.depth / 2) - 1) * -1) + 'px)'
		}),
		zFace = $('<div class="face z-face triangle"></div>').css({
			'left': widthDepthDiff < 0 ? (widthDepthDiff / -2) : 0,
			'border-width': '0 ' + (config.width / 2) + 'px ' + zFaceHeight + 'px ' + (config.width / 2) + 'px',
			'transform': 'rotateX(' + zFaceAngle + 'rad) translateY(' + zFaceHeightDiff + 'px) translateZ(' + (config.depth / 2) + 'px)'
		}),
		zFace2 = zFace.clone().css({
			'transform': 'rotateX(' + (zFaceAngle * -1) + 'rad) translateY(' + zFaceHeightDiff + 'px) translateZ(' + (config.depth / -2) + 'px)'
		});

	container.append(xFace, xFace2, zFace, zFace2, yFace);
	
	parent.append(container);
}
