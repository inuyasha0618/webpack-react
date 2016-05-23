var React = require('react');
var ReactDom = require('react-dom');
// var query = document.querySelector;

var Hello = React.createClass({
	render: function() {
		return <h2>Hello {this.props.name}</h2>;
	}
});

var List = React.createClass({
    makeGroup: function(val) {
        return <li key={val.key}>{val.text}</li>;
    },
    render: function() {
        return (
            <ul>
                {this.props.items.map(this.makeGroup)}
            </ul>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            items: []
        }
    },
    handleChange: function(e) {
        this.setState({
            text: e.target.value
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.setState({
            items: this.state.items.concat([{key: +new Date, text: this.state.text}]),
            text: ''
        });
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.text} />
                    <button type="submit">Add {this.state.items.length}</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
});

ReactDom.render(<Hello name="tiecheng" />, document.querySelector('#box'));
ReactDom.render(<TodoApp />, document.querySelector('#todo-container'));