var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Michael Ding';
var necMessage = 'This ended up working!';

ReactDOM.render(
    <Greeter name={firstName} message={necMessage} />,
    document.getElementById('app')
);