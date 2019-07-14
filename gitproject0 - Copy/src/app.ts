import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import { runInNewContext } from 'vm';
import userRouter from './routers/user-router';
//processes json requests, have access to object immediately
// npm install --only-dev @types/express


//creating an instance of an express app by calling the express method
/*
    Express is a framework for creating web applications that communicate over HTTP.
    Express can be used to easily listen for incoming 'requests' and easily handle
    writing 'responses'.
    A server is a machine that 'serves' things. For HTTP, that means users send 'requests' and
    the server responds with 'responses'.
*/

// What is a port?
// A port is an access point to a machine. We need a port for our application to 'listen' on.
// Applications outside of our computer can send messages to a port. Our application can listen
// and respond to those messages. 
const app = express(); 
const port = 3001;
const db = require('./queries');

//this middleware will convert a request body of type application/json to
// a javascript object and define that at request.body
app.use(bodyParser.json());

//Middleware
//When requests are received by Express they pass through layers of middleware
//essentially, express has an array of middleware functions
//When a request is received it creates the 'request' and 'response' objects
//then calls the first middleware function with the following parameters
//(request, response, next)
//next is the next middleware function
//the order of middleware is important

//registering middleware
//app.use(/*middleware function */) arrow functions
//if we want typing: npm install --only-dev @types/express

//../ means go up into a folder
// curl -x -d "name=socks" -H Content-Type=application/json  "POST localhost:3001/cats 
//to test on CMD if postman isn't working
//


app.use((request: Request, response: Response, next) => {
   // response.json({message: 'Hello from middleware 1'}); //we responded
    next();
});

    //routers- we will register two routers with the routes: 'cats ' and 'food'
    //we need to remember to register the routes here
   
    app.use('/users', userRouter);
    


//another middleware
app.use((request: Request, response: Response, next) => {
    //response.json({message:'Hello from middleware 2'}); //can't respond right after 1
    next();
});



//to stop it listening, control C
//starting the server on port 3000, where the server is going to run
//access point on a server
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});


/*
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


// ** npm install pg
*/
