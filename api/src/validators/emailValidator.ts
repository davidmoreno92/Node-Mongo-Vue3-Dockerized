import * as EmailValidator from 'email-validator';

export const emailIsValid = (email: string) => {
    return EmailValidator.validate(email);
}