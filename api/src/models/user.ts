export interface UserModel extends Document {
    id: string;
    name: string,
    surname: string,
    email: string,
    password: string,
    country: string,
    phone: number,
    postalCode: string,
}