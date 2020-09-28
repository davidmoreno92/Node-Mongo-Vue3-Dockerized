import { expect } from 'chai';
import 'mocha';

import { UserService } from '../src/services/user-service';
import { isValidUser } from '../src/validators/validUser';
import { UserModel } from '../src/models/user';
import { UserDB } from '../src/data-access/user-db';

describe("User service testing", function () {
    let userDB = new UserDB();
    let userService = new UserService(userDB);
    let user = <UserModel>{ id: 'TEST_USER', name: 'Test', surname: 'Test', email: 'test@email.com', password: 'P@ssw0rd', country: 'Spain', phone: 666666666, postalCode: '28001' }

    describe("Create new user", function () {
        it("Checked create user", function () {
            userService.addUser(user).then(user => {
                const result = isValidUser(user);
                expect(result).to.equal(true);
            })
        });
    }),
    describe("Delete an user", function () {
        it("Checked delete user", function () {
            userService.deleteUser(user).then(idDeleted =>{
                expect(idDeleted).to.equal(true);
            })
        });
    })
    //ETC
});