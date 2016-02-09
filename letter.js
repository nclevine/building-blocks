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
		'transform-origin': 'bottom left'
	});
		glyphFace.append(verticalBar, verticalBar2, diagonalBar);
	var glyphFace2 = glyphFace.clone(false, true).css({
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
			'transform-origin': 'bottom left'
		}),
		diagonalEdge2 = diagonalEdge.clone().css({
			'top': 0,
			'bottom': 'auto',
			'left': weight,
			'transform-origin': 'top left'
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
			'top': (config.size - config.depth / 2),
			'left': (config.size - weight)
		});

	container.append(glyphFace, glyphFace2, verticalEdge, verticalEdge2, verticalEdge3, verticalEdge4, diagonalEdge, diagonalEdge2, foot, foot2, foot3, foot4);

	parent.append(container);
}

function LetterA (config, parentSelector) {
	var parent = $(parentSelector);

	var container = $('<div class="letter-container letter-a"></div>').css({
		'width': config.size,
		'height': config.size
	});

	parent.append(container);
}