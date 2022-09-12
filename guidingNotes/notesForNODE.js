import { setEnvironmentData } from "worker_threads";

console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 11 ||Module 64 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 64-1,2,3 installing node app in projects    `);





/* 
step 1: [[ using node for first time]]
            - go to Express.js website
            - click "get started > installing " from upper bar 
            - go to pc and create folder for the node app
            - go to the terminal and open the folder in terminal
            - apply  : " npm init -y "
            - go to pc and create a " index.js " file in the folder
            - go to the terminal and apply : " npm install express "  || " npm i express cors mongodb dotenv "
            - now click : " Hellow World " of the Express.js website
        

step 2:
            - copy the code from the Express.js website and paste it in the index.js file
            - just replace line 3 like this :
            
                    const port = process.env.PORT || 5000; (instead of " const port = 3000 ")


step 3: [[test the app okay or not okay]]
            - go to the terminal and test the app by appling : " node index.js "
            - test the app in website by going to the website and typing : " localhost:5000 "


step 4: [[install nodemon for auto restart of the code]]
            - go to the terminal and apply : " npm install -g nodemon "
            - open the package.json file and add 2 lines in the " scripts " section

                
                    "scripts": {
                        "start": "node index.js",
                        "start-dev": "nodemon index.js",
                        "test": "echo \"Error: no test specified\" && exit 1"
                },


step 5: [[start the sverer by nodemon app]]
            - go to the terminal and test the app by appling : " nodemon index.js "
            - test the app in website by going to the website and typing : " localhost:5000 " 
    [[ page need refesh manually by " Ctrl + Shift + R " ]]        



    [[[[[[[[[ to stop serever use " Ctrl+C " in the console to restart the nodemon app and to start server use ' nodmone index.js ' "]]]]]]]]]


step 6: [[ give access to use server in frontend port : 30000]]
            - go to Express.js website
            - click "resources > middleware " from upper bar
            - click " cors " in the sixth row of the table
            - stop the server by " Ctrl+C "
            - apply : " npm install cors "
            - go to ' index.js ' file and add import cors from ' cors ' like,


                        - const cors = require('cors') [[[ just under express importing]]]
                        - app.use(cors()) [[[ just before routes declaring]]]


             - go to the terminal and restart the server by appling : " nodemon index.js "


 */




console.log(`   // **************************  64-1,2,3 installing node app in projects  `);







console.log(`       // ************************** 64-3,4,5 creating own node API in projects and loading it in the front end   `);





/* 
 tasks 1: [[ creating a users array of objects and user object as the server ]]
    1. create a users array of objects
    2. declare new users route and sending the users array in the response

                app.get('/users', (req, res) => {
                res.send(users)

    3. declare single user by neste-routing and sending the user/id in the response

                app.get('/user/:id', (req, res) => {
                    console.log(req.params); 
                    let id = parseInt(req.params.id); 
                    let user = users.find(user => user.id === id);
                    res.send(user)
                })


                
        [[[ here "id" will be the key of req.params object and its value will be the typed after ":id" in the website url after filtering we are sending the user object from the users objectas response ]]] ]]]]]]]]] 




 tasks 2: [[ using backend users array of object in frontend localhost:30000 ]]
    1. take a useState() function for [users,setUsers]
    2. take useEffect() function for setUsers() using as usual fetch() function but before that we must give permission from backend to access the data in the frontend
    3. apply (step 6) to share backend users array of object in frontend localhost:30000
    4. give the users array of object lilnk inside the fetch() function
    5. and solve the next as per last milestone

*/




console.log(`   // **************************  64-3,4,5 creating own node API in projects and loading it in the front end    `);










console.log(`       // ************************** 64-6,7 creating input fields in frontend to add new user in the backend server and load again the users from backend in the frontend   `);





/* 
tasks 1: [[ creating input fields in frontend to add new user in the backend server  ]]
    1. create a form in the frontend to get the user data from the 


tasks 2: [[ posting form-info from frontend to backend server by posting method]]
            - go to MDN wesite and search for " uploading JSON data "
            - copy the code and paste it inside the "handleFormSubmit()" function of the App.js file of frontend
            - edit the fetch() method link as per requirements(here it is " https://stark-chamber-79715.herokuapp.com/user " cause we are adding the user)
            - go to backend and create a app.post to recieve the data from frontend by "request" like,

            
                        - app.post('/user', (req, res) => {
                        console.log(req.body); // watch  in console
                        res.send("user recieved"); // recieve the data from frontend
                        })


                [[[ in the console we will see an error cause we didnt parsed the info of frontend to json format so we need to add " app.use(express.json()) " function just bellow of app.use(cors()) function  ]]]




tasks 3: [[ now requesting and recieving form-info of frontend in the backend]]
            - go to index.js and add the requested info of frontend in the users array of objects like, 
    
            
                        - app.post('/user', (req, res) => {
                        console.log(req.body); // watch  in console
                        const user = req.body; // get the data from frontend
                        user.id = users.length + 1; // add id to the user
                        users.push(user); // push the user to the users array
                        res.send(user); // send the user to the frontend
                        })




tasks 4: [[ now showing and recieving the updated users of objects in the frontend]]
            - go to App.js and update the [users,setUsers] like, 
    
            
                        - app.post('/user', (req, res) => {
                        console.log(req.body); // watch  in console
                        const user = req.body; // get the data from frontend
                        user.id = users.length + 1; // add id to the user
                        users.push(user); // push the user to the users array
                        res.send(user); // send the user to the frontend
                        })

                        
        ****************** [[[ 

                "but here is a bug , restarting the server by nodemon app will erase the newly upadate information of the users array of objects in the frontend cause we are not preserving the info in any database or file like locaStorage or firebase or mongo DB "

        ]]] ****************




*/




console.log(`   // **************************  64-6,7 creating input fields in frontend to add new user in the backend server and load again the users from backend in the frontend  `);







console.log(`       // ************************** 64-7 applying serach querry in backend database  `);





/* 


tasks 5: [[ applying search query in the backend to find or filter the user by id or else and sending the search reslult  ]]
            - প্রথমে আমাদের জানতে হবে backend এর requset আমাদের কয়েকটা key দেয় তাদের মদ্যে req.params, req.querry অন্যতম
            - req.querry কাজ করে মূলত , ধরি কোন website এর লিঙ্ক যদি " https://stark-chamber-79715.herokuapp.com/users " হয় তাহলে এর শেষে আমরা নিচের format এ যা লিখব server console এ req.querry এর value হিসেবে তাঁরও নিচের format অনুযায়ি পাব,
                    
                    > querry : https://stark-chamber-79715.herokuapp.com/users/search?id=1&name=mahmud
                    > req.querry : { id: '1', name: 'mahmud' }

            - এখন আমাদেরকে এই req.querry obj এর এক বাঁ একাধিক key দিয়ে backend এর users array of objects এর ভিতরে থেকে filter করে specifically সেই কাংক্ষিত single user object গুলোকে বের করে নিয়ে আসতে হবে নিচের মত করে,


                    - app.get('/users', (req, res) => {
                                console.log(req.query); // watch search keys in console
                                let searchedName = req.query.name.toLowerCase(); // get search keys for name from website

                                if (searchedName) { // if there is a search key for name
                                let matchedUsers = users.filter(user => user.name.toLowerCase().includes(searchedName)); // filter the users array by name
                                res.send(matchedUsers); // send the filtered users array to the frontend
                                } else {
                                res.send(users); // send the users array to the frontend
                                
                                }
                                })
*/




console.log(`   // **************************  64-7 applying serach querry in backend database  `);










console.log(`       // ************************** 64-8 recap and updating backend files in github by ignoring node_modules folder  `);





/* 


tasks : 
            - goto the backend folder and create a file name " .gitignore " and inside it just write " node_modules "
            -then all same for upload the files to github
*/



/**
 * -------------------------------- Module Summary------------
 * [[[[[[[[[
 * 
 * backend এ কিছু users array of object ছিল সেটা কে frontend এ দেখানো হয়,
 * 
          * useEffect(() => {
              fetch('https://stark-chamber-79715.herokuapp.com/users')
                .then(response => response.json())
                .then(data => setUsers(data));
            }, []);

* fontend থেকে কিছু নতুন user object কে backend এ পাঠানো বাঁ POST হয়য় ,

          * fetch('https://stark-chamber-79715.herokuapp.com/user', {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userInfo),
            })

* তারপর সেই new user data কে backend এ recieved বাঁ request accpeted হয়ে backend এর users arrya of obj update হয়,

          *app.post('/user', (req, res) => {
              console.log(req.body); // watch  in console
              const user = req.body; // get the data from frontend
              user.id = users.length + 1; // add id to the user
              users.push(user); // push the user to the users array
              res.send(user); // send the user to the frontend
          })

* তারপর backend এর সেই newly updatedd users arrOfObj কে frontend এ recieve করা হয়,

          *.then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              const newUsers = [...users, data];
              setUsers(newUsers);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
 * 
 * ]]]]]]]]]
 * --------------------------
*/




console.log(`   // **************************  64-8 recap and updating backend files in github by ignoring node_modules folder  `);







console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 11 ||Module 65 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);







console.log(`       // ************************** 65-1,2,3,4,5,6,7,8 BASIC CRUD OPERATIONS EXPLANATION [[ WHAT HAPPENS IN BE AND UI ]]   `);


/**
 * CRUD (Create, Read, Update, Delete)
 * 
 * CREATE = POST
 * READ = GET
 * UPDATE = PUT / PATCH
 * DELETE = DELETE
 * 
 * FOR DETAILS WATCH THE SCREEN SHOTS
 */




console.log(`   // **************************   65-1,2,3,4,5,6,7,8 BASIC CRUD OPERATIONS EXPLANATION [[ WHAT HAPPENS IN BE AND UI ]]  `);












console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 11 ||Module 66 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);







console.log(`       // ************************** 66-1,2,3,4,5,6,7,8,9 APPLYI CREATE,READ,DELETE OR POST GET DELTE OPERATIONS IN ZINIUS CAR SERVICES   `);


/**
 * CRUD (Create, Read, Update, Delete)
 * 
 * CREATE = POST
 * READ = GET
 * UPDATE = PUT / PATCH
 * DELETE = DELETE
 * 
 * FOR DETAILS WATCH THE SCREEN SHOTS
 */




console.log(`   // **************************   66-1,2,3,4,5,6,7,8,9 APPLYI CREATE,READ,DELETE OR POST GET DELTE OPERATIONS IN ZINIUS CAR SERVICES  `);












console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 11 ||Module 67 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);







console.log(`       // ************************** 67-1,2,3,4,5,6,7,8,9 APPLYI READ or GET OPERATIONS IN emaJhon products and enable pagination   `);


/**
 * tasks 1: [[[ inser product info in mongodb and get in projects ignoring products.json file ]]]
        
            - create a GET API in the server to get all products from db
            - then load the products from the BE to the UI

        [[[[[ 
                add to cart may not work properly cause we used " .id " earlier in the projects but now need to replace with the " ._id " specially in " Shop + Cart + other " components
        ]]]]]


 /////////////* tasks 2: [[[ enable pagination in the " Shop " component and load the products from the BE to the UI depending on no of pages and PerPageProducts ]]] ]]] 




 * tasks 2: [[[ creating pagination in the bottom of the shopping products ]]] ]]]        

                
                - const [noOfPages, setNoOfPages] = useState(0);
                const [perPageProducts, setPerPageProducts] = useState(10);
                const [currentPage, setCurrentPage] = useState(0);

                useEffect(() => {
                        const url = `https://stark-chamber-79715.herokuapp.com/noOfProducts`;
                        fetch(url)
                        .then(res => res.json())
                        .then(data => {
                                console.log(data);
                                const noOfProducts = data.count;
                                const countOfPages = Math.ceil(noOfProducts / perPageProducts);
                                setNoOfPages(countOfPages);

                        });
                }, [perPageProducts]);



                - <div className='pagination'>
                    {
                        [...Array(noOfPages).keys()].map(pNum => <span
                        className={currentPage === pNum ? "selected" : ""}
                        onClick={() => setCurrentPage(pNum)}
                        >{pNum}</span>)
                    }
                    <select onChange={e => setPerPageProducts(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>

                </div>


                


 * tasks 3: [[[ loading data as per pagination ]]] ]]]  

                
                frontend:
                - const [noOfPages, setNoOfPages] = useState(0);
                const [perPageProducts, setPerPageProducts] = useState(10);
                const [currentPage, setCurrentPage] = useState(0);
                const [products, setProducts] = useState([]);
                useEffect(() => {
                        const url = `https://stark-chamber-79715.herokuapp.com/products?currentPage=${currentPage}&perPageProducts=${perPageProducts}`;
                        fetch(url)
                        .then(res => res.json())
                        .then(data => setProducts(data));
                }, [currentPage,perPageProducts]);



                
                backend: 
                - app.get('/products', async(req, res) =>{
                                console.log('query', req.query);
                const currentPage = parseInt(req.query.currentPage);
                const perPageProducts = parseInt(req.query.perPageProducts);

                const query = {};
                const cursor = productCollection.find(query);
                let products;
                if(currentPage || perPageProducts){
                        // 0 --> skip: 0 get: 0-10(10): 
                        // 1 --> skip: 1*10 get: 11-20(10):
                        // 2 --> skip: 2*10 get: 21-30 (10):
                        // 3 --> skip: 3*10 get: 21-30 (10):
                        products = await cursor.skip(currentPage*perPageProducts).limit(perPageProducts).toArray();
                }
                else{
                        products = await cursor.toArray();
                }
                
                res.send(products);
                });



        -------------------------------
        special note starts
        --------------------------------

                [[[[[
                        1) fontend এ আমরা কোন array কে slice method দিয়ে কাটাকাটি প্রোয়োজন মত কাটাকাটি করতে পারতাম এখন backend এ গিয়েও pagination এর জন্য আমরা সেই কাজটা করব হচ্ছে skip-limit দিয়ে । যেখানে skip define করে কত number index এর পরে থেকে দেখাব আর limit define করে পরবর্তি কয়টা element কে দেখাব


                        2) আগেথেকে কোন রকম array variable declare না করে থাকলে আমরা Array() method use করে যেখানে সেখানে নতুন array আবিশকার করতে পারি,

                                "  [...Array(5).keys()].map(i => i + 1)  "


                        3) pagination apply করলে database থেকে তখন আর সরাসরি সবগুলা data কে load করা হয় না বরং url এর শেষে search-query দিয়ে দিয়ে সেই অনুয়যায়ী dependency apply করে বারবার server কে hit করে  করে data লোড করা হয় 
                ]]]]]

        -------------------------------
        special note ends
        --------------------------------
                

                
        [[[[[[[[
                probblem : but cart এ এখন একটা error দেখাদিচ্ছে কারণ যে products গুলা cart এ add করা হয়েছিল সেগুলা যেই যেই page এর product pagination করে কেবল সেই সেই page এ গেলেই cart এ দেক্ষায় বাদ বাকি অন্য page এ গেলে cart 0 দেখায় কারণ, cart এর item গুলোর dependency হচ্ছে products আর প্রতিবার paginatin এর ফলে page number অনুযায়ী product db থেকে load হচ্ছে আর সেই products গুলয়া যদি cart item এর সাথে match করে তাহলে কেবল cart এ show করতেছে নইলে ০ দেখাচ্ছে,

                solution : cart এর item গুলোর dependency হিসেবে products কে না দিয়ে বরং local storage থেকে cart item গুলার keyID নিয়ে একটা array বানিইয়ে সেই array কে db তে পাটাহাব " $in " method দিয়ে তারপর কেবল matching products গুলো কে এনে তাদের qty কে cart এ set করব
                
                
        ]]]]]]]]



* task 4 : [[[[ solve the cart problem ]]]]]

                - edit useCart() customHooks parameter and edit its code like in cart.js file,
                        
                                
                                - useEffect(() => {
                                        const storedCart = getStoredCart();
                                        const keys = Object.keys(storedCart);
                                        const savedCart = [];


                                        fetch(`https://stark-chamber-79715.herokuapp.com/productByKeys`, {
                                        method: "POST",
                                        headers: {
                                                "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(keys),
                                        })
                                        .then(res => res.json())
                                        .then(products => {
                                                console.log(products);


                                                for (const id in storedCart) {
                                                const addedProduct = products.find(product => product._id === id);
                                                if (addedProduct) {
                                                        const quantity = storedCart[id];
                                                        addedProduct.quantity = quantity;
                                                        savedCart.push(addedProduct);
                                                }
                                                }
                                                setCarts(savedCart);
                                        })
                                }, [])
* task 4 : [[[[ solve the cart problem ]]]]]

                - inn backend create a new api to search arry of keys and return matching products from db
                        
                                
                                
                                - app.post('/productByKeys', async(req, res) =>{
                                        const keys = req.body;          // gettinf array of key from ui
                                        const ids = keys.map(id => ObjectId(id));               // wraping array of key with objectId
                                        const query = {_id: {$in: ids}}                 // making query to search array of key in db
                                        const cursor = productCollection.find(query);
                                        const products = await cursor.toArray();
                                        console.log(products);
                                        res.send(products);
                                })



 */




console.log(`   // **************************   66-1,2,3,4,5,6,7,8,9 APPLYI CREATE,READ,DELETE OR POST GET DELTE OPERATIONS IN ZINIUS CAR SERVICES  `);















console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 11 ||Module 68 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);







console.log(`       // ************************** 68-1,2,3,4 creat check out page form, and load name and email and service as controlled input and ccreate order component and only show email wise order in order page   `);


/**
 * tasks 1: [[[ ________________________________ ]]]
     
        step 1 : 
            - create a useServiceDetails(id) custom hook where we can load the single product from db
            - and show it in ' DirectDynamicRoutingForDetail ' page
     
        step 2 : 
            - goto checkout page and create a useServiceDetails(id) custom hook where we can load the single product from db
            - and create a form with controlled input and submit button to create order
            - post order from UI-BE-DB
     
        step 3 : 
            - create a order route
            - show get the orders from db as per email

        



 */






console.log(`       // ************************** 68-1,2,3,4 creat check out page form, and load name and email and service as controlled input and ccreate order component and only show email wise order in order page   `);







console.log(`       // ************************** 68-5,6,7,8,9 prevent backend to show order to other user by JWT token   `);


/**
 * tasks 1: [[[ ________________________________ ]]]
 
        করনিয় ঃ 
        ১) gentarate access token jwt : require('crypto').randomBytes(64).toString('hex')

        ২) backend এর .env file এই code টা save করবো

        ৩) user যখন login করবে তখন এই code টা একই সাথে DB & localStorage এ save করবো

        ৪) কাংক্ষিত top secret page এ ডুকার সময় localStorage এর সেই code টাও BE এ পাঠাব একই সাথে BE এই localStorage code আর .env file এর code verify করবো যদি vrified হয় কেবল তখনি DB থেকে requested data কে resposnse হিসেবে send করব



                step 1 :
                        - goto to BE terminal clos the server
                        - apply : " node "
                        -apply : " require('crypto').randomBytes(64).toString('hex') "
                        - get the code copy and save in .env file
                        - goto termianl and apply : " npm install jsonwebtoken "
                        - goto BE index.js file import " var jwt = require('jsonwebtoken'); "
                        - restart server



                step 2 :
                        - goto BE and create a API for sending token to DB and UI local storage


                                -app.post('/login', async (req, res) => {
                                        const user = req.body;
                                        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                                                expiresIn: '1d'
                                        });
                                        res.send({ accessToken });
                                })
 
 
 
 */







console.log(`       // ************************** Basic CRUD operations and JWT GET-POST operation   `);





/* ===================================
        JWT POST UPDATE method
======================================*/





// step-1: generating access token during login and saveing in local storage and decoded of DB


/* Backend code for login */
// app.post("/login", (req, res) => {
//         const email = req.body;

//         const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);

//         res.send({ token })
// })


// /* Frontend code for login */
// if (user) {
//         const url = 'https://stark-chamber-79715.herokuapp.com/login';
//         fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                         email: user.email
//                 }),
//                 headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                 },
//         })
//                 .then((response) => response.json())
//                 .then((data) => {
//                         localStorage.setItem("accessToken", data.token);
//                         navigate(from, { replace: true });
//                 });
// }











// step-1: generating access token during login and saveing in local storage and decoded of DB by put method
/* Backend code for login  */
// app.put('/login/:email', async (req, res) => {
//         const email = req.params.email;
//         const user = req.body;
//         const filter = { email: email };
//         const options = { upsert: true };
//         const updateDoc = {
//                 $set: user,
//         };
//         const result = await usersCollection.updateOne(filter, updateDoc, options);
//         const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
//         res.send({ result, token });
// })

// // /* Frontend code for login */
// if (user) {
//         const email = user?.user?.email;
//         const currentUser = { email: email };
//         if (email) {
//                 fetch(`https://stark-chamber-79715.herokuapp.com/login/${email}`, {
//                         method: 'PUT',
//                         headers: {
//                                 'content-type': 'application/json'
//                         },
//                         body: JSON.stringify(currentUser)
//                 })
//                         .then(res => res.json())
//                         .then(data => {
//                                 console.log('data inside useToken', data);
//                                 const accessToken = data.token;
//                                 localStorage.setItem('accessToken', accessToken);
//                         })
//         }
//         navigate(from, { replace: true });
// }




// // step-2: generating a common function for all the routes to verify token


// /* verify token function */
// function verifyToken(token) {
//         let email;
//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
//                 if (err) {
//                         email = 'Invalid email'
//                 }
//                 if (decoded) {
//                         console.log(decoded)
//                         email = decoded
//                 }
//         });
//         return email;
// }






// // step-3(POST): posting a single item to DB with JWT token verification


// /* Backend code for posting */
// app.post("/postingItem", async (req, res) => {
//         const product = req.body;
//         const tokenInfo = req.headers.authorization;
//         const [email, accessToken] = tokenInfo.split(" ")
//         const decoded = verifyToken(accessToken); // verify token
//         if (email === decoded.email) {
//                 const result = await productCollection.insertOne(product);
//                 res.send({ success: 'Product Upload Successfully' })
//         }
//         else {
//                 res.send({ success: 'UnAuthoraized Access' })
//         }
// })


// /* Frontend code for posting */
// const handleUpload = (event) => {
//         event.preventDefault();
//         const name = event.target.name.value;
//         const price = event.target.price.value;
//         console.log(name, price)
//         const postInfo = {
//                 name,
//                 price
//         }
//         const url = 'https://stark-chamber-79715.herokuapp.com/postingItem';
//         fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify(postInfo),
//                 headers: {
//                         'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
//                         'Content-type': 'application/json; charset=UTF-8',
//                 },
//         })
//                 .then((response) => response.json())
//                 .then((data) => {
//                         console.log(data)
//                         event.target.reset();
//                 });
// }






// // step-4(GET): posting a single item to DB with JWT token verification


// /* Backend code for posting */
// app.get("/posts", async (req, res) => {
//         const tokenInfo = req.headers.authorization;
//         console.log(tokenInfo)
//         const [email, accessToken] = tokenInfo.split(" ")
//         const decoded = verifyToken(accessToken) // verify token
//         if (email === decoded.email) {
//                 const orders = await orderCollection.find({ email: email }).toArray();
//                 res.send(orders);
//         }
//         else {
//                 res.send({ success: 'UnAuthoraized Access' })
//         }
// })


// /* Frontend code for posting */
// useEffect(() => {
//         const url = `https://stark-chamber-79715.herokuapp.com/posts`;
//         fetch(url, {
//                 headers: {
//                         'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
//                 },
//         })
//                 .then(res => res.json())
//                 .then(data => setOrderList(data))
// }, [user.email])













console.log(`       // ************************** Basic CRUD operations and JWT GET-POST operation   `);








console.log(`       // ************************** Basic CRUD operations and JWT GET-POST operation by axios  `);





/* ===================================
        JWT POST UPDATE method by axios
======================================*/





// step-1: generating access token during login and saveing in local storage and decoded of DB by post method


// // /* Backend code for login */
// app.post("/login", async (req, res) => {
//         const email = req.body;
//         const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
//                 expiresIn: '1d'
//         });
//         res.send({ token })
// })


// // /* Frontend code for login */
// if (user) {
//         email = user?.user?.email
//         const url = 'https://stark-chamber-79715.herokuapp.com/login';
//         const { data } = await axios.post(url, { email });
//         localStorage.setItem('accessToken', data);
//         navigate(from, { replace: true });
// }





// step-1: generating access token during login and saveing in local storage and decoded of DB by put method

/* Backend code for login  */
app.put('/login/:email', async (req, res) => {
        const email = req.params.email;
        const user = req.body;
        const filter = { email: email };
        const options = { upsert: true };
        const updateDoc = {
                $set: user,
        };
        const result = await usersCollection.updateOne(filter, updateDoc, options);
        const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
        res.send({ result, token });
})

/* Frontend code for login */
if (user) {
        const email = user?.user?.email;
        const currentUser = { email: email };
        const url = `https://stark-chamber-79715.herokuapp.com/login/${email}`;

        if (email) {
                const { data } = await axios.put(url, currentUser);
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
        }
        navigate(from, { replace: true });
}







// // step-2: generating a common function for all the routes to verify token


// /* verify token function */
function verifyJWT(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
                return res.status(401).send({ message: 'unauthorized access! 401 verifyJWT' });
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                        return res.status(403).send({ message: 'Forbidden access! 403 verifyJWT' });
                }
                console.log('decoded', decoded);
                req.decoded = decoded; // add decoded-key to request-object i.e. decoded={ email: 'asifaowadud@gmail.com', iat: 1652686201, exp: 1652689801 }
                next();
        })
}






// // step-3(POST): posting a single item to DB with JWT token verification


// /* Backend code for posting */
app.post("/postingItem", verifyJWT, async (req, res) => {
        const decodedEmail = req.decoded.email;
        const email = req.query.email;
        if (email === decodedEmail) {
                const product = req.body
                const result = await productCollection.insertOne(product);
                res.send(result, { success: 'Product Upload Successfully' })
        }
        else {
                res.status(403).send({ message: 'UnAuthoraized Access! 403 app.post' })
        }
})


// /* Frontend code for posting */
const handleUpload = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        console.log(name, price)
        const postInfo = {
                name,
                price
        }

        const axiosPost = async () => {
                const url = `https://stark-chamber-79715.herokuapp.com/postingItem?email=${user?.email}`;
                try {
                        const { data } = await axios.post(url, postInfo, {
                                headers: {
                                        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                                        'Content-type': 'application/json; charset=UTF-8',
                                },
                        });
                        console.log(data)
                        event.target.reset();
                } catch (error) {
                        console.log(error)
                }
        }
        axiosPost();
}





// // step-4(GET): posting a single item to DB with JWT token verification


// /* Backend code for posting */
app.get('/posts', verifyJWT, async (req, res) => {
        const decodedEmail = req.decoded.email;
        const email = req.query.email;
        if (email === decodedEmail) {
                const query = { email: email };
                const cursor = orderCollection.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
        }
        else {
                res.status(403).send({ message: 'forbidden access! 403 app.get' })
        }
})

// /* Frontend code for posting */
useEffect(() => {
        const getOrders = async () => {
                const email = user.email;
                const url = `https://stark-chamber-79715.herokuapp.com/posts?email=${email}`;
                try {
                        const { data } = await axios.get(url, {
                                headers: {
                                        'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                                        'Content-type': 'application/json; charset=UTF-8',
                                },
                        });
                        setOrderList(data);
                }
                catch (error) {
                        console.log(error.message);
                        if (error.response.status === 401 || error.response.status === 403) {
                                signOut(auth);
                                navigate('/login')
                        }
                }
        }
        getOrders();
}, [user])






// // step-5(PUT): upserting a single in DB asper  with JWT token verification


// /* Backend code for posting */
app.put('/login/:email', verifyJWT, async (req, res) => {
        const email = req.params.email;
        const decodedEmail = req.decoded.email;
        if (email === decodedEmail) {
                const userInfo = req.body;
                const filter = { email: email };
                const options = { upsert: true };
                const updateDoc = {
                        $set: userInfo,
                };
                const result = await usersCollection.updateOne(filter, updateDoc, options);

                res.send({ result, success: 'User Updated Successfully' });
        }
        else {
                res.status(403).send({ message: 'forbidden access! 403 app.get' })
        }

})


// /* Frontend code for posting */

const handleUpdate = (event) => {
        const getAccessToken = async () => {
                const email = user?.user?.email;
                const userInfo = { email: email }; // update infon in obj form
                const url = `https://stark-chamber-79715.herokuapp.com/login/${email}`;

                if (email) {
                        const { data } = await axios.put(url, userInfo {
                                headers: {
                                        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                                        'Content-type': 'application/json; charset=UTF-8',
                                },
                        });
                        console.log('user updated successfully', data);
                }
        };
        getAccessToken();
}







console.log(`       // ************************** Basic CRUD operations and JWT GET-POST operation   `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 12 ||Module 76 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);







console.log(`       // ************************** 76-1,2,3,4,5,6, server এ doctors দের entry দিতে হবে আর 3rd party imgBB এর সাহায্যে photo upload করে link server এ পাঠাতে হবে  `);



const imgBBStorageAPIKey = '872cf09ad55d045e268a6ea6143e86c3'

const onSubmit = data => {
        const doctorName = data.name;
        const doctorEmail = data.email;
        const doctorImageFile = data.image[0];
        const doctorSpecialization = data.specialization;

        // step-1: upload the pic in third party websiste
        const formData = new FormData();
        formData.append('image', doctorImageFile);
        const url = `https://api.imgbb.com/1/upload?key=${imgBBStorageAPIKey}`;

        fetch(url, {
                method: 'POST',
                body: formData
        })
                .then(res => res.json())
                .then(result => {
                        if (result.success) {
                                const doctorImgUrl = result.data.url;
                                // console.log(doctorImgUrl);

                                // step-2: create doctor obj
                                const doctorInfo = {
                                        name: doctorName,
                                        email: doctorEmail,
                                        image: doctorImgUrl,
                                        specialization: doctorSpecialization,
                                }
                                // console.log(doctorInfo);
                                // step-3: create or post doctor in db
                                fetch('https://stark-chamber-79715.herokuapp.com/doctors', {
                                        method: 'POST',
                                        headers: {
                                                'content-type': 'application/json',
                                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                        },
                                        body: JSON.stringify(doctorInfo)
                                })
                                        .then(res => res.json())
                                        .then(inserted => {
                                                console.log(inserted);
                                                if (inserted.result.insertedId) {
                                                        toast.success('Doctor added successfully')
                                                        reset();
                                                } else if (inserted.error) {
                                                        toast.error(inserted.error)
                                                }
                                                else {
                                                        toast.error('Failed to add the doctor');
                                                }
                                        })
                        }
                })
}


console.log(`       // ************************** 76-1,2,3,4,5,6, server এ doctors দের entry দিতে হবে আর 3rd party imgBB এর সাহায্যে photo upload করে link server এ পাঠাতে হবে  `);





console.log(`       // ************************** 76-7,8,9 user কোণ service এর against এ booking দিলে সে একটা notification email পাবে  `);


/* 
// step-1: goto sendGrid and opent a free account
-goto : sendgrid.decodedEmail
-click " start fro free "
- give email,password [outlook account preferable]
- click "create free account"

- create profile : give name, company name etc and click " get started "

-create sender : give name, give from email and reply to email same mail etc click : " create "

-verify sender : goto gmail and check the inbox or spam and confirm verification

- get the API Key : from side bar under setting click " API Key "
- click : " Create API Key "
- give API name , check the " Full Access ", click : " Create & View "
- copy the API key and paste it in the .env of server side and name it as "SENDGRID_API_KEY=TheKeyIsdf5g4sd3f5h45df4g"

-enable sender authentication : again goto sidbar click : " Sender Authentication " under setting [already done]


step-2: install nodemailer and transport in server terminal
- search for " nodemailer sendgrid " or visit " https://sendgrid.com/ "
- open the serve side terminal and apply " npm i nodemailer nodemailer-sendgrid-transport "

- import the package in server side index.js file " 
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport'); "

- set email sender in the .env file " EMAIL_SENDER=asifaowadud@gmail.com "

- call sendAppointmentEmail(bookingInfo) function in server side index.js file in app.post("/bookings") just before sending response and define the function like out of the async function, 



const emailSenderOptions = {
        auth: {
          api_key: process.env.SENDGRID_API_KEY
        }
      }
      
const emailClient = nodemailer.createTransport(sgTransport(emailSenderOptions));
      
function sendAppointmentEmail(bookingInfo){
        const {patientName, patientEmail, treatment, date, slot} = bookingInfo;
      
        var email = {
          from: process.env.EMAIL_SENDER,
          to: patientEmail,
          subject: `Your Appointment for ${treatment} is on ${date} at ${slot} is Confirmed`,
          text: `Your Appointment for ${treatment} is on ${date} at ${slot} is Confirmed`,
          html: `
            <div>
              <p> Hello ${patientName}, </p>
              <h3>Your Appointment for ${treatment} is confirmed</h3>
              <p>Looking forward to seeing you on ${date} at ${slot}.</p>
              
              <h3>Our Address</h3>
              <p>Andor Killa Bandorban</p>
              <p>Bangladesh</p>
              <a href="https://web.programming-hero.com/">unsubscribe</a>
            </div>
          `
        };
      
        emailClient.sendMail(email, function(err, info){
          if (err ){
            console.log(err);
          }
          else {
            console.log('Message sent: ', info);
          }
      });
      
}
      
 */







console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 12 ||Module 77 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);







console.log(`       // ************************** 76-1,2,3,4,5,6,8,9 প্রতিটা service এর payment related কাজ করতে হবে "STRIPE" এর সাহায্যে  `);


step - 1: instal react stripe
        - search and goto: ' https://stripe.com/docs/stripe-js/react '
                - copy : ' npm install --save @stripe/react-stripe-js @stripe/stripe-js '
                        - opent the server terminal and apply the copied code


step - 2: create a stripe official account

        - goto : https://stripe.com/
- click " create account "
        - give email, password  and other information
                - click "create free account"
                        - verify by gmail


step - 3: Get the API key
        - click : " Developers " from top bar beside toggle
                - click : " API Keys " from side bar
                        - copy the "Publish key "


step - 4: Get paymetn samples
        - click : " Payment samples " from side bar[it will redirect us to a git hub repo]
- search by "react"
        - click : " checkout-one-time-payments " for react or goto : " https://github.com/stripe-samples/checkout-one-time-payments "

                - or most preferable sample: "
https://github.com/stripe/react-stripe-js
"
 *********  - click : ' /examples/hook/0-card-Minimal.js '


step - 5: Create and shape  component for payment মানে একটা form বানাব যেখানে কোন error আসলে UI এ দেখাতে পারব। payment eshtablished হয় নাই

        (1)=> goto MyPayment component & declare stripePromise in global fro Api Key importing from " 
import { loadStripe } from '@stripe/stripe-js' "

        (2)=> Create < Checkout /> component inside < Elements ></ > which is impoted from " 
import { Elements } from '@stripe/react-stripe-js'; "

        (3)=> now goto Checkout component there import : " 
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; import { createConnection } from "net";
" 
        (4)=> paset the form and handle submit function
                (5)=> set a state for error handleng and visit stripe test cards for demo credit cards[have demo cads in " https://stripe.com/docs/testing#test-code "]




step - 6: sample integration for payment as per bill অথবা payment এর procedure eshtablish করা

        - goto : react stripe js docs i.e. " https://stripe.com/docs/stripe-js/react "
                - click : " smple integration "
                        - it wil redirect to a new page there select " web & react & node" from the drop down
                                - now open the server terminal and apply " npm install --save stripe "
                                        - opent the serve index.js  and bellow the require of(dotenv) require import : ' 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); '
        - now create a payment - intnt api in server and there we will get the price extracted from the req.body and convert in (sents) পয়সা multiplying by 100


_____________
//backend code:
""""""""""""""


//in the global
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// in the function
app.post('/create-payment-intent', verifyJWT, async (req, res) => {
        const service = req.body;
        const price = service.price;
        const amount = price * 100;
        const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: 'usd',
                payment_method_types: ['card']
        });
        res.send({ clientSecret: paymentIntent.client_secret })
});



________________
//frontend code:  opent the CheckoutForm component
""""""""""""""""

const [cardError, setCardError] = useState('');

// payment method handler
const { price, treatment } = appointedTreatment || {};
const [clientSecret, setClientSecret] = useState("");
useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://stark-chamber-79715.herokuapp.com/create-payment-intent", {
                method: "POST",
                headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({ price }),
        })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
}, []);




step - 7: stripe card payment || এতক্ষন payment নেবার মত উপযুক্ত পরিবেশ তৈরি করার পর এখন payment recieve করব

        - now search for " stripe confirmcardpayment " or goto : " https://stripe.com/docs/js/payment_intents/confirm_card_payment "
                - change the code into JSES6 from drop down and copy it
                        - now again oopent CheckoutForm component and in the handleSubmit function paste the copied code after payment_intent createConnection and edit, 
                           => '{PAYMENT_INTENT_CLIENT_SECRET}' with clientSecret
                           => cardElement with card as per bellow
                                -check the payment is succceed in " https://dashboard.stripe.com/test/payments "


// frontend code in CheckoutForm component for recieve payment
const handleSubmit = async (event) => {


        // আগের codes
        /* // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
                // Stripe.js has not loaded yet. Make sure to disable
                // form submission until Stripe.js has loaded.
                return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
                return;
        }

        // payment method enable করার জন্য এখানে কাজ করবে
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card,
        });
 */


        // নতুন codes : payment recived করার জন্য এখানে কাজ করবে
        // to show error in the UI
        setCardError(error?.message || '');
        setSuccess('');


        // payment recived করার জন্য এখানে কাজ করবে
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                        payment_method: {
                                card: card,
                                billing_details: {
                                        name: patientName,
                                        email: patientEmail
                                },
                        },
                },
        );


        if (intentError) {
                setCardError(intentError.message);
        } else {
                setCardError('');
                console.log(paymentIntent);
                setSuccess("Payment Successful");
        }
}




step - 8: successful paymetn এর জন্য trnxID টাকে server এ PATCH করব আর My Appoinment এর table এ Pay বাটন সরিয়ে Paid বাটন বসাব আর loading এর কাজ করব


- backend এ একটা app.patch API খুলব যেখানে একসাথে ২ টা কাজ হবে appoinmentInfo edit হবে পাশাপাশি নতুন একটা payments collection বানাতে হবে যেখানে paid treatments গুলার trnxID গুলা গিয়ে add হবে।


//backend code for patching the trnxID


const paymentCollection = client.db('doctors_portal').collection('payments');

app.patch('/booking/:id', verifyJWT, async(req, res) =>{
  const id  = req.params.id;
  const payment = req.body;
  const filter = {_id: ObjectId(id)};
  const updatedDoc = {
    $set: {
      paid: true,
      transactionId: payment.transactionId
    }
  }

  const result = await paymentCollection.insertOne(payment);
  const updatedBooking = await bookingCollection.updateOne(filter, updatedDoc);
  res.send(updatedBooking);
})



// frontend code for patching the trnxID


const handleSubmit = async (event) => {
        /* event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.') */
            
            //store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://stark-chamber-79715.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                setProcessing(false);
                console.log(data);
            })

        }
    }












    /* 
    *************************************************************************MailGun*************************************************************************
    */

    /* Node must be installed as dev dependency */

    step-0 : test the server in hoppscotch.io

                => create a API in server index.js for "/email"

                app.get('/email', (req, res) => {
                        res.send('Hello Hoppscotch.io ! Its for LoyalCars email')
                    })

                => test the api in " https://hoppscotch.io/ "


    step-1: create account in MailGun
                
                => goto " https://www.mailgun.com/ "
                => click on " log in "
                => click on " sign up now "
                => fill the form and click on " create account " it will redirect us to home page
                => click on " Dashboard " from the left side bar and bellow we will find a snadbox domain 


    step-2: install nodamailer + nodamailer-MailGun-transport npm package
                
                => search google " nodamailer-MailGun-transport " or goto " https://www.npmjs.com/package/nodemailer-mailgun-transport "
                => copy by click on " npm i nodemailer-mailgun-transport "
                => opens server terminal and apply 'npm i nodemailer '
                => opens server terminal and apply 'npm i nodemailer-mailgun-transport  '
                // now need to test the project in hoppscotch.io is it okay or notDeepEqual


    step-3: connnect mailgun with server 
                
                => now goto nodmailer-mailgun-transport package and copy the importing of "nodemailer and nodemailer-mailgun-transport" 

                const nodemailer = require('nodemailer');
                const mg = require('nodemailer-mailgun-transport');

                => now paste and import these two in server index.js 


                step-3(a): get "api_key and domain" from mailgun website  
                                
                                => now goto mailgun website dashboard and click on the " domain"
                                => click on the " API keys " from the right side-bar it will redirect us to the API key page
                                => now goto nodmailer-mailgun-transport package and copy the  "api_key" information from that site and paste it in the "api_key" variable in server index.js just bellow the "verifyJWT" function 
                                
                                
                                // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
                const auth = {
                        auth: {
                        api_key: 'key-1234123412341234',
                        domain: 'one of your domain names listed at your https://app.mailgun.com/app/sending/domains'
                        }
                }
                
                const nodemailerMailgun = nodemailer.createTransport(mg(auth));

                                [[here we need the domain and the api_key]]
                                => now copy paste the domain from mailgun dashboard and api from api key page 



        step-4: activate emailing in the server
                => now goto the nodemailer-mailgun-transport package and copy the rests code of activating of email and paste it in the previously create "/email" API
                
                => just bellow the nodemailerMailgun create a fuction where a order will be a params like bellow and call it during ordering

        

function sendAppointmentEmail(booking) {
        const { patient, patientName, treatment, date, slot } = booking;
      
        var email = {
          from: "support@phero.com",
          to: patient,
          subject: `Your Appointment for ${treatment} is on ${date} at ${slot} is Confirmed`,
          text: `Your Appointment for ${treatment} is on ${date} at ${slot} is Confirmed`,
          html: `
            <div>
              <p> Hello ${patientName}, </p>
              <h3>Your Appointment for ${treatment} is confirmed</h3>
              <p>Looking forward to seeing you on ${date} at ${slot}.</p>
              <h3>Our Address</h3>
              <p>Andor Killa Bandorban</p>
              <p>Bangladesh</p>
              <a href="https://web.programming-hero.com/">unsubscribe</a>
            </div>
          `,
        };
      
        nodemailerMailgun.sendMail(email, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        });
      }
                
                [[ where cc,bcc,replyTo , html are optonal but we can send a custom designed email by the html covering (``)]]
                
                [[ By default mailgun only allow sending emil to its account holder for free]]



        step-4: set Authorized Recipients in mailgun for sending email 
                => now goto mailgun site click " Dashboard " 
                => click " domain bellow " 
                => click the text box at right side and paste the email address of the authorized recipients
                => the login to that email and verify the access to the email account 
                
                
                [[ where cc,bcc,replyTo , html are optonal but we can send a custom designed email by the html covering (``)]]
                
                [[ By default mailgun only allow sending emil to its account holder for free]]

                

