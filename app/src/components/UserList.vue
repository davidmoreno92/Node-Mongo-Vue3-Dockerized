<template>
    <div class="user-list">
        <h2>Users list</h2>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in userList" :key="user.id" :user="user">
                        <td>{{ user.name }}</td>
                        <td>{{ user.surname }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.password }}</td>
                        <td>{{ user.country }}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.created_date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

import UserService from "../services/UserService";


export default defineComponent({
    name: "UserList",
    setup() {
        onMounted(async () => {
            const userList = await UserService.list();
            console.log(userList);
            store.commit("saveUsers", userList);
        });
        const store = useStore();
        const userList = computed(() => store.state.userList);
        return {
            userList,
        };
    },
});
</script>

<style>
</style>
