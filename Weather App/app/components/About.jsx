var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is my first React app! It's a weather app that takes locations and spits out the tempurature. Given that I've never learned html or javascript before I think it's prettttyy good!</p>
            <ol>
                <li>
                    <a href="https://github.com/MichaelHDing/React">GitHub</a> - Take a look at the code!
                </li>
                <li>
                    <a href="https://dashboard.heroku.com/apps/hidden-hollows-92583">Heroku</a> - Something!
                </li>
                <li>
                    <a href="http://openweathermap.org/">OpenWeatherMap</a> - Where I get the weather data from!
                </li>
            </ol>
        </div>
    );
};

module.exports = About;