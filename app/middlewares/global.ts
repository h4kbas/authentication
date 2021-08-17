import IUser from "../schemas/user";

//Needed to extend session type
declare module 'express-session' {
  interface SessionData {
    profile?: IUser;
  }
}