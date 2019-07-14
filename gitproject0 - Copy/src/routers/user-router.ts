import express, {Request, Response } from 'express';
import User from '../models/user';
import * as userService from '../services/user-services';

const userRouter = express.Router();
userRouter.post('', (request: Request, response: Response) => {
    console.log('Handling post to users');
    const user = userService.createUser(request.body);
    if (user){
        response.status(201).json(user);
    } else {
        response.sendStatus(500);
    }

});

userRouter.get('/:id',(request: Request, response: Response) => {
    const id = parseInt(request.params.id); //we can get the id of the user were requesting
    console.log('Handling request for user with id: ' + id);
    const user: User = userService.getUserById(id);
    if (user) {
        response.json(user);
    }else { 
        //not found
        response.sendStatus(404);
    }
    
    response.json(user);

});

export default userRouter;