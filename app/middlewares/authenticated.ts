import { Request, Response, NextFunction } from "express";
import IUser from "../schemas/user";


export default function (req: Request, res: Response, next: NextFunction) {
  // If the user has been already logged in
  if (req.session.profile) {
    next();
  }
  else {
    res.redirect("/");
  }
}