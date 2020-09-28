<template>
    <div>
        <h2>User Edit</h2>
        <form @submit.prevent="editUser(user)">
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
            <button type="submit" class="btn btn-primary m-3">Edit user</button>
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
    name: "UserEdit",
    components: {},
    props: {
        user: {},
    },
    setup(props) {
        const store = useStore();

        function editUser(user: User) {
            UserService.edit(user).then((userEdited) => {
                store.commit("editUser", userEdited.data.data);
            });
        }

        return {
            editUser,
        };
    },
});
</script>

<style>
</style>
