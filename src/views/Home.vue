<template>
<div class="home">
    <Header />
    <h1>Travel Now!</h1>
    <div id="content">
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

import Header from '../components/Header.vue'
export default {
    name: 'Home', 
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    margin: 300px;
    margin-bottom: -1px;
}

#content {
    text-align: center;
    border: 15px white;
    margin: 20px;
}
</style>