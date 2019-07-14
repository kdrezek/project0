import User from "../models/User";
import client from "../queries.js";

let  userCounter: number = 1;
const userMap: Map<Number, User> = new Map();
//map holds the key value pair, if we give a number it gives the cat back

export function createUser(user): User {
    user.userId = userCounter++;
    user.username = "username";
    user.password = "password";
    user.firstName = "First Name";
    user.lastName = "Last Name";
    user.email = "Email";
    user.role = "role";
    //registering a key-value pair
    //so i can later retrieve cats by id
    userMap.set(user.userId, user);
    return user;

}

export function getUserById(userId: number) {
    return userMap.get(userId);
}