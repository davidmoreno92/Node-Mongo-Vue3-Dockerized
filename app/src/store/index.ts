import { createStore } from 'vuex'

import { User } from '@/models/user';


type State = {
    userList: Array<User>
    userLogged: {}
}

const state: State = {
    userList: [],
    userLogged: {}
};

const mutations = {
    loginUser(state: State, user: User) {
        state.userLogged = user;
    },
    saveUsers(state: State, userList: [User]) {
        state.userList = userList;
    },
    addUser(state: State, user: User) {
        state.userList.push({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            country: user.country,
            phone: user.phone,
            postalCode: user.postalCode,
        });
    },
    editUser(state: State, user: User) {
        const index = state.userList.findIndex(
            item => item.id === user.id
        );
        state.userList[index] = user;
    },
    removeUser(state: State, id: number) {
        state.userList = state.userList.filter(
            item => id !== id
        );
    }
};

export const store = createStore({ state, mutations });
