import axios from "axios";

import { User } from '@/models/user';
import { UserLogin } from '@/models/userLogin';

const ENDPOINT_PATH = "http://localhost:3000/";

export default {
    async list(): Promise<[User]> {
        return ((await axios.get(ENDPOINT_PATH + 'users')).data).data;
    },
    async login(user: UserLogin): Promise<any> {
        return (await axios.post(ENDPOINT_PATH + 'login', user));
    },
    add(user: User): Promise<any> {
        return axios.post(ENDPOINT_PATH + 'users', user);
    },
    edit(user: User): Promise<any> {
        return axios.put(ENDPOINT_PATH + 'users', user);
    },
    async delete(user: User): Promise<Boolean> {
        return await axios.delete(ENDPOINT_PATH + `/users/${user.id}`);
    }
};