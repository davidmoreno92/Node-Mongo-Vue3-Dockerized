import * as mongoose from 'mongoose';

import { UserModel } from '../models/user';
import { UserLogin } from '../models/userLogin';
import { UserSchema } from "../models/userSchema";
import { UserSchemaInterface } from '../models/userSchemaInterface';

const UserSch = mongoose.model<UserSchemaInterface>('Users', UserSchema, 'Users');

export class UserDB {

    public list(): Promise<UserModel[]> {
        let userMap: Array<any> = [];

        return new Promise(function (resolve, reject) {
            UserSch.find({}, (err: Error, users: [UserModel]) => {
                if (err) reject(err);
                resolve(users);
            });


        });
    }

    public add(user: UserModel): Promise<UserModel> {
        console.log(user);
        return new Promise(function (resolve, reject) {
            let userDatabase = new UserSch(user);

            resolve(user);
        });
    }

    public delete(user: UserModel): Promise<boolean> {
        return new Promise(function (resolve, reject) {
            let userToDelete = new UserSch(user);
            const res = UserSch.remove({ _id: userToDelete.id }, (err: Error) => {
                if (!!res.count) reject(err);
            });

            resolve(!!res.count);
        });
    }

    public update(user: UserModel): Promise<UserModel> {
        return new Promise(function (resolve, reject) {

            UserSch.updateOne({ email: user.email },
                {
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    password: user.password,
                    country: user.country,
                    phone: user.phone,
                    postalCode: user.postalCode
                }, function (err: Error, affected: UserModel, resp: Response) {
                    if (err) reject(err);
                    resolve(user);
                }
            );
        });
    }

    public find(user: UserModel): Promise<UserModel> {
        return new Promise(function (resolve, reject) {
            UserSch.find({ _id: user.id }, (err: Error, user: UserModel) => {
                if (err) reject(err);
                resolve(user);
            });
        });
    }

    public findByCredentials(userLogin: UserLogin): Promise<UserModel> {
        return new Promise(function (resolve, reject) {
            UserSch.findOne({ email: userLogin.email }, (err: Error, user: UserModel) => {
                if (err) reject(err);
                resolve(user);
            });
        });
    }

}