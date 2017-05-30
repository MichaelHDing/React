var axios = require('axios');

const OPEN_WEATHER_APP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2a51c65ca2c0c2b48bfc2a0d502b341f&units=imperial';

//2a51c65ca2c0c2b48bfc2a0d502b341f

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_APP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res){
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}