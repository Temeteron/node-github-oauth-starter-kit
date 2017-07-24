# node-github-oauth-starter-kit
An intermediate nodejs server for github authentication(OAuth2-passport).

This server is used by web applications that maintain only a client-side and therefore cannot make an OAuth2 authentication.

## Set up the framework
Make sure you have Node.js v6 or greater installed, if not follow te below instructions:
```bash
# Run one of the following
# for Node.js v6
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
# OR for Node.js v7
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
```
Then run:
```bash
sudo apt-get install -y nodejs
```
If you have an older version you can update with:
```bash
sudo apt-get purge nodejs npm
```
## Download project and start coding
Clone the repo
```bash
$ git clone https://github.com/Temeteron/node-github-oauth-starter-kit
$ cd node-github-oauth-starter-kit
```

Install dependencies
```bash
$ npm install
```

Run the app
```bash
$ npm start
```

You can test the project by accessing the following link which will redirect you to the GitCV web application:
[http://127.0.0.1:3000/https://www.gitcv.com/%23/](http://127.0.0.1:3000/https://www.gitcv.com/%23/)
## Steps to create your web app with the power of firebase and ionic
1) Fork/Clone/Dowload the project
2) Install the dependencies
3) Change the configuration of GitHub ids info in file server/_config.js. You must change the clientID, clientSecret, callbackURL. The first two can be generated [here](https://github.com/settings/developers) by registering a new application. The callbackURL is the url that your nodejs server will redirect after the OAuth. This url must be the same in both your code and your registered application.
4) Get the accessToken that GitHub will provide to your server. 
Assume that the callbackURL you provided is: 
"http://www.mygithubcallbackurl.com/users/".
Your nodejs server will concat the accessToken at the end of the callbackURL. Thus, the url that you will be redirected after the OAuth is:
"http://www.mygithubcallbackurl.com/users/{myaccesstoken}"
where 'myaccesstoken' is a string. After that you can use that token, as a parameter, to make authenticated requests like the following:
"https://api.github.com/users/${username}/orgs?access_token=${myaccesstoken}"
5) Add your mongodb configuration info in file server/app.js. You can either add a URI to your local mongodb, or get free one at [mLab](https://www.mlab.com/). (A more easier way for mLab is described at the next section)

## Deploy to a free server
You can deploy your nodejs server to [HEROKU](https://www.heroku.com).

1) Just log in, or sing up if you haven't, press the button "New" and select "New application".
2) Name you application and select a region runtime of your choice.
3) After that you can deploy with one of the 3 reccomended ways that are provided.
4) You can add a free mongodb database from the dashboard of heroku at "Overview" tab, by searching "mLab  Mongodb" at the add-ons section. After accessing mLab by just clicking on it, you must copy and paste the configuration URI (mongodb://<dbuser>:<dbpassword>@<your_database>), which is provided from me mLab, to your app.js file. The arg  "<your_database>" is already provided from mLab at the basic info of your database. About the "dbuser" and the "dbpassword" of your database you must go to the "users" tab of mLab and add a new "database user". The username and the password that you will use is what you need to copy and paste at the mongodb URI. A full mongodb URI is something like the following one:
```
mongodb://<dbuser>:<dbpassword>@<your_database> // base URI
mongodb://MyNewUser10:1234myuserpassword@ds533.mlab.com:35533/heroku_xad5 // full URI, the one to use
```

Note: The Procfile that is needed for deployment to heroku is already provided in the repository.
