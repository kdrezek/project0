import Role from "./role";
export default class User 

{
    userId: number; // primary key
    username: string; // not null, unique
    password: string; // not null
    firstName: string; // not null
    lastName: string; // not null
    email: string; // not null
    role: any; // not null
  }