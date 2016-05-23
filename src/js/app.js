var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass({
	render: function() {
		return <h2>Hello {this.props.name}</h2>;
	}
});

ReactDom.render(<Hello name="werweadsfasd" />, document.querySelector('#box'));