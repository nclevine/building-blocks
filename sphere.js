/*

sample config:

sphereConfig: {
	radius: 300,
	resolution: 5	// determines number of panels used
};

*/

function Sphere (config, parentSelector) {

	var parent = $(parentSelector);

	var numRings = parseInt(config.radius / config.resolution),
		ringHeight = 2 * Math.PI * config.radius / numRings,
		verticalAngleInterval = 2 * Math.PI / numRings;

	var container = $('<div class="sphere-container"></div>').css({
		'width': config.radius * 2,
		'height': config.radius * 2
	});

	var yTranslation = 0;

	for (var i = 0; i < (numRings / 4); i++) {
		var verticalAngle = i * verticalAngleInterval
			ringRadius = Math.abs(config.radius * Math.cos(verticalAngle)),
			numFaces = parseInt(ringRadius / config.resolution),
			faceWidth = 2 * Math.PI * ringRadius / numFaces,
			horizontalAngleInterval = 2 * Math.PI / numFaces;

		for (var j = 0; j < numFaces; j++) {
			var horizontalAngle = j * horizontalAngleInterval,
				ringSegmentUpper = $('<div class="face sphere-face"></div>').css({
					'width': faceWidth,
					'height': ringHeight,
					'transform': 'translateY(' + yTranslation + 'px) rotateY(' + (Math.PI - horizontalAngle) + 'rad) translateZ(' + ringRadius + 'px) rotateX(' + verticalAngle + 'rad)',
				});
			container.append(ringSegmentUpper);
			if (yTranslation !== 0) {
				var ringSegmentLower = ringSegmentUpper.clone().css({
					'transform': 'translateY(' + (-yTranslation) + 'px) rotateY(' + (Math.PI - horizontalAngle) + 'rad) translateZ(' + ringRadius + 'px) rotateX(' + (Math.PI - verticalAngle) + 'rad)',
				});
				container.append(ringSegmentLower);
			}
			// container.append(ringSegmentUpper, ringSegmentLower);
		};

		yTranslation = yTranslation + (ringHeight * Math.cos(Math.PI - verticalAngle));
	};

	parent.append(container);
}
