<template>
    <div class="login">
        <h1 class="title">Login</h1>
        <form novalidate class="form" @submit.prevent="logIn()">
            <label class="form-label" for="#email">Email:</label>
            <input
                v-model="loginForm.email"
                class="form-input"
                type="email"
                id="email"
                required
                placeholder="Email"
            />
            <label class="form-label" for="#password">Password:</label>
            <input
                v-model="loginForm.password"
                class="form-input"
                type="password"
                id="password"
                placeholder="Password"
            />
            <button class="form-submit" type="button" v-on:click="logIn()">
                Login
            </button>
            <div class="alert alert-warning mt-3" v-if="loginForm.error">
                <strong>{{ loginForm.error }}</strong>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import { router } from "../router";

import UserService from "../services/UserService";
import { UserLogin } from "../models/userLogin";

export default defineComponent({
    name: "Login",
    components: {
        UserService,
    },
    setup(props, { emit }) {
        const store = useStore();
        const loginForm = reactive({
            email: "",
            password: "",
            error: "",
        });

        async function logIn() {
            const user: UserLogin = {
                email: loginForm.email,
                password: loginForm.password,
            };

            const userLogged = (await UserService.login(user)).data;
            if (userLogged.message) loginForm.error = userLogged.message;

            store.commit("loginUser", userLogged.data);
            router.push({
                name: "dashboard",
            });
        }

        return {
            loginForm,
            logIn,
        };
    },
});
</script>

<style lang="scss" scoped>
.login {
    padding: 2rem;
}
.title {
    text-align: center;
}
.form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    min-width: 350px;
    max-width: 100%;
    background: rgba(19, 35, 47, 0.9);
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
    margin-top: 2rem;
    color: white;
    margin-bottom: 0.5rem;
    &:first-of-type {
        margin-top: 0rem;
    }
}
.form-input {
    padding: 10px 15px;
    background: none;
    background-image: none;
    border: 1px solid white;
    color: white;
    &:focus {
        outline: 0;
        border-color: #1ab188;
    }
}
.form-submit {
    background: #1ab188;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: #0b9185;
    }
}
</style>