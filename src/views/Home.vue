<template>
<b-container fluid>
<b-row>
<b-col xl="10" lg="9" sm="9">
    <Header />
<div class="home">
    
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
</b-col>
</b-row>
</b-container>
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