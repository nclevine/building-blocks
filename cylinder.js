var sandbox = $('.sandbox');
var sampleConfig = {
	radius: 200,
	height: 50,
	resolution: 1,
	thickness: 30
};
function Cylinder (config) {

	var numFaces = parseInt(config.radius / config.resolution),
		faceWidth = 2 * Math.PI * config.radius / numFaces,
		angleInterval = 2 * Math.PI / numFaces;

	if (config.thickness) {
		var innerRadius = config.radius - config.thickness,
			numFacesInner = parseInt(innerRadius / config.resolution),
			faceWidthInner = 2 * Math.PI * innerRadius / numFacesInner,
			angleIntervalInner = 2 * Math.PI / numFacesInner;
	}

	var container = $('<div class="cylinder-container"></div>').css({
		'width': config.radius * 2,
		'height': config.radius * 2
	}),
		baseClass = config.thickness ? 'face cylinder-base ring' : 'face cylinder-base'
		base = $('<div class="' + baseClass + '"></div>').css({
			'width': config.radius * 2,
			'height': config.radius * 2,
			'border-style': config.thickness ? 'solid' : 'none',
			'border-width': config.thickness ? config.thickness + 'px' : 0,
			'transform': 'rotateX(90deg) translateZ(' + (config.height / 2) + 'px)'
		}),
		base2 = base.clone().css({
			'transform': 'rotateX(90deg) translateZ(' + (config.height / -2) + 'px)'
		});

	container.append(base, base2);
	for (var i = 0; i < numFaces; i++) {
		var faceSegment = $('<div class="cylinder-segment"></div>'),
			angle = angleInterval * i;
		faceSegment.css({
			'width': faceWidth + 1,
			'height': config.height,
			'top': config.radius - (config.height / 2),
			'left': config.radius - (faceWidth / 2),
			'transform': 'rotateY(' + (Math.PI - angle) + 'rad) translateZ(' + config.radius + 'px)'
		});
		container.append(faceSegment);
	};
	if (config.thickness) {
		for (var i = 0; i < numFacesInner; i++) {
			var faceSegment = $('<div class="cylinder-segment inner"></div>'),
				angle = angleIntervalInner * i;
			faceSegment.css({
				'width': faceWidthInner + 1,
				'height': config.height,
				'top': config.radius - (config.height / 2),
				'left': config.radius - (faceWidthInner / 2),
				'transform': 'rotateY(' + (Math.PI - angle) + 'rad) translateZ(' + innerRadius + 'px)'
			});
			container.append(faceSegment);
		};
	}
	sandbox.append(container);
}
var sampleCylinder = new Cylinder(sampleConfig);
