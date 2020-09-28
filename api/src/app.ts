import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import express, { Application } from 'express';
import mongoose from "mongoose";

import { Routes } from "./routes";
import { UserController } from "./controllers/userController"
import { UserService } from "./services/user-service";
import { UserDB } from "./data-access/user-db";

dotenv.config();

class App {
    private userDb = new UserDB();
    private userService = new UserService(this.userDb);
    private userController = new UserController(this.userService);
    public app: Application = express();
    public routePrv: Routes = new Routes(this.userController);
    //public mongoUrl: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`;
    public mongoUrl: string = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`;

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, ssl: false })
            .catch(err => {
                console.log(err)
            });
    }
}

export default new App().app;
