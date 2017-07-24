var ids = {
  github: {
    clientID: '25f8d50a40fb0b8f1423',
    clientSecret: 'dd4303362a9e40ef65c8a3205a602699062d7121',
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  linkedin: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  },
  twitter: {
    consumerKey: 'get_your_own',
    consumerSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  }
};

module.exports = ids;

// "http://127.0.0.1:3000/auth/github/callback"

// callbackURL: "https://my_nodejs_server.herokuapp.com/auth/github/callback"