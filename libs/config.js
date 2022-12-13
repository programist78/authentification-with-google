
const config = {};

config.port = 3000;

config.mongoose = {
    "uri": "YOUR_URI",
    "options": {
        "keepAlive": 1,
        "autoIndex": false,
        "useNewUrlParser": true,
        "poolSize" : 10
    }
};

config.session = {
    "secret": "YOUR_SECRET_KEY",
    "key": "sid",
    "cookie": {
        "path": "/",
        "httpOnly": true,
        "maxAge": null
    }
};

config.oauth = {
    'googleAuth' : {
        'clientID': 'YOUR_CLIENT_ID',
        'clientSecret': 'YOUR_CLIENT_SECRET',
        'callbackURL': '/registration/google/callback'
    },
};

module.exports = config;