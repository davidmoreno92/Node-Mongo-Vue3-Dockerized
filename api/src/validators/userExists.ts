import { UserService } from '../services/user-service';
import { UserDB } from "../data-access/user-db";
import { UserModel } from '../models/user';

export const userExists = (user: UserModel) => {
    let userDb = new UserDB();
    let userService = new UserService(userDb);

    return userService.findUser(user);
}