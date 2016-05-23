var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass({
	render: function() {
		return <h2>Hello {this.props.name}</h2>;
	}
});

var Timer = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        }
    },
    tick: function() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    },
    componentDidMount: function() {
        this.timer = window.setInterval(this.tick, 1000);
    },
    componentWillUnmount() {
        window.clearInterval(this.timer);
    },
    render: function() {
        return (
            <p>正在计时：<span>{this.state.seconds}</span>秒</p>
        );
    }
})

ReactDom.render(<Hello name="werweadsfasd" />, document.querySelector('#box'));
ReactDom.render(<Timer />, document.querySelector('#timer-container'));