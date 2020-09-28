import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    surname: {
        type: String
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    password: {
        type: String
    },
    country: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});