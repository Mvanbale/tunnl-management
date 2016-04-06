In order to use this project you will need to add your config.json file. This file contains the IP of the node server that keeps track of the streams.
Put the following inside the config.json:
{
  "tunnelServerIP" : "http://localhost:3000"
}

The config.json should be in the same folder as server.js
After you have done this run npm install in the root (where server.js is), after the installation type 'npm run dev'. This will run the project in development mode, so any changes you make will be live reloaded in your browser on localhost:8081.




If you want to run the website in production you must do the following:

1. Change the "debug" flag in webpack.config to false.
2. Type webpack build -p
The config.json will be packed into the minified javascript file during webpack build, so make sure the IP's are correct at this stage.
3. Copy the server.js file and the client.min.js file from /src onto your production environment.
It is important that you keep the same folder structure, so the minified file should still be in src/js/client.min.js
4. type npm install express, and then run the server.js

