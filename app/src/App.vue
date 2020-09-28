<template>
    <div>
        <div id="nav">
            <router-link to="/login">Login</router-link>
            <router-link to="/">Dashboard</router-link>
            <span v-if="isAuthenticated"> | <a @click="logout">Logout</a></span>
        </div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { router } from "./router";

export default defineComponent({
    name: "App",
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    padding: 0 8px;
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
