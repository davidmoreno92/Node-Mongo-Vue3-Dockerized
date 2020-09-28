import { UserModel } from '../models/user';
import { emailIsValid } from './emailValidator';

export const isValidUser = (user: UserModel) => {
     return (user.email && user.name && emailIsValid(user.email));
}