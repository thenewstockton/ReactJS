var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6069';


var service = {
    get: function(url) {
        return fetch(baseUrl + url).then(function(response){
            console.log(response.json());
            return response.json();
        });
    }
}

module.exports = service;