/*

sample config:

var letterConfig = {
	size: 200,
	depth: 20,
	bold: true	// this will change the weight of the letter and can be omitted
};

*/

function LetterN (config, parentSelector) {

	var parent = $(parentSelector);

	var container = $('<div class="letter-container letter-n"></div>').css({
		'width': config.size,
		'height': config.size
	}),
		weight = config.bold ? (config.size / 4) : (config.size / 5),
		diagonalAngle = Math.atan((config.size - weight * 0.7) / config.size),
		glyphFace = $('<div class="glyph"></div>').css({
			'width': config.size,
			'height': config.size,
			'transform': 'translateZ(' + (config.depth / 2) + 'px)'
		}),
		verticalBar = $('<div class="vertical-bar"></div>').css({
			'width': weight,
			'height': config.size
		}),
		verticalBar2 = verticalBar.clone().css('right', 0);
		verticalBar.css('left', 0);
	var diagonalBar = $('<div class="diagonal-bar"></div>').css({
		'width': weight,
		'height': Math.sqrt(2 * Math.pow(config.size, 2)),
		'bottom': 0,
		'right': 0,
		'transform': 'rotateZ(-' + diagonalAngle + 'rad)',
		'transform-origin': 'left bottom'
	});
		glyphFace.append(verticalBar, verticalBar2, diagonalBar);
	var glyphFace2 = glyphFace.clone().css({
		'transform': 'translateZ(' + (config.depth / -2) + 'px)'
	}),
		verticalEdge = verticalBar.clone().addClass('edge').css({
			'width': config.depth,
			'left': config.depth / -2,
			'transform': 'rotateY(90deg)',
		}),
		verticalEdge2 = verticalEdge.clone().css('left', (weight - config.depth / 2)),
		verticalEdge3 = verticalEdge.clone().css('left', (config.size - weight - config.depth / 2)),
		verticalEdge4 = verticalEdge.clone().css('left', (config.size - config.depth / 2)),
		diagonalEdge = $('<div class="diagonal-bar edge"></div>').css({
			'width': config.depth,
			'height': config.size * 0.95,
			'bottom': 0,
			'left': config.size - weight,
			'transform': 'translateZ(' + (config.depth / 2) + 'px) rotateY(90deg) rotateX(' + diagonalAngle + 'rad)',
			'transform-origin': 'left bottom'
		}),
		diagonalEdge2 = diagonalEdge.clone().css({
			'top': 0,
			'bottom': 'auto',
			'left': weight,
			'transform-origin': 'left top'
		}),
		foot = $('<div class="foot edge"></div>').css({
			'width': weight,
			'height': config.depth,
			'top': config.depth / -2,
			'left': 0,
			'transform': 'rotateX(90deg)'
		}),
		foot2 = foot.clone().css('left', (config.size - weight)),
		foot3 = foot.clone().css('top', (config.size - config.depth / 2)),
		foot4 = foot.clone().css({
			'top': config.size - config.depth / 2,
			'left': config.size - weight
		});

	container.append(glyphFace, glyphFace2, verticalEdge, verticalEdge2, verticalEdge3, verticalEdge4, diagonalEdge, diagonalEdge2, foot, foot2, foot3, foot4);

	parent.append(container);
}

function LetterO (config, parentSelector) {
	var weight = config.bold ? (config.size / 4) : (config.size / 5),
		cylConfig = {
			radius: config.size / 2,
			height: config.depth,
			resolution: 1,
			thickness: weight,
			isLetter: true
		},
		letter = new Cylinder(cylConfig, parentSelector);
}

function LetterA (config, parentSelector) {
	var parent = $(parentSelector);

	var container = $('<div class="letter-container letter-a"></div>').css({
		'width': config.size,
		'height': config.size
	}),
		weight = config.bold ? (config.size / 4) : (config.size / 5),
		diagonalAngle = Math.atan((config.size / 2 - weight / 2) / config.size),
		glyphFace = $('<div class="glyph"></div>').css({
			'width': config.size,
			'height': config.size,
			'transform': 'translateZ(' + (config.depth / 2) + 'px)'
		}),
		diagonalBar = $('<div class="diagonal-bar"></div>').css({
			'width': weight,
			'height': Math.sqrt(Math.pow(config.size, 2) + Math.pow((config.size / 2 - weight), 2)),
			'bottom': 0,
			'transform': 'rotateZ(' + diagonalAngle + 'rad)',
			'transform-origin': 'right bottom'
		}),
		diagonalBar2 = diagonalBar.clone().css({
			'right': 0,
			'transform': 'rotateZ(' + (-diagonalAngle) + 'rad)',
			'transform-origin': 'left bottom'
		}),
		crossBar = $('<div class="cross-bar"></div>').css({
			'width': config.size / 2,
			'height': weight,
			'top': '50%',
			'left': 'calc(50% - ' + (config.size / 4) + 'px)'
		});
		glyphFace.append(diagonalBar, diagonalBar2, crossBar);
	var glyphFace2 = glyphFace.clone().css({
		'transform': 'translateZ(' + (config.depth / -2) + 'px)'
	}),
		diagonalEdge = $('<div class="diagonal-bar edge"></div>').css({
			'width': config.depth,
			'height': (config.size - weight * Math.sin(diagonalAngle)) / Math.cos(diagonalAngle),
			'bottom': 0,
			'left': weight - config.depth,
			'transform': 'translateZ(' + (config.depth / 2) + 'px) rotateZ(' + diagonalAngle + 'rad) rotateY(-90deg) translateZ(' + weight + 'px)',
			'transform-origin': 'right bottom'
		}),
		diagonalEdge2 = diagonalEdge.clone().css({
			'transform': 'translateZ(' + (config.depth / 2) + 'px) rotateZ(' + diagonalAngle + 'rad) rotateY(-90deg)',
		}),
		diagonalEdge3 = diagonalEdge.clone().css({
			'left': config.size - weight,
			'transform': 'translateZ(' + (config.depth / 2) + 'px) rotateZ(' + (diagonalAngle * -1) + 'rad) rotateY(90deg) translateZ(' + weight + 'px)',
			'transform-origin': 'left bottom'
		}),
		diagonalEdge4 = diagonalEdge3.clone().css({
			'transform': 'translateZ(' + (config.depth / 2) + 'px) rotateZ(' + (diagonalAngle * -1) + 'rad) rotateY(90deg)',
		}),
		crossBarEdge = crossBar.clone().addClass('edge').css({
			'height': config.depth,
			'top': 'calc(50% - ' + (config.depth / 2) + 'px)',
			'transform': 'rotateX(90deg)'
		}),
		crossBarEdge2 = crossBarEdge.clone().css('top', 'calc(50% + ' + (weight - config.depth / 2) + 'px)'),
		foot = $('<div class="foot edge"></div>').css({
			'width': weight,
			'height': config.depth,
			'bottom': 0,
			'transform': 'translateZ(' + (config.depth / 2) + 'px) rotateZ(' + diagonalAngle + 'rad) rotateX(90deg)',
			'transform-origin': 'right bottom'
		}),
		foot2 = foot.clone().css({
			'right': 0,
			'transform': 'translateZ(' + (config.depth / 2) + 'px) rotateZ(' + (-diagonalAngle) + 'rad) rotateX(90deg)',
			'transform-origin': 'left bottom'
		}),
		foot3 = $('<div class="foot edge"></div>').css({
			'width': weight * 1.16,
			'height': config.depth,
			'top': config.depth / -2,
			'left': 'calc(50% - ' + ((weight * 1.16) / 2) + 'px)',
			'transform': 'rotateX(90deg)'
		});

	container.append(glyphFace, glyphFace2, diagonalEdge, diagonalEdge2, diagonalEdge3, diagonalEdge4, crossBarEdge, crossBarEdge2, foot, foot2, foot3);

	parent.append(container);
}

function LetterH (config, parentSelector) {
	var parent = $(parentSelector);

	var container = $('<div class="letter-container letter-h"></div>').css({
		'width': config.size,
		'height': config.size
	}),
		weight = config.bold ? (config.size / 4) : (config.size / 5),
		glyphFace = $('<div class="glyph"></div>').css({
			'width': config.size,
			'height': config.size,
			'transform': 'translateZ(' + (config.depth / 2) + 'px)'
		}),
		crossBar = $('<div class="cross-bar"></div>').css({
			'width': config.size,
			'height': weight,
			'top': 'calc(50% - ' + (weight / 2) + 'px)'
		}),
		verticalBar = $('<div class="vertical-bar"></div>').css({
			'width': weight,
			'height': config.size
		}),
		verticalBar2 = verticalBar.clone().css('right', 0);
		verticalBar.css('left', 0);
		glyphFace.append(verticalBar, verticalBar2, crossBar);
	var glyphFace2 = glyphFace.clone().css({
		'transform': 'translateZ(' + (config.depth / -2) + 'px)'
	}),
		verticalEdge = verticalBar.clone().addClass('edge').css({
			'width': config.depth,
			'left': config.depth / -2,
			'transform': 'rotateY(90deg)',
		}),
		verticalEdge2 = verticalEdge.clone().css('left', (weight - config.depth / 2)),
		verticalEdge3 = verticalEdge.clone().css('left', (config.size - weight - config.depth / 2)),
		verticalEdge4 = verticalEdge.clone().css('left', (config.size - config.depth / 2)),
		crossBarEdge = crossBar.clone().addClass('edge').css({
			'height': config.depth,
			'top': 'calc(50% - ' + (weight / 2 + config.depth / 2) + 'px)',
			'transform': 'rotateX(90deg)'
		}),
		crossBarEdge2 = crossBarEdge.clone().css('top', 'calc(50% + ' + (weight / 2 - config.depth / 2) + 'px)'),
		foot = $('<div class="foot edge"></div>').css({
			'width': weight,
			'height': config.depth,
			'top': config.depth / -2,
			'left': 0,
			'transform': 'rotateX(90deg)'
		}),
		foot2 = foot.clone().css('left', (config.size - weight)),
		foot3 = foot.clone().css('top', (config.size - config.depth / 2)),
		foot4 = foot.clone().css({
			'top': config.size - config.depth / 2,
			'left': config.size - weight
		});

	container.append(glyphFace, glyphFace2, verticalEdge, verticalEdge2, verticalEdge3, verticalEdge4, crossBarEdge, crossBarEdge2, foot, foot2, foot3, foot4);

	parent.append(container);
}