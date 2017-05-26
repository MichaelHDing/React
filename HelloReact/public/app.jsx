var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!'}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        this.props.onUpdate(updates)
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="EnterName" />
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter Message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

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

var firstName = 'Michael';
var necMessage = 'This ended up working!';

ReactDOM.render(
    <Greeter name={firstName} message={necMessage} />,
    document.getElementById('app')
);