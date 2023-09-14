<template>
<div class="home">
    <Header />
    <h1>Travel Now!</h1>
    <div>
        Looking for some spice in your life? Book a travel now!
        <router-link to="/login">
            Login
        </router-link>
        or
        <router-link to="/register">
            Sign Up
        </router-link>
    </div>
</div>
</template>

<script>

import Header from '../components/header.vue'
export default {
    name: 'Home', 
    components: {
        Header
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 300px;
    margin-bottom: -1px;
}

div {
    text-align: center;
}
</style>