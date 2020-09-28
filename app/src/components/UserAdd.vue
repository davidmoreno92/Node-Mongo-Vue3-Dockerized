<template>
    <div>
        <h2>User Add</h2>
        <form @submit.prevent="addUser(user)">
            <div class="form-row">
                <div class="col-6 mb-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        v-model="user.name"
                    />
                </div>
                <div class="col-6">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Surname"
                        v-model="user.surname"
                    />
                </div>
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        v-model="user.email"
                    />
                </div>
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Country"
                        v-model="user.country"
                    />
                </div>
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                        v-model="user.phone"
                    />
                </div>
            </div>
            <button type="submit" class="btn btn-primary m-3">Add user</button>
        </form>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

import { User } from "../models/user";
import UserService from "../services/UserService";

export default defineComponent({
    name: "UserAdd",
    components: {},
    data() {
        return {
            user: {
                id: "1",
                name: "test",
                surname: "test",
                email: "user@email.com",
                password: "P@ssw0rd",
                country: "Spain",
                phone: 666666666,
                postalCode: 28001,
            },
        };
    },
    setup() {
        const store = useStore();

        function addUser(user: User) {
            UserService.add(user).then((userAdded) => {
                store.commit("addUser", userAdded.data.data);
            });
        }

        return {
            addUser,
        };
    },
});
</script>

<style>
</style>
