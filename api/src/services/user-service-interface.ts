import { UserModel } from "../models/user";
import { UserLogin } from "../models/userLogin";

export interface UserServiceInterface {
  loginUser(user: UserLogin): Promise<UserLogin>
  listUsers(): Promise<UserModel[]>
  addUser(user: UserModel): Promise<UserModel>
  updateUser(user: UserModel): Promise<UserModel>
  deleteUser(user: UserModel): Promise<boolean>
  findUser(user: UserModel): Promise<UserModel>
}