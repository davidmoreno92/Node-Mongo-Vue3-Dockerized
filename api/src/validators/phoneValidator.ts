import * as EmailValidator from 'email-validator';

export const phoneIsValid = (email: string) => {
    //TODO: Change validator to phone
    return EmailValidator.validate(email);
}