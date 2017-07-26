var ids = {
  github: { // the below ids are only user for the starter kit and not for production
    clientID: 'ddadff926dfb4f7826ef', // get_your_own
    clientSecret: 'c0a3a61885efb1bdcda1fff499d0f9ba8e4e174b', // get_your_own
    callbackURL: "http://127.0.0.1:3000/auth/github/callback" // get_your_own
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