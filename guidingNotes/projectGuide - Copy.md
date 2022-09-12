_____________________________________________
environment setup for idealCRUDandJWT-backend
"""""""""""""""""""""""""""""""""""""""""""""

A. open the folder in terminal and apply :	npm init -y
	result: will generate a package.json file
B. open the file and to line script for "start " and "start-dev"
C. go againt to the folder terminal and apply :		npm i express cors mongodb dotenv
D. again apply :	npm install jsonwebtoken
E. now copy the code of index-template-backend.js
F. now create a index.js file in the folder and paste the copied codes
G. run the server and test by apply :	nodemon index.js


_____________________________________________
environment setup for idealCRUDandJWT-frontend
"""""""""""""""""""""""""""""""""""""""""""""

A. go to root folder terminal and apply : npx create-react-app idealCRUDandJWT-frontend
	result: react app will install
B. open the frontend folder
________________________________________________
>>>>>>>>>>>>>>>>firebase setup<<<<<<<<<<<<<<<<<<
C. install firebase apply :	npm install firebase
D. copy the configuration code for firebase
E. open the frontend folder and goto the src folder and create "firebase.init.js" file
F. and exprort auth
	F1. create .env.local create the config keys 
	F2. call them in the firebase.init.js file
G. goto terminal and apply :	firebase init
	Answer some q?
		H.  Are you ready to proceed? (Y/n) y
		I. >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
		J. > Use an existing project
		K. > idealcrudandjwt (idealCRUDandJWT)
		L. ? What do you want to use as your public directory? (public) build
		M. ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
		N. ? Set up automatic builds and deploys with GitHub? (y/N) n
O. apply :	npm run build	[ applye after each changes ]
P. apply :	firebase deploy	[ applye after each changes ]

________________________________________________
>>>>>>>>>>>>>>>>react-firebase-hook setup<<<<<<<<<<<<<<<<<<
G. again goto terminal and apply :	npm install --save react-firebase-hooks
________________________________________________
>>>>>>>>>>>>>>>>react-router setup<<<<<<<<<<<<<<<<<<
P. again apply :	npm install react-router-dom@6
Q. goto index.js of frontend and import "BrowserRouter"
R. goto app.js and create a basic Routes
________________________________________________
>>>>>>>>>>>>>>>>react-bootstrap setup<<<<<<<<<<<<<<<<<<
S. goto terminal and apply :	npm install react-bootstrap bootstrap
T. copy the dist/bootstrap line and paste in the app.js file
________________________________________________
>>>>>>>>>>>>>>>>react-toastify setup<<<<<<<<<<<<<<<<<<
U. goto terminal and apply :	npm install --save react-toastify
V. import toastcontainer and toast in the app.js file
________________________________________________
>>>>>>>>>>>>>>>>react-icons setup<<<<<<<<<<<<<<<<<<
W. goto terminal and apply :	npm install react-icons --save





_____________________________________________
environment setup for idealCRUDandJWT-mongodb
"""""""""""""""""""""""""""""""""""""""""""""

A. sign in mongodb and click the top-left dropdown
B. click :	+New Project
C. give project name :	ideal-CRUD-and-JWT
D. click :	Create Project
E. click :	Build a Database
F. click :	Create free
G. click :	Create Cluster
H. give user name :	ideal-CRUD-and-JWT
I. give user pass:	idealcrudandjwt123456789
J. click :	Create User
K. scroll down and click :	Add My Current IP Address
L. click :	Finish and Close
M. click :	Go to Database
N. click :	Network Access
O. click :	ADD IP ADDRESS
P. click :	ALLOW ACCESS FROM ANYWHERE
Q. click :	Confirm
R. click :	Database
S. click :	Connect
T. click :	Connect your application
U. Check :	Include full driver code example
V. copy the code
W. opent the index.js file and replace the center codes just cut off the require('mongodb'); line
X. replace the <password> with idealcrudandjwt123456789
	X1. create .env file and put usename and pass under DB_USER and DB_PASS
	X2. call it inthe replacement of user and pass in the index.js file
	X3. create .gitignore file and write .node_modules and .env
Z. click :	Close
A. click :	Browser Collections
B. click :	Add My Own Data
C. give db name :	idealCRUDandJWT
D. give coll name :	idealCRUDandJWTCollection
E. click :	Create



_____________________________________________
environment setup for idealCRUDandJWT-heroku
"""""""""""""""""""""""""""""""""""""""""""""

__________________________________________________one time per pc
A. goto :	https://signup.heroku.com/
	result: create accoutn
B. Verify accout
C. Download Heroku
B. checklist :	
	C. const port = process.env.PORT || 5000:
	D.  "start" : "node index.js"
	E.  " Hello World! Its for CRUD Operations " - in the browser
	F. check mongodb network access ip address 0.0.0.0.0 enabled or not
F. opent the backend folder in terminal and apply :	heroku login
G. press enter button
	result: in browser heroku login button will come press login button
""""""""""""""""""""""""""""""""""""""""""""""""""""""
___________________________________________per project one time
H. apply :	nodemon index.js
	result : just checking the project okay or not in local
I. connect and keep update the folder with git repo apply :	git add,commit,push
J. apply :	heroku create projectname
K. apply :	git push heroku main
L. goto heroku dashboard and click the project
M. click :	settings
N. click :	Reveal Config Vars
O. add the .env file's variable by copy pasting
""""""""""""""""""""""""""""""""""""""""""""""""
_______________________________________________Per changes each time
I. connect and keep update the folder with git repo apply :	git add,commit,push
K. apply :	git push heroku main
""""""""""""""""""""""""""""""""""""""""""""""
_______________________________________________ 
P. open the frontend folder in vs and replace the http________5000/ with the root link
_______________________________________________Per changes each time
Q. open the file in the browser by build and firebase deploy
R. 






