<template>
<div class="home">
    <Welcome :post="welcomeScreen" />
    <Welcome :post="post" v-for="(post, index) in message1" :key="index" />
</div>
</template>

<script>
import Welcome from "../views/Welcome";
export default {
    name: "Home", 
    components: { 
        Welcome,
        },
    data() {
        return {
            welcomeScreen: {
                title: "Looking for a getaway?",
                message: "Book a travel now!",
                welcomeScreen: true,
                photo: "planebg1",
            },
            message1: [
                {
                    title: "Places to go, things to see...",
                    msgHTML: "What will you do next?",
                    coverPhoto: "travel1",
                }
            ]
        }
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