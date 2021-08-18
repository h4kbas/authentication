import express, { Router } from "express";
import mongoose from "mongoose";
//import twig from "twig";
import session from "express-session";

import config from "./config";

export default class App {
  private app: express.Express;

  public async initializeDatabase(dbname: string, dbport: Number = 27017) {
    // Connecting to mongo named docker container including mongodb
    return await mongoose.connect(`mongodb://mongo:${dbport}/${dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

  }

  public initializeSession() {
    const session_config = config.session;

    this.app.set('trust proxy', 1) // trust first proxy

    this.app.use(session(session_config))

  }

  public initializeTemplate() {
    this.app.set("twig options", config.template);
  }

  public initializeBodyParser() {
    // parse application/x-www-form-urlencoded
    this.app.use(express.urlencoded()); //Parse URL-encoded bodies
  }

  public listen(port: Number, callback: () => void) {
    this.app.listen(port, callback);
  }

  public registerController(prefix: string, ctl: Router) {
    this.app.use(prefix, ctl);
  }

  public registerMiddleware(middleware: any) {
    this.app.use(middleware);
  }

  constructor() {
    this.app = express();
  }
}