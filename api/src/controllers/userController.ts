import { Response } from 'express';

import { ApiResponse } from '../models/apiResponse';
import { isValidUser } from '../validators/validUser';
import { UserModel } from '../models/user';
import { UserService } from '../services/user-service';
import { userExists } from '../validators/userExists';
import { UserLogin } from '../models/userLogin';


export class UserController {
    private userService: UserService;
    private apiResponse: ApiResponse;
    readonly CODE_OK = 200;
    readonly CODE_KO = 400;

    constructor(userService: UserService) {
        this.userService = userService;
        this.apiResponse = { status: this.CODE_OK } as ApiResponse;
    }

    public loginUser(user: UserLogin, res: Response) {
        if (!user.email || !user.password) {
            this.apiResponse.message = "User doesn't exists or ir not valid";
            this.apiResponse.status = this.CODE_KO;
            return res.status(400).json(this.apiResponse);
        }

        this.userService.loginUser(user)
            .then(loggedUser => {
                if (!loggedUser) {
                    this.apiResponse.message = "Password specified is not valid or user doesn't exists"
                    return res.json(this.apiResponse);
                }
                this.apiResponse.data = loggedUser;
                return res.json(this.apiResponse);
            })
            .catch(err => res.status(400).json(err));
    }

    public listUsers(res: Response) {
        this.userService.listUsers()
            .then(users => {
                this.apiResponse.data = users;
                return res.json(this.apiResponse);
            })
            .catch(err => res.status(400).json(err));
    }

    public addUser(user: UserModel, res: Response) {
        if (!user || !isValidUser(user)) return res.status(400).json({ message: "User is not valid" });

        this.userService.addUser(user)
            .then(createdUser => {
                if (!createdUser) {
                    this.apiResponse.message = "User couldn't be created"
                    return res.json(this.apiResponse);
                }
                this.apiResponse.data = createdUser;
                return res.json(this.apiResponse);
            })
            .catch(err => res.status(400).json(err));

    }

    public updateUser(user: UserModel, res: Response) {
        if (!user || !userExists(user) || !isValidUser(user)) return res.status(400).json({ message: "User doesn't exists or ir not valid" });

        this.userService.updateUser(user)
            .then(updatedUser => {
                if (!updatedUser) {
                    this.apiResponse.message = "User couldn't be updated"
                    return res.json(this.apiResponse);
                }
                this.apiResponse.data = updatedUser;
                return res.json(this.apiResponse);
            })
            .catch(err => res.status(400).json(err));
    }

    public deleteUser(user: UserModel, res: Response) {
        if (!user || !userExists(user)) return res.status(400).json({ message: "User doesn't exists" });

        this.userService.deleteUser(user)
            .then(isUserDeleted => {
                this.apiResponse.message = `User found and deleted (true/false): ${isUserDeleted}`;
                return res.json(this.apiResponse);
            })
            .catch(err => res.status(400).json(err));

    }
}