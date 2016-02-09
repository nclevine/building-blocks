/*

sample config:

var cylConfig = {
	radius: 200,
	height: 50,
	resolution: 1,	// this determines how many panels make the curved side
	thickness: 30,	// this will make the cylinder a ring,
	isLetter: true 	// this is used only when instantiating a LetterN and converts the styling accordingly
};

*/

function Cylinder (config, parentSelector) {

	var parent = $(parentSelector);

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
		var angle = angleInterval * i,
			faceSegment = $('<div class="cylinder-segment"></div>').css({
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
			var angle = angleIntervalInner * i,
				faceSegment = $('<div class="cylinder-segment inner"></div>').css({
				'width': faceWidthInner + 1,
				'height': config.height,
				'top': config.radius - (config.height / 2),
				'left': config.radius - (faceWidthInner / 2),
				'transform': 'rotateY(' + (Math.PI - angle) + 'rad) translateZ(' + innerRadius + 'px)'
			});
			container.append(faceSegment);
		};
	}

	if (config.isLetter) {
		var letterContainer = $('<div class="letter-container letter-o"></div>').css({
			'width': config.radius * 2,
			'height': config.radius * 2
		});
		container.css('transform', 'rotateX(-90deg)');
		letterContainer.append(container);
		parent.append(letterContainer);
	} else {
		parent.append(container);
	}

}
