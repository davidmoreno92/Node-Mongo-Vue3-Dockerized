<template>
    <div>
        <h1>Dashboard</h1>
        <br />
        <UserList></UserList>
        <UserAdd />
        <UserEdit v-bind:user="userToEdit" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { reactive } from "vue";

import UserList from "../components/UserList.vue";
import UserAdd from "../components/UserAdd.vue";
import UserEdit from "../components/UserEdit.vue";

export default defineComponent({
    name: "Dashboard",
    components: {
        UserList,
        UserAdd,
        UserEdit,
    },
    setup() {
        const userToEdit = {
            id: '5f6fbc26e7d018dac1a17936',
            name: 'test',
            surname: 'test',
            email: 'user@email.com',
            password: 'P@ssw0rd',
            country: 'Spain',
            phone: 666666666,
            postalCode: 28001,
        };

        return {
            userToEdit
        }
    },
});
</script>

<style>
</style>
