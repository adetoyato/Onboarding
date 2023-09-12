<template>
<div class="home">
    <Header />
    <h1>Travel Now!</h1>
    <div>
        Interested in booking your own travel?
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

import Header from '../components/Header.vue'
export default {
    name: 'Home', 
    components: {
        Header
    }
}
</script>

<style>
</style>