import { UserDB } from "../data-access/user-db";
import { UserModel } from "../models/user";
import { UserLogin } from "../models/userLogin";
import { UserServiceInterface } from "./user-service-interface";

export class UserService implements UserServiceInterface {
    private database: UserDB;

    constructor(database: UserDB) {
        this.database = database;
    }

    public listUsers(): Promise<UserModel[]> {
        return this.database.list();
    }

    public addUser(user: UserModel): Promise<UserModel> {
        return this.database.add(user);
    }

    public updateUser(user: UserModel): Promise<UserModel> {
        return this.database.update(user);
    }

    public deleteUser(user: UserModel): Promise<boolean> {
        return this.database.delete(user);
    }

    public loginUser(user: UserLogin): Promise<UserLogin> {
        return this.database.findByCredentials(user);
    }

    public findUser(user: UserModel): Promise<UserModel> {
        return this.database.find(user);
    }
}