# MERN Stack Authentication and Insights Application

Clone or download
---------------

```$ git clone https://github.com/mariyabaig/Greendeck-Full-Stack.git```

After you have cloned this repo and install the yarn, install the dependencies with:
---------------
```$npm i or npm install```

Project structure
---------------

```LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
... 
```
### Usage (run fullstack app on your machine) ###

* MongoDB
* Node
* npm

you need client and server runs concurrently in different terminal session, in order to make them talk to each other


### Client-side usage(PORT: 3000) ###
```$ cd client          // go to client folder
$ npm i or npm install //to install the packages and dependencies
$ npm run start //  to start the client side
```


### Server-side usage(PORT: 5000) ###
```$ cd server //go to server folder
$ npm i or npm insatll //to install the packages and dependencies
```

#### In server, create .env file and add the following ####
* DB = "Link to your database"
* JWT_SECRET = "YourJWTSecret" 
* port = 5000

### To start the server ###
` $ nodemon index.js `

#### Additionally, to run both server and client application concurrently with a single command ####

`$ cd client`
` $ npm both `
