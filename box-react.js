class Box extends React.Component {
	constructor(props) {
		super(props);
	}
}

class Face extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var rotate = (this.props.axis === 'y') ? 'rotateX(90deg)' : ((this.props.axis === 'x') ? 'rotateY(90deg)' : '');
		var translate = (this.props.parity === 'front') ? 
		var style = {
			width: this.props.width,
			height: this.props.height,
			top: 'calc(50% - ' + (this.props.height / 2) + 'px)',
			left: 'calc(50% - ' + (this.props.width / 2) + 'px)',
			transform: 
		}
	}
}
