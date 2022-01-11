const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) 
        + '.json?access_token=pk.eyJ1Ijoiemd1aWxoZXJtZWRldiIsImEiOiJja3kyMXk2bDAwZ3ByMndvbHVoNTlsMTRzIn0.w93rRsjhvdIA85MK-uX_Pw'

    request({url, json: true}, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to location service!', undefined)
        }
        else if(body.features.length === 0) {
            callback('Unable to find location. try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        } 
    });

}

module.exports = geocode;

