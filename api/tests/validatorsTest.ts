import { expect } from 'chai';
import 'mocha';

import { emailIsValid } from '../src/validators/emailValidator';
import { isValidUser } from '../src/validators/validUser';
import { UserModel } from '../src/models/user';


describe("Validators testing", function () {
  let user = <UserModel>{ id: 'TEST_USER', name: 'Test', surname: 'Test', email: 'test@email.com', password: 'P@ssw0rd', country: 'Spain', phone: 666666666, postalCode: '28001' }

  describe("Check email validator ", function () {
    it("Checked valid and invalid email", function () {
      const result = emailIsValid('test@email.com')
      expect(result).to.equal(true);

      const result2 = emailIsValid('test@test')
      expect(result2).to.equal(false);
    });
  }),
    describe("Check valid user validator", function () {
      it("Checked valid and invalid user validation response", function () {
        const result = isValidUser(user)
        expect(result).to.equal(true);

        user.id = '';
        const result2 = isValidUser(user)
        expect(!!result2).to.equal(false);
      })
    })

  //ETC
});