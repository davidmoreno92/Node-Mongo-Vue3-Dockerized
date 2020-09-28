import { Request, Response } from "express";

//TO DELETE API RESPONSE IS JUST FOR MOCK
import { ApiResponse } from "./models/apiResponse";
import { UserController } from "./controllers/userController";


export class Routes {
    private userController: UserController;

    constructor(userController: UserController) {
        this.userController = userController;
    }

    public routes(app: any): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Welcome to technical test API'
                })
            })
        app.route('/users')
            .get((req: Request, res: Response) => {
                return this.userController.listUsers(res);
            })
            .post((req: Request, res: Response) => {
                return this.userController.addUser(req.body, res);
            })
            .put((req: Request, res: Response) => {
                return this.userController.updateUser(req.body, res);
            })
        app.route('/login')
            .post((req: Request, res: Response) => {
                return this.userController.loginUser(req.body, res);
            })
        app.route('/users/:userId')
            .delete((req: Request, res: Response) => {
                return this.userController.deleteUser(req.body, res);
            })
    }
}