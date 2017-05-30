var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is a paragraph from a component.'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewUpdate: function (updates) {
        this.setState(updates);
    },

    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onUpdate={this.handleNewUpdate} />
            </div>
        );
    }
});

module.exports = Greeter;