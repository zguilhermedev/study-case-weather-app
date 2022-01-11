const request = require('postman-request');

const forecast = (longitude, latitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=aab08d423ac0e2f5149988c973b10a5b&' +
        `query=${latitude},${longitude}`

    request({ url, json: true}, (error, { body } = {}) => {   
        if(error) {
           callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error) {
            callback(body.error.info, undefined);
        } else {
            const {feelslike, temperature} = body.current
            callback(undefined, `It is ${temperature} but feels like ${feelslike}`);
        }
    })

}

module.exports = forecast;

